/* module.exports = {
  ensureAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect("http://localhost:3000/login");
    }
  },
  ensureGuest: (req, res, next) => {
    console.log("not auth yet");
    if (req.isAuthenticated()) {
      console.log("you are auth");
      res.send("user is logged in");
    } else {
      return next();
    }
  },
};
 */
export const ensureAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("http://localhost:3000/login");
  }
};

export const ensureGuest = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("http://localhost:3000/login");
  }
};
