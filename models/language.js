const Joi = require("joi");
const mongoose = require("mongoose");

const languageSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
    minlenght: 2,
    maxlenght: 50,
  },
  acronym: {
    type: String,
    required: true,
  },
  family: {
    type: String,
    minlenght: 2,
    maxlenght: 50,
  },
  root: {
    type: String,
    minlenght: 2,
    maxlenght: 50,
  },
  country: {
    type: String,
    minlenght: 3,
    maxlenght: 50,    
  },
  region: {
    type: String,
    minlenght: 3,
    maxlenght: 50,    
  }
});

const Language = mongoose.model("Language", languageSchema);

function validateLanguage(language){
  const schema = Joi.object ({
    name: Joi.string().min(2).max(50).required(),
    acronym: Joi.string().min(2).required(),
    family: Joi.string().min(2),
    root: Joi.string().min(2),
    country: Joi.string().min(2),
    region: Joi.string().min(2),
  })
  
  return schema.validate(language);
}

exports.languageSchema = languageSchema;
exports.Language = Language;
exports.validate = validateLanguage;