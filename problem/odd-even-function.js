// has return  has parameter
function odd_even(number) {
    if(number % 2 == 0){
        return "this is even number"
    }
    else{
        return'this is odd number'
    }
}
var myNumber = odd_even(11)
// console.log(myNumber)

// has parameter no return

function even_odd(num) {
    if (num % 2 == 0) {
        console.log('this number is even')
    }
    else{
        console.log("this number is odd");
    }
}

even_odd(110)