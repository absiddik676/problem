function milsTooLilo(mils) {
    const kilo = mils * 1.609;
    return kilo;
}

const myMils = 150;
const myKilo = milsTooLilo(myMils);
console.log(myKilo);