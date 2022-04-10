// const router = require("express").Router();

// const passport = require("passport");
// const CLIENT_URL = "http://localhost:3000/";

// router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// router.get(
//   "/google/callback",
//   passport.authenticate("google", { failureRedirect: "/login/failed" }),
//   function (req, res) {
//     console.log(req.user);

//     // Successful authentication, redirect home.
//     res.redirect(CLIENT_URL);
//   }
// );

// router.get("/login/failed", (req, res) => {
//   res.status(401).json({
//     success: false,
//     message: "failure",
//   });
// });
// router.get("/login/success", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "successful",
//     user: req.user,
//   });
// });

// router.get("/logout", (req, res) => {
//   req.logOut();
//   res.redirect(CLIENT_URL);
// });

// // router.get(
// //   "/google/callback",
// //   passport.authenticate("google", {
// //     successRedirect: CLIENT_URL,
// //     failureRedirect: "/login/failed",
// //   })
// // );

// module.exports = router;

const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
  console.log(req.user);
  if (req.user) {
    return res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
  return res.status(201).json({
    message: "no user",
  });
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    console.log(req.isAuthenticated());

    console.log(req.session);
    res.redirect(CLIENT_URL);
  }
);

module.exports = router;
