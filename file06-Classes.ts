class Employee implements IPerson {
    FirstName: string;
    LastName: string;
    Department: string;
    Greet(): string {
        return "Hello, " + this.FirstName;
    }
} 
var e = new Employee();
e.FirstName = "Thomas";
document.body.innerHTML = e.Greet();
