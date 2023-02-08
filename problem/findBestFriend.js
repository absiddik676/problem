const myFriends = ['fahim','emon mahmud tayeb','muzhid hassan siyam','emon','rakib','parvez','nissan'];
function findFriend(allFriend) {
    let friend = allFriend[0]
    for(i=0; i<allFriend.length; i++){
        let element  = allFriend[i]
       if(friend.length < element.length){
        friend = element
       }
    }
    return friend
}
const myFriend = findFriend(myFriends);
console.log(myFriend);