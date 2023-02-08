
function odd_number_sum(array) {
    const odd_number_array = []
    for(i=0; i<array.length; i++){
        let number = array[i]
        if (number % 2 !== 0) {
            odd_number_array.push(number)
        }
    }
    let total=0
    for(i = 0; i<odd_number_array.length; i++){
        number = odd_number_array[i]
        total = total+number
    }
    return total
}
const numbers = [5,7,8,10,45,30,1];
const myArray = odd_number_sum(numbers)
console.log(myArray)