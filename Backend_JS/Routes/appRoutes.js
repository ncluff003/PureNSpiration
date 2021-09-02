const express = require(`express`);

const messageController = require(`./../Controllers/messageController`);

const router = express.Router();

router.route(`/`).get((request, response) => {
  response.status(200).render(`base`, {
    title: `Pure 'N' Spiration`,
    errorMessage: '',
    successMessage: '',
  });
});
router.route(`/v1/email`).post(messageController.validateEmail, messageController.emailMe);

module.exports = router;
