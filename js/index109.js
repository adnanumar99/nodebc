function validatUser(username, password){
    if((username === 'nacho' && password === 'Nerd1979')|| (username === 'pedro' && password === 'Batman0217') || (username === 'marta' && password === 'Mother2312'))  {
        console.log(`Welcome ${username} nice to see you again \n`)
    } else {
        console.log(`Please input valid credentials`)
    }
}

validatUser('pedro','Batman0217');
validatUser('xyz','blahblah')