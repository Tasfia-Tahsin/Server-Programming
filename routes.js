const express = require("express");
const router = express.Router();
const { getMain } = require("./controllers/mainController");
//const { createCV } = require("./controllers/CvController");

const fs = require("fs");
const { getSqueak } = require("./controllers/squeakController");


router.get("/main", getMain);
router.post("/main", getMain);
router.get("/Squeaks", getSqueak);
router.post("/Squeaks", getSqueak);


module.exports = router;
