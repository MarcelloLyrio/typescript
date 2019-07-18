class Student{
    fullname: string;

    constructor(public firstname: string, public middleInitial: string, public lastname: string ){
        this.fullname = firstname + " " + middleInitial + " " + lastname; 
    }
}

interface Person{
    firstname: string;
    middleInitial: string;
    lastname: string;
}

function greeter(person: Person){
    return "hello, " + person.firstname + " " + person.middleInitial + " " + person.lastname;
}

let user = new Student("Jane", "M", "Silva");

document.body.textContent = greeter(user);