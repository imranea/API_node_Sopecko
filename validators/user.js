const { check } = require("express-validator");

exports.signup = [check("email").isEmail(), check("password").isString()];
