const express = require("express");
const router = express.Router();
const passport = require("passport");
const Data = require("../models/Data");
const Session = require("../models/Session");

//routes for GitHub strategy
// Route to initiate the GitHub OAuth flow
router.get("/github", (req, res) => {
  // Redirect the user to GitHub's OAuth authorization endpoint
  const url =
    "https://github.com/login/oauth/authorize" +
    "?client_id=" +
    process.env.GITHUB_ID +
    "&redirect_uri=" +
    encodeURIComponent(
      `${process.env.SELF_REFERENCE_URL}/auth/github/callback`
    ) +
    "&scope=profile";
  res.json({ redirectUrl: url });
});

// Route to handle the callback from GitHub OAuth
router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  async (req, res) => {
    res.cookie('valid','900000000');
    const myCookie = req.cookies['valid'];
    // Successful authentication, redirect home or to dashboard
    // res.cookie("sessionID", req.sessionID, { httpOnly: true });
    const sesion = await Session.create({
      session: {
        session_id: req.sessionID,
        creation_date: new Date(),
         github_id: req.user.githubId,
        // ip: requestIp.getClientIp(req.ip),
      },
    });
    console.log('-----sess');
    console.log(sesion);
    console.log(req.user)
    res.set('Set-Cookie', `sessionID=${req.sessionID}; Path=/; HttpOnly`)
    res.redirect(`${process.env.REACT_HOST}/dashboard`);
  }
);

router.post("/logout", (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    return res.send(true);
  });
});

module.exports = router;
