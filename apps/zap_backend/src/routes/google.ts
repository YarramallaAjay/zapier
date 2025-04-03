import express from "express";
import passport from "../auth/google";
import jwt from "jsonwebtoken";

const router:express.Router = express.Router();

router.use(passport.initialize());
router.use(passport.session());

// 🔹 Google OAuth Login
router.get("/google", passport.authenticate("google", 
  { scope: ["profile", "email"],
    accessType:'offline'
}));

// 🔹 Google OAuth Callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    if (!req.user) {
      return res.redirect("/login");
    }
    
    const user = req.user as { user: any; token: string };
    res.cookie("zapper", user.token, { httpOnly: true, secure: false });
    res.redirect("http://localhost:3000/dashboard");
  }
);

// 🔹 Get User Profile
router.get("/profile", (req, res) => {
  if (!req.isAuthenticated()){
    res.status(401).json({ error: "Unauthorized" });
    return;
    }    
  res.json(req.user);
});

// 🔹 Logout User
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    res.clearCookie("jwt");
    res.json({ message: "Logged out successfully" });
  });
});

export default router;
