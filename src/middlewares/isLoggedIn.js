export const isLoggedIn = (req, res, next) => {
  if (req.cookies.username) {
    next();
  } else {
    //res.redirect("/webchat/register");
    res.redirect("/register");
  }
};
