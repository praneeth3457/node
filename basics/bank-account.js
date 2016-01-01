var accounts =[];


//create account
function createAccount(account){
	accounts.push(account);
	return account;
}

var praneethAccount = createAccount({username: 'praneeth557', balance: 2000});
var pranoyAccount = createAccount({username: 'pranoy534', balance: 3000});
var nikethAccount = createAccount({username: 'niketh503', balance: 1500});
var anishAccount = createAccount({username: 'anish559', balance: 2500});

function getAccount(username){
	var i;
	var matchedAccount;
	for(i=0; i<accounts.length; i++){
		if(accounts[i].username === username){
			matchedAccount = accounts[i];
			return matchedAccount;
		}
	}
	
	/*accounts.forEach(function (account){
		var matchAccount = [];
		if(account.username === username){
			matchAccount = account;	
		}
		return matchAccount;
	});*/
	
}

console.log(getAccount('anish559'));