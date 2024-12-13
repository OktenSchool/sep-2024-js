// "В JavaScript ми писали:
//
// let x = a || []; (наприклад)
//
// що означало, присвоїти значенню х або ж а, якщо воно існує, або ж [], якщо а не існує.
//
//     В Typescript я зараз бачу:
//
//     interface IStyle {
//         [key:string] : string  |  {value: number, currency: string}
//     }
//
// що також означає або ж зліва знаку |, або ж справа...
//
// Поки що мені не вистачає якоїсь інформації, щоб зрозуміти принципову різницю. Можете пояснити? Дякую."


// let x = a || [];

let a: string = 'okten';
let x: string | number = a || 100500;


interface IStyle {
    [key: string]: string | { value: number, currency: string }
}

let z: IStyle = {
    // xxx: {value: 123, currency: 'asdsad'}
    xxx: 'asdas'
}

// function wrapPrompt(value: number) {
//     prompt(value);
//
// }
//
// //
// // wrapPrompt('12321');
//
// let num: number = +prompt("num");
//
// const PI: number = 3.14;


// "який з записів стрілочної функції вважається правильнішим?


// type WritterArrParams = { name: string, age: number, id: number }[];
// let writterArr: (users: WritterArrParams) => void = (users: WritterArrParams): void => {
//
//
// }

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// Тобто якщо є масив з різними даними, то такий запис буде вірний, щоб уникнути any?
// let array: (string | number | boolean)[] = []
let array: string[] | number[] | boolean[] = []
array = [true, true, true, true];
array = ['true', 'true', 'true'];
// array = ['true', 123, true];
// array = ['true', 123, true,{}];
