var totalLength = function (x : any[], y : string) : number {
    var total : number = x.length + y.length;
    return total;
}

var a = [1, 2, 3, 4];
var b = "Some String";

console.log("Total length : ", totalLength(a, b));