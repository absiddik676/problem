function even_odd(number) {
    if (number % 2 == 0) {
        return true
    }
    else{
        return false
    }
}
const teacherGivenNumber = 252221;
const myAns = even_odd(teacherGivenNumber);
console.log(myAns)
