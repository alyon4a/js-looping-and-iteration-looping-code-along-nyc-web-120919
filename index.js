function writeCards(names, forWhat) {
    let cards = [];
    for(let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${forWhat} gift!`);
    }
    return cards;
}

function countDown(number) {
    while(number >= 0) {
        console.log(number);
        number--;
    }

}