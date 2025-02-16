const express = require("express");
const languages = require("../routes/languages");
const words = require("../routes/words");
const translations = require("../routes/translations");
const cors = require("../middleware/cors");

module.exports = function (app) {
  app.use(cors);
  app.use(express.json());
  app.use("/api/languages", languages);
  app.use("/api/words", words);
  app.use("/api/translations", translations);
};
