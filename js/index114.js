function revert(text){
result = ' '
for(i = text.length-1; i >= 0 ;i--){
    result = result + text.charAt(i )
};
console.log(result)
}
revert('Hello')
revert('hola')
revert('Bonjour')
revert('Salam')