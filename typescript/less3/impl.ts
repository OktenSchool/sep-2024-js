interface IPrinter {
    print: <T>(t: T) => void

}

class A implements IPrinter {
    a: string = 'https://github.com/Andrii-77/TYPESCRIPT-HOMEWORK/tree/master/hw_3/hw_3_1'

    print<T>(t: T): void {
        console.log(this.a);
        console.log(t);
    }


}

class B implements IPrinter {
    b: number = 100500;

    print(t: any): void {
        console.log(this.b);
        console.log(t);
    }


}

class C implements IPrinter {
    b: number = 100500;

    print(t: any): void {
        console.log(this.b);
        console.log(t);
    }


}


const a = new A();
a.print<string>('asdasd');
let abs: IPrinter[] = [a, new B(), new C()];

const wrapA = a as A; // hard cast
wrapA.print<number>(123);


function asd(printer:IPrinter) {

}
