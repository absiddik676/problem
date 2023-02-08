var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var lgth = 0;
var longest;
for (var i = 0; i < friends.length; i++) {
    if (friends[i].length> lgth) {
      var lgth = friends[i].length;
      longest = friends[i];
    }
}
console.log(longest);