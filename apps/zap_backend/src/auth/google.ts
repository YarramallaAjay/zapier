import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET } from "@/config";
import {  UserDetails } from "@repo/types/dist/UserSession.js";

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
        
            const user = await client.user.findUnique({
              where: { email },
              include: {
                tokens: true,
              },
            });
        
            let finalUser;
        
            if (user) {
              const existingToken = user.tokens.find(t => t.provider === "google");
        
              if (existingToken) {
                // Update existing token
                await client.tokenStore.update({
                  where: {
                    id: existingToken.id,
                  },
                  data: {
                    accessToken,
                    refreshToken: refreshToken || accessToken,
                  },
                });
              } else {
                // Create new token
                await client.tokenStore.create({
                  data: {
                    accessToken,
                    refreshToken: refreshToken || accessToken,
                    provider: "google",
                    user: {
                      connect: { id: user.id },
                    },
                  },
                });
              }
        
              finalUser = user;
            } else {
              // Create user + token
              finalUser = await client.user.create({
                data: {
                  email,
                  name: profile.displayName,
                  password: accessToken, // Use real flow in production!
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
            }
        
            const jwtToken = jwt.sign(
              { userId: finalUser.id, accesstoken: accessToken },
              JWT_SECRET || "jwtSecret"
            );
        
            const cachedUser = await UserDetails.getUser(finalUser.id);
        
            return done(null, { ...cachedUser, jwtToken } as any);
          } catch (error) {
            return done(error, false);
          }
        }    
  ))

// Serialize user into session
passport.serializeUser(
  (user:Express.User, done: (err: any, id: string) => void) => {
    done(null,(user as any).id);
  }
);

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserDetails.getUser(String(id));
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
