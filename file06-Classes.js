var Employee = (function () {
    function Employee() {
    }
    Employee.prototype.Greet = function () {
        return "Hello, " + this.FirstName;
    };
    return Employee;
})();
var e = new Employee();
e.FirstName = "Thomas";
document.body.innerHTML = e.Greet();
//# sourceMappingURL=file06-Classes.js.map
