function createAdder(baseNumber){
	return function(numberToAdd){
		var x = baseNumber + numberToAdd;
		console.log(x);
	}
};

var addTen = createAdder(10);
addTen(20);