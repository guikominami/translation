const express = require("express");
const languages = require("../routes/languages");
const words = require("../routes/words");
const translations = require("../routes/translations");

module.exports = function(app){
  app.use(express.json());
  app.use("/api/languages", languages);
  app.use("/api/words", words);
  app.use("/api/translations", translations);
}