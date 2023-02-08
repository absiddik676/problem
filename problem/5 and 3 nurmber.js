var temp =[]
for(i=0; i<=50; i++){
    temp.push(i)
}
for(i=0; i<temp.length; i++){
    var element=temp[i]
    if(element%3==0){
        console.log(element)
    }
}
for(i=0; i<temp.length; i++){
    var element=temp[i]
    if(element%5==0){
        console.log(element)
    }
}