var number = 0;
var sum = 0
while(number <1000){
  if(number % 2 == 1)
  //console.log('Odd number are :', number)
    sum = sum + number;
    number++
    
    //console.log('Partial sum of odd number :', sum)
}
console.log('Total sum of odd number :', sum)