interface IPerson {
    FirstName: string;
    LastName?: string;
}
function GreetPerson(p: IPerson) {
    var s: string = "Hello, " + p.FirstName;
    if (p.LastName) {
        s += " " + p.LastName;
    }
    return s;
}
var p: IStudent = { FirstName: "George", Last_Name: "Washington", Major: "Computer Science" };
document.body.innerHTML = GreetPerson(p);

interface IStudent extends IPerson {
    Major: string;
}
