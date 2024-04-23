const fs =require('fs');

const readme=fs.readFileSync('read.txt','utf-8');

console.log(readme)