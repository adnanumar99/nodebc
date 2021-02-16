let sum = 0;
for (let number=0; number <= 100; number++) { 
    if (number >= 41){
        break;
    }
    if (number % 2 === 0){
        sum = number + sum;
    }  
}
  console.log(" Sum of even numbers :", sum);  