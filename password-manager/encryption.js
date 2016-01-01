var crypto = require('crypto-js');

var secretMessage = 'Hello';
var secretKey = '557vkcd';

var encryptMessage = crypto.AES.encrypt(secretMessage, secretKey);
console.log('encrypted message : ' + encryptMessage);

var bytes = crypto.AES.decrypt(encryptMessage, secretKey);
var decryptMessage = bytes.toString(crypto.enc.Utf8);
console.log('decrypted Message : ' + decryptMessage); 