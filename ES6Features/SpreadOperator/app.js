function calculate(action, ...values) {
    var result = 0;
    for(var value of values) {
        switch(action) {
            case 'add':
                result += value;
                break;
            case 'subtract':
                result -= value;
                break;
            default:
                break;
        }
    }
    return result;
}

var array = [1, 2, 3, 4, 5];
console.log("Addition of numbers : ", calculate('add', 1, 2, 3, 4, 5));
console.log("Subtraction of numbers : ", calculate('subtract', 1, 2, 3, 4, 5));

var source = [1 , 2, 3];
var target = [4, 5, ...source, 6, 7];
console.log("Source : ", source);
console.log("Target : ", target);

var target = [4, 5, 6];
source.push(...target);
console.log("Source : ", source);
console.log("Target : ", target);