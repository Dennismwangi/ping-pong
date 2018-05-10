var add = function (number1, number2) {
    return number1 + number2;
};
var number1 = parseInt(prompt("Enter a Number: "));
var number2 = parseInt(prompt("Enter another Number:"));

alert(add(number1, number2));

function fizzBuzz(number) {
    var number[];
    for (var i = 0; i <= number; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            number.push("FizzBuzz");
        }
        else if (i % 5 === 0) {
            number.push("Buzz");
        }
        else if (i % 3 === 0) {
            number.push("Fizz");

        }
        else {
            number.push(i);
        }
    }

}

