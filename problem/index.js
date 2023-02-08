/*
    The mindGame function takes a number input. Multiply the number by 3 and add 10 
    to the result. Returns the result of dividing the sum by 2 and subtracting 5.
*/ 
function mindGame(number) {
    if(typeof number != 'number'){
        const errorMessage = 'Please Enter a number';
        return errorMessage;
    }
    else{
        const result = (number * 3 +10)/2 -5
        return result
    }
    
}


/*
    The evenOdd function takes a string input. Counts the number of characters in the
    string and returns whether the total number of characters is even or odd
*/

function evenOdd(string) {
    if(typeof string != 'string'){
        const errorMessage = "Please Enter a string data";
        return errorMessage
    }
    else{
         if(string.length % 2 == 0){
            return ("Even")
        }
        else{
           return('Odd')
        }
    }
}


/*
    The isLGSeven function takes a number input and subtracts 7 from the number. 
    if the subtraction result is less than 7 its returns the subtraction result .
    If the result of subtraction is greater than 7, it returns the number multiplying 
    by 2
*/
function isLGSeven(number) {
    if(typeof number != 'number'){
        const errorMessage = 'Please Enter a number';
        return errorMessage;
    }
    else{
    const subtraction = number - 7;
    if(subtraction < 7 ){
        return subtraction;
    }
    else {
        return (number * 2);
    }
   }
}


/*
    The findingBadData function is used to find
     the number of negative data in an array
*/
function  findingBadData(data) {
    if(Array.isArray(data) != true){
        const errorMessage = "Please enter a array";
        return errorMessage;
    }
    else{
        const badData = [];
        for(i = 0; i < data.length; i++){
            let element = data[i]
            if(element == -Math.abs(element)){
                badData.push(element)
            }
        }
        const badDataCount = badData.length;
        return badDataCount;
    }
}


/*
    The gemsToDiamond function calculates 3 friends total games and convert to diamond 
    1st friends gems power 21 , 2nd friends gems power 32 and 3rd friend gems power 43
    
*/

function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
  if (typeof firstFriend != 'number' || typeof secondFriend != 'number' || 
  typeof thirdFriend != 'number'|| arguments.length < 3 ){

    const errorMessage = 'Please Enter Valid Data';
    return errorMessage;

  }
  else{
    const firstFriendDiamond = firstFriend * 21;
    const secondFriendDiamond = secondFriend * 32;
    const thirdFriendDiamond = thirdFriend * 43;
    const totalDiamond = firstFriendDiamond + secondFriendDiamond + thirdFriendDiamond;
    if (totalDiamond >= 1000 * 2) {
        const weWillGet = totalDiamond - 2000;
       return weWillGet;
    }
    else{
        return totalDiamond;
    }
  }
}

