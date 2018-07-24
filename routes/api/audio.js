const router = require("express").Router();
const audioController = require("../../controllers/audioController");

// Matches with "/api/books"
router.route("/:userid/:id")
  .post(audioController.saveAudio);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(audioController.findAllByProject)
  .delete(audioController.removeFile);

module.exports = router;