const express = require("express");
const router = express.Router();
const homeController = require("./controllers/homeController");
const bookController = require("./controllers/bookController");

router.get("/", homeController.getHome);
router.get("/book-list", bookController.getBookList);
router.get("/books", bookController.getBook);
router.post("/books", bookController.postBook);
router.get("/deletebooks/:id", bookController.deleteBook);
router.get("/updatebooks/:id", bookController.getUpdateBook);
router.post("/updatebooks/:id", bookController.updateBook);
module.exports = router;
