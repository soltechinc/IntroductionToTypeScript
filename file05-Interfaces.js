function GreetPerson(p) {
    var s = "Hello, " + p.FirstName;
    if (p.LastName) {
        s += " " + p.LastName;
    }
    return s;
}
var p = { FirstName: "George", LastName: "Washington" };
document.body.innerHTML = GreetPerson(p);
//# sourceMappingURL=file05-Interfaces.js.map
