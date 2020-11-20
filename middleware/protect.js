const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 25,
  message: "Too many accounts connexion from this IP, please try again later",
});

module.exports = { apiLimiter };
