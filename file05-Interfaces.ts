interface IPerson {
    FirstName: string;
    LastName: string;
}
function GreetPerson(p: IPerson) {
    var s: string = "Hello, " + p.FirstName;
    if (p.LastName) {
        s += " " + p.LastName;
    }
    return s;
}
var p = { FirstName: "George", LastName: "Washington" };
document.body.innerHTML = GreetPerson(p);

interface IStudent extends IPerson {
    Major: string;
}
