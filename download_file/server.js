const express = require("express");
const app = express();
global.__basedir = __dirname;
const initRoutes = require("./src/router");
app.use(express.urlencoded({ extended: true }));
initRoutes(app);
let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});