// #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }


// Я почав виконувати це завдання, але як робити далі не зрозумів

class Card {
    cardValues: string
    color: string;
    cardSuit: string;


    constructor(cardValues: string, color: string, cardSuit: string) {
        this.cardValues = cardValues;
        this.color = color;
        this.cardSuit = cardSuit;
    }
}


const suits: string[] = ['spade', 'diamond', 'heart', 'club'];
const values: string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
const cards: Card[] = [];
for (const suit of suits) {
    for (const value of values) {
        const card: any = ({cardSuit: suit, cardValues: value});
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
// console.log(cards);
// - знаходимо піковий туз

console.log(cards.find(card => card.cardSuit === 'spade' && card.cardValues === 'ace'));

// - знаходимо всі шістки
console.log(cards.filter(card => card.cardValues === '6'));

// - знаходимо всі червоні карти
console.log(cards.filter(card => card.color === 'red'));
// знаходимо всі буби
console.log(cards.filter(card => card.cardSuit === 'diamond'));
// знаходимо всі трефи від 9 та більше
console.log(cards.filter(card => card.cardSuit === 'club' && (card.cardValues !== '6' && card.cardValues !== '7' && card.cardValues !== '8')));
