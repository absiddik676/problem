function vara(day) {
    if (day == 1 || day<= 10) {
        const totalPrice = day * 500;
        return totalPrice
    }
    else if(day >=10 || day<=20 ){
        const totalPrice = day * 300;
        return totalPrice
    }
}
console.log(vara(11));