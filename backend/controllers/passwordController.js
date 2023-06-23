const { strongPasswordSteps } = require("../lib/helpers");
const PasswordModel = require("../models/passwords");

module.exports.passwordTesting = async (req, res) => {
  res.json({ msg: "Connected........" });
};

module.exports.sendingPassword = async (req, res) => {
  const { password } = req.body;
  let validPassword = await strongPasswordSteps(password);
  if (validPassword.value) {
    PasswordModel.create({ password }).then((data) => {
      res.json({
        message: validPassword.message,
        steps: validPassword.steps,
        password: password,
        valid:validPassword.value
      });
    });
  } else {
    res.json({
      message: validPassword.message,
      steps: validPassword.steps,
      password: password,
      valid:validPassword.value
    });
  }
};
