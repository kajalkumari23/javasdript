const fs = require("fs");

console.log (fs.readFileSync("a.txt","utf-8"));
console.log(fs.existsSync("a.txt"));
console.log(fs.existsSync("b.txt"));
