const { Router } = require("express");
const {
  passwordTesting,
  sendingPassword,
} = require("../controllers/passwordController");
const router = Router();

router.get("/", passwordTesting);

router.post("/password", sendingPassword);

module.exports = router;
