
const myNumber = 10;
myNumber.__proto__ // 1. this is equal to what?
myNumber.__proto__.__proto__ // 2. this is equal to what?

function Person1(name) {
    this.name = name;
}

Person1.__proto__; // 3. this is equal to what?
Person1.prototype.__proto__; // 4. this is equal to what?

let bugeez = new Person1('bugeez');

bugeez.__proto__ // 5. this is equal to what?
bugeez.__proto__.__proto__ // 6. this is equal to what?

const myFirstPrototype = {
    hello: 'world'
}

const child = Object.create(myFirstPrototype);
child.__proto__ // 7. this is equal to what?

function Person2(name) {
    this.name = name;
    this.sayHello1 = () => {
        console.log(this.name);
    }
}

Person2.prototype.sayHello2 = function() {
    console.log(this.name);
}

bugeez = new Person2('bugeez');
let nerdeez = new Person2('nerdeez');

bugeez.sayHello1 === nerdeez.sayHello1; // 8. what will this return?
bugeez.sayHello2 === nerdeez.sayHello2; // 9. what will this return?

for(let key in bugeez) {
    console.log(key) // 10. what will this print?
}

bugeez.hasOwnProperty('name'); // 11. what will this be equal?
bugeez.hasOwnProperty('sayHello1'); // 12. what will this be equal?
bugeez.hasOwnProperty('sayHello2'); // 13. what will this be equal?