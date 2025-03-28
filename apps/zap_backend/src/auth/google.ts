import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { password } from "bun";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../config";


dotenv.config();

const client = new PrismaClient();

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID || "",
      clientSecret: GOOGLE_CLIENT_SECRET || "",
      callbackURL: "http://localhost:3001/auth/google/callback",
      scope: ["profile", "email"],
    
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(refreshToken)

      ;console.log(accessToken)
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) return done(new Error("No email found"), "");
        const user = await client.user.upsert({
  where: { email },
  update: {
    tokens: {
      create: [
        {
          accessToken: accessToken,
          refreshToken: refreshToken,
          provider: "google",
        },
      ],
    },
  },
  create: {
    email,
    name: profile.displayName,
    password: "",
    tokens: {
      create: [
        {
          accessToken: accessToken,
          refreshToken: refreshToken,
          provider: "google",
        },
      ],
    },
  },
});

        // Upsert user without provider in User table
        // Generate JWT Token
        const jwtToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || "secret", {
          expiresIn: "1h",
        });

        // Upsert tokens with JWT in the same TokenStore table
        await client.user.update({
          where: { id: user.id },
          data: {
            password:jwtToken,
          },
        });

        return done(null, { user, token: jwtToken });
      } catch (error) {
        return done(error, " ");
      }
    }
  )
);

// Serialize user into session
passport.serializeUser((user: any, done) => {
  done(null, user.user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await client.user.findUnique({
      where: { id: id as number },
      include: {tokens: true },
    });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
