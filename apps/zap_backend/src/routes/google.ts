import express from "express";
import passport from "@/auth/google";

const router: express.Router = express.Router();

router.use(passport.initialize());
router.use(passport.session());

// 🔹 Google OAuth Login
router.get("/", passport.authenticate("google", { scope: ["profile", "email"], accessType: "offline" }));

// 🔹 Google OAuth Callback
router.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    if (!req.user) {
      return res.redirect("/login");
    }

    const user = req.user as any; 
    console.log(user) // Fix: Passport stores the user directly
    res.cookie("zapper", user.jwtToken, { httpOnly: true, secure: false });
    res.redirect("http://localhost:3000/dashboard");
  }
);


// 🔹 Get User Profile (Check if user is authenticated)
router.get("/profile", async(req, res) => {
  if (!req.isAuthenticated()) {
     res.status(401).json({ error: "Unauthorized" });
     return;
  }
  res.json(req.user);
});

// 🔹 Logout User (Clear correct cookie)
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: "Logout failed" });
    res.clearCookie("zapper"); // Fixed cookie name
    res.json({ message: "Logged out successfully" });
    return;
  });
});

export default router;
