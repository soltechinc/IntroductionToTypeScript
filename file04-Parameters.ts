function Welcome(firstName: string, lastName: string) {
    var s: string = "Hello, " + firstName;
    if (lastName) {
        s += " " + lastName;
    }
    return s;
}

document.body.innerHTML = Welcome("Jane");
