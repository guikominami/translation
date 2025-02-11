const { Language, validate } = require("../models/language");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const languages = await Language.find().sort("name");
  res.send(languages);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  let language = new Language({
    name: req.body.name,
    acronym: req.body.acronym,
    family: req.body.family,
    root: req.body.root,
    country: req.body.country,
    region: req.body.region,
  });
  language = await language.save();

  res.send(language);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  const language = await Language.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    acronym: req.body.acronym,
    family: req.body.family,
    root: req.body.root,
    country: req.body.country,
    region: req.body.region,
  });

  if (!language)
    return res
      .status(404)
      .send("The language with the given Id was not found.");

  res.send(language);
});

router.delete("/:id", async(req, res) => {
  const language = await Language.findByIdAndDelete(req.params.id);
  
  if (!language)
    return res
      .status(404)
      .send("The language with the given Id was not found.");
      
  res.send(language);      
})

module.exports = router;
