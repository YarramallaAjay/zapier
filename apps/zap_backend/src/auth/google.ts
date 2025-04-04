import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET } from "../config";
import {  UserDetails } from "@repo/types/dist/UserSession";

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
      try {
        const email = profile.emails?.[0]?.value;
        if (!email) return done(new Error("No email found"), false);

        // Upsert user with tokens
        const user = await client.user.upsert({
          where: { email },
          update: {
            tokens: {
              create: [
                {
                  accessToken,
                  refreshToken: refreshToken || accessToken,
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
                  accessToken,
                  refreshToken: refreshToken || accessToken,
                  provider: "google",
                },
              ],
            },
          },
        });
        if (!user) return done(new Error("User not found"), false);

        // Generate JWT Token
        const JWTSecret = JWT_SECRET || "jwtSecret";
        const jwtToken = jwt.sign({ userId: user.id,accesstoken:accessToken }, JWTSecret, { expiresIn: "1h" });

        // Update user details cache
        const cachedUser=await UserDetails.getUser(user.id);
        return done(null, {...cachedUser, jwtToken} as any);
      } catch (error) {
        return done(error,false);
      }
    }
  )
);

// Serialize user into session
passport.serializeUser(
  (user:Express.User, done: (err: any, id: number) => void) => {
    done(null,user.id);
  }
);

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserDetails.getUser(id as number);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
