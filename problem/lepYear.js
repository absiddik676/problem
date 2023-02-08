function lepYear(years) {
    temp = []
    for(i=0; i<years.length; i++){
       var year = years[i]
       if (year % 4 === 0 ) {
        temp.push(year)
     }

    }
   console.log(temp)
}
var allYears= [2000,2001, 2004, 2008, 2016, 2022, 20223, 2012, 2013];
lepYear(allYears)