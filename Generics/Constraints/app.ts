var array1 : number [] = [1, 2, 3];
var array2 : number [] = [5, 7, 9];
var string1 : string = "Some String";
var string2 : string = "Another String";

function totalLength(x : {length : number}, y : {length : number}) : number {
    return x.length + y.length;
}

console.log(totalLength(string1, array1));

/**
 * Generics
 */

function totalLength1<T extends {length : number}>(x : T, y : T) : number {
    return x.length + y.length;
}
/**
 * Not allowed. Type of both parameter has to be same
 */
//console.log(totalLength1(string1, array1)); 
console.log(totalLength1(string1, string2)); 



interface IHaveALength {
    length : number
}

function totalLength2<T extends IHaveALength>(x : T, y : T) : number {
    return x.length + y.length;
}

class CustomArray<T> extends Array<T> {}
console.log(totalLength1(array1, array2)); 