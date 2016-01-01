var path= require('path');

var websitehome= "Desktop/Praneeth's/NodeJS/home.html";
var websiteabout= "Desktop/Praneeth's/NodeJS/about.html";

console.log(path.normalize(websitehome));
console.log(path.dirname(websitehome));
console.log(path.basename(websitehome));
console.log(path.extname(websitehome));