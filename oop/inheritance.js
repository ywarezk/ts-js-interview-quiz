var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        return this.name + " hello";
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, grade) {
        if (grade === void 0) { grade = 100; }
        var _this = _super.call(this, name) || this;
        _this.grade = grade;
        console.log('stam');
        return _this;
    }
    return Student;
}(Person));
// 4. how does the prototype chain of this object looks like
var student = new Student('yariv', 50);
console.log(student.__proto__ === Student.prototype);
console.log(student.__proto__.__proto__ === Person.prototype);
console.log(student.__proto__.__proto__.__proto__ === Object.prototype);
