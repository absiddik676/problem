function myShopping(cal,dal,tel) {
    const total = cal + dal + tel;
    return total;
}
const calPrice = 120;
const dalPrice = 200;
const telPrice = 500;
const totalPrice = myShopping(calPrice, dalPrice , telPrice);
console.log(totalPrice)
