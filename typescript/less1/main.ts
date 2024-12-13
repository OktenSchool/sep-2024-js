// class MorningClass {
//     morning: number
//
//     constructor(morning: number) {
//         this.morning = morning;
//     }
// }
//
// class AfternoonClass {
//     afternoon: number;
//
//     constructor(afternoon: number) {
//         this.afternoon = afternoon;
//     }
// }
//
// class EveningClass {
//     evening: number;
//
//     constructor(evening: number) {
//         this.evening = evening;
//     }
// }
//
// class DayClas {
//     day: Temps[];
// }
//
// let weekTemperature: DayClas[] = [
//     {day: [new MorningClass(10), new AfternoonClass(10), new EveningClass(10)]},
//     {day: [new MorningClass(10), new AfternoonClass(10), new EveningClass(10)]},
//     {day: [new MorningClass(10), new AfternoonClass(10), new EveningClass(10)]},
//     {day: [new MorningClass(10), new AfternoonClass(10), new EveningClass(10)]},
//     {day: [new MorningClass(10), new AfternoonClass(10), new EveningClass(10)]},
// ];

//
// class Temperature {
//     value: number;
//     type: "morning" | "afternoon" | "evening";
//
//     constructor(value: number, type: "morning" | "afternoon" | "evening") {
//         this.value = value;
//         this.type = type;
//     }
// }
//
//
// class DayClas {
//     day: Temperature[];
// }
//
// let weekTemperature: DayClas[] = [
//     {day: [new Temperature(10, "morning"), new Temperature(10, "afternoon"), new Temperature(10, "evening")]},
// ];


// interface Temperature {
//     value: number;
//     type: "morning" | "afternoon" | "evening";
// }
//
// interface DayClas {
//     day: Temperature[];
// }
//
// const temp1: Temperature = {value: 10, type: "morning"};
// const temp2: Temperature = {value: 10, type: "afternoon"};
// const temp3: Temperature = {value: 10, type: "evening"};
//
// let weekTemperature: DayClas[] = [
//     {day: [temp1, temp2, temp3]},
// ];


// "1) коли ми типізуємо щось в пріоритеті стоїть саме типізація коду чи збереження структури?
// це як в питанні масива з об'єктами які є масивами з об'єктами.
// тобто нам важливо типізувати значення чи важливо зберегти структуру? який з варіантів ми будемо більше використовувати в житті?
//
// 2) після компіляціїї TS в JS чи варто робити зміни в отриманому JS редагуючи умовні var в let.
// наскільки це необхідно і як від цього здихатись?
// бо ж виходить що написаний JS код вийде більш чистим і захищенішим ніж код TS."


// У мене є стрінга, яка містить плюс-мінус по центру знак ""="",
// в кожній частині (до та після знаку ""="") є декілька слів/чисел (без різниці) і між ними є зайві пробіли.
// До цієї стрінги я застосовую map для кожного елемента trim(),
// для прибирання зайвих пробілів по краям стрінги,
// після чого я застосовую join(""="") для склеювання цих елементів назад в стрінгу.

// І ось тут починається саме цікаве,
// якщо я цю стрінгу виведу в DOM,
// створивши для неї як обгортку div, то зайві пробіли візуально між словами не буде видно (asd dsa=asd dsa), а от в консолі все добре помітно (Asd     dsa=asd     dsa):

// let str = "     Asd     dsa     =     asd     dsa            ";
// str = str.split("=")
//     .map(value => {
//         const trimValue = value.trim();
//         console.log(trimValue);
//         return trimValue;
//     })
//     .join("=");
// console.log(str);
//
// // а от якщо я додам вже replace, то все буде і в DOM і в консолі норм:
//
// str = str.split("=")
//     .map(value => value.replaceAll(" ", ""))
//     .join("=");
// // Питання, чому в DOM таке дивне відображення? Розуміння цього допоможе мені в майбутньому при написанні кодів. Дякую."

// let arr = []
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
// }
//
//
// for (let i = 0; i < arr.length; i++) {
//     const arrElement = arr[i];
// }


class User {


    constructor(private _id, private _name) {
        this._id = _id;
        this._name = _name;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        if (this.idChecker(value)) {
            this._id = value

        } else {
            console.log('sajjgdhag');
        }
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    private idChecker(value: number): boolean {
        return value > 0;
    }
}

const user = new User(10, 'asdsa');

console.log(user.id);
user.id = 1000;



