function ShowColorChoice(choice: Fruit) {
    return "You chose " + choice + ', which is "' + Fruit[choice] + '".';
}
enum Fruit { Apple, Orange, Grape };
var choice: Fruit = Fruit.Apple;
document.body.innerHTML = ShowColorChoice(choice);