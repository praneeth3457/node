var fs=require('fs');

fs.writeFileSync("corn.text","Corn is good, corn makes life beautiful!");
console.log(fs.readFileSync("corn.text").toString());