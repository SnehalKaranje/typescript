function totalLength(x, y) {
    var total = x.length + y.length;
    return total;
}
var a = [1, 2, 3, 4];
var b = "Some String";
var c = [4, 5, 6];
var d = "Another String";
console.log("Total length Arrays: ", totalLength(a, c));
console.log("Total length Strings: ", totalLength(b, d));
