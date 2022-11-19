const bodyParser = require("body-parser");
const express = require("express");
const router = require("./routes");
const app = express();
const port = 3000;





app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(router);
app.listen(port, () => {
  console.log(`App is running at https://localhost:${port}`);
});
