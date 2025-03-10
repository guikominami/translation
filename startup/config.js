const config = require("config");

module.exports = function(){
  if (!config.get("translationPrivateKey")) {
    throw new Error("FATAL ERROR: jwtPrivateKey is not defined!");
  }  
}