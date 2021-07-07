function totalLength (x : (string | any[]), y : (string | any [])) {
    console.log("Input x : ", x);
    console.log("Input y : ", y);

    var total : number = x.length + y.length;
    console.log("Total length : ", total);

    var temp = x.slice(1);
    console.log("Slice : ", temp);

    if(x instanceof Array) {
        x.push("abc");
        console.log("x  : ", x);
    }

    if(typeof x === 'string') {
        x = x.substr(2);
        console.log("x  : ", x);
    }
}

var a = [1, 2, 3, 4];
var b = "Some String";

totalLength(a, b);
totalLength(b, a);


