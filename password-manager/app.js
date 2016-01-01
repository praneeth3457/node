console.log('Starting password manager');

var storage = require('node-persist');
storage.initSync();

var crypto = require('crypto-js');

var args = require('yargs')
			.command('create','Create a new account', function (yargs){
				yargs.options({
					aname: {
						demand: true,
						alias: 'a',
						decription: 'Account name (eg. facebook , twitter)',
						type: 'string'
					},
					uname: {
						demand: true,
						alias: 'u',
						decription: 'Username of an account',
						type: 'string'
					},
					password: {
						demand: true,
						alias: 'p',
						decription: 'password of an account',
						type: 'string'
					},
					masterPassword: {
						demand: true,
						alias: 'm',
						decription: 'master password',
						type: 'string'
					}
				}).help('help');
			})
			.command('get', 'Get an existing account', function (yargs){
				yargs.options({
					aname: {
						demand: true,
						alias: 'a',
						decription: 'Account name (eg. facebook , twitter)',
						type: 'string'
					},
					masterPassword: {
						demand: true,
						alias: 'm',
						decription: 'master password',
						type: 'string'
					}
				}).help('help');
			})
			.help('help')
			.argv;
var command = args._[0];

if(command === 'create'){
	var createdAccount = createAccount({
		'accountName':args.aname,'username':args.uname,'password':args.password}, 
		args.masterPassword);
	console.log(createdAccount);
}else if(command === 'get'){
	var getAcc = getAccount(args.aname,
		args.masterPassword);

	if(typeof getAcc === 'undefined'){
		console.log('Account not Found!');
	}else{
		console.log('Account found');
		console.log(getAcc);
	}
}

function getAccounts (masterPassword){
	var encryptedAccount = storage.getItemSync('accounts');
	var accounts = [];

	if(typeof encryptedAccount !== 'undefined'){
		var bytes = crypto.AES.decrypt(encryptedAccount, masterPassword);
		var accounts= JSON.parse(bytes.toString(crypto.enc.Utf8));
	}
	return accounts;
}

function saveAccounts (masterPassword){
	var encryptedAccounts= crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);

	storage.setItemSync('accounts', encryptedAccounts.toString());

	return accounts;
}

function createAccount(account, masterPassword){
	 var accounts = getAccounts(masterPassword);

	accounts.push(account);

	saveAccounts(accounts,masterPassword);

	return account;
}

/*var x= createAccount({'accountName': 'yahoo', 'username': 'praneeth3457', 'password':'karthikeya557'});
console.log(x);
*/
function getAccount (accountName,masterPassword){
	var accounts = storage.getItemSync('accounts');
	var matchedAccount;

	for(var i = 0; i < accounts.length; i++){
		if(accounts[i].accountName === accountName){
			matchedAccount = accounts[i];
		}
	}

	return matchedAccount;
}
