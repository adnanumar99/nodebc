let numbers = [ ];

for(let i=1000;i>=1;i--){
    numbers.push(i);
};
//even
const even = numbers.filter(function(num) {
    return (num % 2 === 0);
});
for(let i=0;i<=20;i++){
    console.log(even[i])
}
console.log('\n')
//odd
const odd = numbers.filter(function(num) {
    return (num % 2 !== 0);
});

for(let i=odd.length-1;i>=odd.length-10;i--){
    console.log(odd[i])
}