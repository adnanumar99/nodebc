function getLongerText(text1, text2){
    if (text1.length >= text2.length){
        console.log('Text1 is bigger','\n')
        return text1
    }
    else {
        console.log('Text2 is bigger','\n')
        return text2
    }
    }
    getLongerText('Hello','abc')
    getLongerText('hola', 'bonjour')
    getLongerText('Bonjour', 'hola')
    getLongerText('Salam', 'Coffee break')