var person = {
	name: 'praneeth',
	age: 24,
};

var personJSON = JSON.stringify(person);  //converts an object to JSON

console.log(personJSON);
console.log(typeof personJSON);

var personObject = JSON.parse(personJSON);  // converts JSON string to an object

console.log(personObject);
console.log(typeof personObject);


/*var personStr = '{"name": "praneeth"}';

console.log(personStr);
var perObject = JSON.parse(personStr);
console.log(perObject);
var perJSON = JSON.stringify(perObject);
console.log(perJSON);*/