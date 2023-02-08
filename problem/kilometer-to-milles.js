function kiloToMils(kilo) {
    const kilometer = kilo * 0.621371;
    return kilometer;
}
const myKilometer  = 23;
const myMils = kiloToMils(myKilometer);
console.log(myMils);