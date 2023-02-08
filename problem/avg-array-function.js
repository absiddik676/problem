function make_aveg(arry) {
    var total = 0
    for(i=0; i<arry.length; i++){
      total  +=arry[i] 
    }
    var avarage  = total / arry.length
    return avarage
}
var num= [10,20,50,20,41]
console.log( make_aveg(num));
