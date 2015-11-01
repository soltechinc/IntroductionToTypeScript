function Welcome(firstName, lastName) {
    var s = "Hello, " + firstName;
    if (lastName) {
        s += " " + lastName;
    }
    return s;
}

document.body.innerHTML = Welcome("Jane");
//# sourceMappingURL=file04-Parameters.js.map
