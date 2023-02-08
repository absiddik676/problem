const numbers = [10, 255, -10, 445, 12, -44, 4422, 5555,];
function positiveNumber(number) {
    const temp = [];
    for(i = 0; i < number.length; i++){
        let element = number[i];
        if(element == -Math.abs(element)){
            break
        }
        else{
            temp.push(element)
        }
    }
    console.log(temp);
}
positiveNumber(numbers)