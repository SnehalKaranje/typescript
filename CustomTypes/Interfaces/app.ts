interface Todo {
    name: string;
    completed?: boolean;
}


var todo = { name: "Pick up drycleaning" };
var container = document.getElementById('container');
container.innerHTML = `
    <label>Todo : </label><span>${todo.name}</span>
`;