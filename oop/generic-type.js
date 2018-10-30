var Student = /** @class */ (function () {
    function Student(grade) {
        var _this = this;
        this.grade = grade;
        this.getGrade = function () {
            return _this.grade;
        };
    }
    return Student;
}());
var studentA = new Student(100);
var studentB = new Student('A+');
