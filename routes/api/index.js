const router = require("express").Router();
const audioRoutes = require("./audio");

// Book routes
router.use("/audio", audioRoutes);

module.exports = router;
