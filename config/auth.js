const db = require("./data-source");
const User = require("../api/user/user"); // Ensure the correct path to the User model
const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;

passport.use(
  new BearerStrategy(async (token, done) => {
    try {
      const user = await User.findOne({ where: { token: token } });
      if (!user) {
        return done(null, false);
      }
      return done(null, user); //
    } catch (err) {
      return done(err); //myerr
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
