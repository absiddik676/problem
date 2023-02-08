function  paperRequirements(book1, book2, book3) {
    const book1Paper = book1*100;
    const book2Paper = book2*200;
    const book3Paper = book3*300;
    const total = book1Paper + book2Paper + book3Paper;
    return total;
}
const paperNeed = paperRequirements(1,1,1);
console.log(paperNeed);