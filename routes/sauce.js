const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");
const validator = require("../validators/sauce");
const sauceCtrl = require("../controllers/sauceController");

router.post("/:id/like", auth, sauceCtrl.like);
router.post("/", auth, validator.createSauce, multer, sauceCtrl.create);
router.delete("/:id", auth, sauceCtrl.delete);
router.put("/:id", auth, multer, sauceCtrl.modifySauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.get("/", auth, sauceCtrl.list);

module.exports = router;
