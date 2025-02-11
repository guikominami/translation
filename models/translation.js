const Joi = require("joi");
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require("mongoose");
const { wordSchema } = require("./word");

const translationSchema = new mongoose.Schema({
  words: [
    {
      type: new mongoose.Schema({
        word: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 100,
        }
      }),
    }
  ]
});

const Translation = mongoose.model("Translation", translationSchema);

function validateTranslation(translation){
  const schema = Joi.object({
    words: Joi.array().required()
  })
  
  return schema.validate(translation);
}

exports.translationSchema = translationSchema;
exports.Translation = Translation;
exports.validate = validateTranslation;