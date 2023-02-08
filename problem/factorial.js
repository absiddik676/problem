function factorial(number) {
    let fact = 1;
    for(i=1; i<=number; i++){
        fact=fact*i;
    }
    return fact
}

const nuumber = 6;
console.log(factorial(nuumber))