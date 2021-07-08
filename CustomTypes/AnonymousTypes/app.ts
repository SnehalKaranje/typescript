function totalLength(x : {length : number}, y : {length : number}) {
    return x.length + y.length;
}

var array : number[] = [1, 2, 4];
var myString : string = "Some String";
var age = 25;

console.log("Total Length : ", totalLength(array, myString));
/**
 * Following gives compile time error as age is of type number 
 * and 
 * 'number' does not have property - 'length'
 */
//console.log("Total Length : ", totalLength(array, age));