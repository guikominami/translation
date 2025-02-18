const validateObjectId = require("../middleware/validateObjectId");
const { Word, validate } = require("../models/word");
const { Language } = require("../models/language");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
  const words = await Word.find().sort("word")
  res.send(words)
})

router.post("/", async(req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  const language = await Language.findById(req.body.languageId);
  if (!language) return res.status(404).send("Invalid language");
    
  let word = new Word({
    word: req.body.word,
    language: {
      _id: language._id,
      name: language.name,
      acronym: language.acronym,
    }
  })
  
  word = await word.save();
  res.send(word);
})

module.exports = router;