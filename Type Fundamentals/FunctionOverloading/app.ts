function totalLength(x : string, y : string) : number
function totalLength(x : any[], y : any[]) : number 
function totalLength(x : (string | any[]), y : (string | any[])) : number {
    var total : number = x.length + y.length;
    return total;
}

var a = [1, 2, 3, 4];
var b = "Some String";
var c = [4, 5, 6];
var d = "Another String";

console.log("Total length Arrays: ", totalLength(a, c));
console.log("Total length Strings: ", totalLength(b, d));