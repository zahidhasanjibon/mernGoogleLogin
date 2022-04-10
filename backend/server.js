const express = require("express");
const cookieSession = require("cookie-session");

const dotenv = require("dotenv");
const passport = require("passport");
const cors = require("cors");
const app = express();
// internal
const router = require("./routes/auth");

const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: ["jibon"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

const passportSetup = require("./passport");
passportSetup(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", router);

app.listen(PORT, () => {
  console.log(`port listening on ${PORT}`);
});
