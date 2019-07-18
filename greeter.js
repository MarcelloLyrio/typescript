var Student = /** @class */ (function () {
    function Student(firstname, middleInitial, lastname) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleInitial + " " + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "hello, " + person.firstname + " " + person.middleInitial + " " + person.lastname;
}
var user = new Student("Jane", "M", "Silva");
document.body.textContent = greeter(user);
