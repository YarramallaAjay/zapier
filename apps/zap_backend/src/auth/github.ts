// import passport from "passport";
// import { Strategy as GitHubStrategy } from "passport-github2";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
// import { PrismaClient } from "@prisma/client";
// import { GITHUB_CALLBACK_URL, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, JWT_SECRET } from "../config.js";
// import { UserDetails } from "@repo/types/dist/UserSession.js";
// import { Profile } from "passport-github2";

// // Add type declarations for passport-github2
// // declare module 'passport-github2' {
// //   interface Profile {
// //     id: string;
// //     displayName: string;
// //     emails?: Array<{ value: string }>;
// //   }
// // }

// dotenv.config();

// const client = new PrismaClient();

// passport.use(
//   new GitHubStrategy(
//     {
//       clientID: GITHUB_CLIENT_ID || "",
//       clientSecret: GITHUB_CLIENT_SECRET || "",
//       callbackURL: GITHUB_CALLBACK_URL || "http://localhost:3001/auth/github/callback",
//     },
//     async (accessToken: string, refreshToken: string, profile: Profile, done: (error: Error | null, user?: Express.User) => void) => {
//       try {
//         const email = profile.emails?.[0]?.value;
//         if (!email) return done(new Error("No email found"));

//         const user = await client.user.findUnique({
//           where: { email },
//           include: {
//             tokens: true,
//           },
//         });

//         let finalUser;

//         if (user) {
//           const existingToken = user.tokens.find(t => t.provider === "github");

//           if (existingToken) {
//             await client.tokenStore.update({
//               where: {
//                 id: existingToken.id,
//               },
//               data: {
//                 accessToken,
//                 refreshToken: refreshToken || accessToken,
//               },
//             });
//           } else {
//             await client.tokenStore.create({
//               data: {
//                 accessToken,
//                 refreshToken: refreshToken || accessToken,
//                 provider: "github",
//                 user: {
//                   connect: { id: user.id },
//                 },
//               },
//             });
//           }

//           finalUser = user;
//         } else {
//           finalUser = await client.user.create({
//             data: {
//               email,
//               name: profile.displayName,
//               password: accessToken,
//               tokens: {
//                 create: [
//                   {
//                     accessToken,
//                     refreshToken: refreshToken || accessToken,
//                     provider: "github",
//                   },
//                 ],
//               },
//             },
//           });
//         }

//         const jwtToken = jwt.sign(
//           { userId: finalUser.id },
//           JWT_SECRET || "jwtSecret",
//           { expiresIn: '24h' }
//         );
//         const cachedUser = await UserDetails.getUser(finalUser.id);
//         return done(null, { ...cachedUser, token: jwtToken });
//       } catch (error) {
//         return done(error instanceof Error ? error : new Error('Unknown error'));
//       }
//     }
//   )
// );

// // Serialize user into session
// passport.serializeUser((user, done) => {
//   done(null, (user as any).id);
// });

// // Deserialize user from session
// passport.deserializeUser(async (id: string, done) => {
//   try {
//     const user = await UserDetails.getUser(id);
//     done(null, user);
//   } catch (error) {
//     done(error instanceof Error ? error : new Error('Unknown error'), null);
//   }
// });

// export default passport;
