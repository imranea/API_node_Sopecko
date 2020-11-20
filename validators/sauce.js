const { check } = require("express-validator");

exports.createSauce = [
  check("name").isString(),
  check("manufacturer").isString(),
  check("description").isString(),
  check("mainPepper").isString(),
  check("heat").isInt(),
  check("likes").isInt(),
  check("dislikes").isInt(),
];
