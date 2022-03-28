const jwt = require("jsonwebtoken");

// DEVELOPMENT ONLY. Move to environment variable later.
const jwtSecret = "secret";

module.exports = function (req, res, next) {
  // Get token from request header
  const token = req.header("x-auth-token");

  // Check if token exists
  if (!token) {
    return res.status(401).json({ msg: "No token, unauthorized" });
  }

  // Decode the token and get the user
  try {
    const decoded = jwt.verify(token, jwtSecret);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
