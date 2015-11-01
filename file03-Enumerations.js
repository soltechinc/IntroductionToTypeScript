function ShowColorChoice(choice) {
    return "You chose " + choice + ', which is "' + Fruit[choice] + '".';
}
var Fruit;
(function (Fruit) {
    Fruit[Fruit["Apple"] = 0] = "Apple";
    Fruit[Fruit["Orange"] = 1] = "Orange";
    Fruit[Fruit["Grape"] = 2] = "Grape";
})(Fruit || (Fruit = {}));
;
var choice = 0 /* Apple */;
document.body.innerHTML = ShowColorChoice(choice);
//# sourceMappingURL=file03-Enumerations.js.map
