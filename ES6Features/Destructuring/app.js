var array = [123, "Some text", true];
var [id, title, completed] = array;

console.log("ID : ", id);
console.log("title : ", title);
console.log("completed : ", completed);

var toDo = {
    id1 : 1234,
    title1 : "Another text",
    completed : false
}
var {id1, title1, completed} = toDo;
console.log("ID : ", id1);
console.log("title : ", title1);
console.log("completed : ", completed);

var a = 7, b = 9;
[b, a] = [a, b];
console.log("a : ", a);
console.log("b : ", b);