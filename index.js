// Code your solutions in this file

function writeCards(names,eventName) {
    let cards = [];
    for (let i=0; i<names.length; i+=1) {
        cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);

    }
    return cards;
}

function countDown(num) {
    while (num > 0) {
        console.log(num);
        num -=1
    }
    console.log(num);

}