const { Translation, validate } = require("../models/translation");
const { Word } = require("../models/word");
const express = require("express");
const router = express.Router();

router.get("/", async(req, res) => {
  const translations = await Translation.find().sort("_id");
  res.send(translations);
});

router.post("/", async(req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  
  const words = await Word.find({ _id: { $in: req.body.words  } }) 
  if (!words) return res.status(400).send("Invalid words.");
  
  let translation = new Translation({
    words: words
  })
  
  translation = await translation.save();
  res.send(translation);
})

module.exports = router;