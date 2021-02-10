var userAndPassword = 'pepito2017,12345';
userName = userAndPassword.substr(0, userAndPassword.length-6);
password = userAndPassword.substr(11, userAndPassword.length-1)

console.log(`The user ${userName} has ${password} as password`)