function factorial(number) {
    let sum = 1
    for(i = number ; i>=1; i--){
       sum = sum * i
    }
    return sum;
}
console.log(factorial(6))

for(i=0;i<=10;i++){
    console.log(i)
}