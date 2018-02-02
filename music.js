const blueprints = require("./index.js")

const sheila = new blueprints.Modern([
  "Brian", "Duta", "Erros"
], 500, 1000, 100, "Pop", "JIExpo Kemayoran", [
  "piala citra", "piala asia"
], "sheilagank")

console.log(sheila.showAwards());
