

function withName(name) {
    return function sayHello() {
        return `hello world ${name}`;
    }
}

const nerdeez = withName('nerdeez');
const bugeez = withName('bugeez');

console.log(nerdeez());
console.log(bugeez());