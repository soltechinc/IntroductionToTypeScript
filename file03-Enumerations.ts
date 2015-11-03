function ShowColorChoice(choice: Fruit) {
    return "You chose " + choice + ', which is "' + Fruit[choice] + '".';
}
enum Fruit { Apple, Orange, Grape  = 4};
var choice: Fruit = 4;
document.body.innerHTML = ShowColorChoice(choice);