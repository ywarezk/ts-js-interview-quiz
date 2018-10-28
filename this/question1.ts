
class Person {
    constructor(public age = 33) {
        this.birthday3 = this.birthday3.bind(this);
    }

    birthday1() {
        this.age++;
    }

    birthday2 = () => {
        this.age++;
    }

    birthday3() {
        this.age++;
    }
}

const yariv = new Person();
const obj = {
    birthday1: yariv.birthday1,
    birthday2: yariv.birthday2,
    birthday3: yariv.birthday3,
}

obj.birthday1();
console.log(yariv.age);
obj.birthday2();
console.log(yariv.age);
obj.birthday3();
console.log(yariv.age);