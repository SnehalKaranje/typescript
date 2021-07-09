function clone<T>(value : T) : T {
    let serialized = JSON.stringify(value);
    return JSON.parse(serialized);
}

var num : number = 123;
var myString : string = "Some String";
var myObj = {
    name : myString,
    id : num
}

console.log(clone(num));
console.log(clone(myString));
console.log(clone(myObj));