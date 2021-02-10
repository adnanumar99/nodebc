var message = '3.14 it\'s\ a great number but 42 it\'s\ the answer to life.'
const pi = parseFloat(message.substr(0,4))
const answerToLife = parseFloat(message.substr(29,32))
var result = pi + answerToLife

console.log(pi, typeof pi, '\n' ,answerToLife, typeof answerToLife, '\n' ,result, typeof result, '\n' ,result.toString(), typeof result.toString())