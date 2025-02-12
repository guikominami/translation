const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const { wordSchema } = require("./word");

const translationSchema = new mongoose.Schema({
  words: [
    {
      type: wordSchema,
      required: true,
    },
  ],
});

const Translation = mongoose.model("Translation", translationSchema);

function validateTranslation(translation) {
  const schema = Joi.object({
    words: Joi.array().required(),
  });

  return schema.validate(translation);
}

exports.translationSchema = translationSchema;
exports.Translation = Translation;
exports.validate = validateTranslation;
