const attachCookie = ({ res, token }) => {
  const thirtyDays = 1000 * 60 * 60 * 24 * 30;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + thirtyDays),
    secure: process.env.NODE_ENV === "production",
  }); // then test the login function in Postman and look for Cookies
};

export default attachCookie;
