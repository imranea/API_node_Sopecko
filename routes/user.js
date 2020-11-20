const express = require("express");
const router = express.Router();
const validator = require("../validators/user");
const userCtrl = require("../controllers/userController");
const { apiLimiter } = require("../middleware/protect");

router.post("/signup", validator.signup, userCtrl.signup);
router.post("/login", apiLimiter, userCtrl.login);

module.exports = router;
