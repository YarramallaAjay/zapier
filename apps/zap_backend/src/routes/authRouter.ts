import { PrismaClient } from '../.././../../generated/prisma';
import express from 'express';
import bcrypt from 'bcrypt';
import "dotenv/config";
import { signInSchema, signupSchema } from '@/utils/zodSchema';
import { Apiresponse } from '@/utils/Response';
import passport from 'passport';
import Jwt  from 'jsonwebtoken';

const router: express.Router = express.Router();
const client = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "jwtsecret";


router.use(express.json())
router.use(passport.initialize());
router.use(passport.session());

//  SIGNUP
router.post("/signup", async (req, res) => {
  const parsedData = signupSchema.safeParse(req.body);
  if (!parsedData.success) {
    Apiresponse.error(res, "Invalid input. Please check your details.", 400,{});
    return;
  }

  const { name, email, password } = parsedData.data;

  const userExisted = await client.user.findFirst({ where: { name } });
  if (userExisted) {
     Apiresponse.success(res, userExisted, "User already exists. Please log in.", 200);
     return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);


  const createUser = await client.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
     
    }
  });
  const token=await Jwt.sign({
    id:createUser.id
  },JWT_SECRET)

  client.tokenStore.create({
    data:{
        accessToken:token,
        refreshToken:token,
        provider:"basic",
        userId:createUser.id
    }
  })
   Apiresponse.success(res, createUser, "User created successfully", 201);
   return;
});

// SIGNIN
router.post("/signin", async (req, res) => {
  const parsedData = signInSchema.safeParse(req.body);
  if (!parsedData.success) {
     Apiresponse.error(res, "Invalid input. Please check credentials.", 400,{});
     return
  }

  const { email, password } = parsedData.data;
  const user = await client.user.findFirst({
    where: { email },
    include: { team: true, tokens: true, zaps: true }
  });

  if (!user) {
     Apiresponse.error(res, "User not found", 404,{});
     return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
     Apiresponse.error(res, "Incorrect password", 401,{});
     return
  }

  const tokenData = user.tokens.find(token => token.provider === "basic");
  if (!tokenData) {
     Apiresponse.error(res, "Token not found for user", 401,{});
     return
  }

  res.cookie("zapper", tokenData.accessToken, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    sameSite: 'lax',
    secure: false
  });

   Apiresponse.success(res, user, "Login successful", 200);
   return;
});




// GitHub OAuth Login
router.get("/github", passport.authenticate("github", { scope: ['user:email'] }));

// GitHub OAuth Callback
router.get("/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    if (!req.user) {
      return res.redirect("/login");
    }
    const user = req.user as any;
    res.cookie("zapper", user.jwtToken, { httpOnly: true, secure: false });
    res.redirect("http://localhost:3000/dashboard");
  }
);

// Get Profile
router.get("/github/profile", async (req, res) => {
  if (!req.isAuthenticated()) {
     Apiresponse.error(res, "Unauthorized", 401,{});
     return;
  }
   Apiresponse.success(res, req.user, "Profile fetched", 200);
   return
});



// GitHub OAuth Login
router.get("/google", passport.authenticate("github", { scope: ['user:email'] }));

// GitHub OAuth Callback
router.get("/google/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  (req, res) => {
    if (!req.user) {
      return res.redirect("/login");
    }
    const user = req.user as any;
    res.cookie("zapper", user.jwtToken, { httpOnly: true, secure: false });
    res.redirect("http://localhost:3000/dashboard");
  }
);

// Get Profile
router.get("/google/profile",async (req, res) => {
  if (!req.isAuthenticated()) {
     Apiresponse.error(res, "Unauthorized", 401,{});
     return;
  }
   Apiresponse.success(res, req.user, "Profile fetched", 200);
   return;
});

// Logout
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return Apiresponse.error(res, "Logout failed", 500,{});
    res.clearCookie("zapper");
    return Apiresponse.success(res, null, "Logged out successfully", 200);
  });
});

export default router;
