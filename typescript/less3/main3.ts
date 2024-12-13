// // як використовувати arguments і рест-оператор у тайпскрипті?
// // function foo(...asd: number[]) {
// //     console.log(arguments);
// // }
//
//
// // Якщо я правильно зрозумів, класи — це надмірна конструкція,
// // class User2 {
// //     id: number;
// //     name: string;
// //
// //     constructor(id: number, name: string) {
// //         this.id = id;
// //         this.name = name;
// //     }
// //
// //     greeting() {
// //         //....
// //         console.log('hello');
// //     }
// //}
//
// // let user2: User2 = new User2(1, 'asd');
// // user2.greeting();
// // let user2: User2 = {
// //     id: 1, name: 'asdasd', greeting() {
// //     }
// // };
// //
// // interface IUser2 {
// //     id: number;
// //     name: string;
// //     greeting: () => void;
// //     foo?: () => void
// // }
// //
// // const iuser21: IUser2 = {
// //     id: 123, name: 'asdsad', greeting() {
// //         console.log('ajdgajshgdahsd');
// //     }
// // }
// // const iuser22: IUser2 = {
// //     id: 34, name: 'asdsad', greeting() {
// //     }, foo() {
// //     }
// // }
//
//
// // і зазвичай зручніше використовувати інтерфейси.
// // А типи? Коли і як їх застосовувати?
//
//
// type MyString = string;
//
// // @ts-ignore
// let name: MyString = 'asdsa';
//
// type Id = string | number;
//
// // let id: Id = 'asdasd';
// // let id: Id = 1232;
//
// type UserType = {
//     id: Id,
//     name: MyString
// }
//
// type SuperPuperUser = UserType & { login: string };
// let spu: SuperPuperUser = {id: 123, name: 'asda', login: 'asdas'}
//
// // type X = keyof UserType;
// type X = 'login' | 'id' | 'name';
//
// const xxx: X = 'name';
//
// //Допоможіть будь ласка с цим завданням.
// // Це ДЗ 2 де ми ще не використовуємо type та interfaces.
// // Я зовсім поки не зрозумів як його виконувати. Посилання на гітхаб прикріпив
//
//
//
