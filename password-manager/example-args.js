var argv = require('yargs')
			/*.command('hello','greets the user', function (yargs){
				yargs.options({
					fname:{
						demand:true,
						alias: 'f',
						description:'Your first name goes here'
					},
					lname:{
						demand:true,
						alias: 'l',
						description:'Your last name goes here'
					}
				}).help('help');
			})
			.help('help')*/
			.argv;
var command = argv._[0];

if(command === 'hello' && typeof argv.fname !== 'undefined' && typeof argv.lname !== 'undefined'){
	console.log(command + ' '+argv.lname + ', ' + argv.fname);
}else if(command === 'hello' && typeof argv.fname !== 'undefined' && typeof argv.lname === 'undefined'){
	console.log(command + ' '+argv.fname);
}else if(command === 'hello'){
	 console.log(command + ' world!')
}

console.log(argv);