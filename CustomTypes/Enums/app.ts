enum TodoState {
    New = 1,
    Active,
    Done,
    Cancelled,
    Deleted
}

interface Todo {
    name: string;
    state: TodoState;
}

function isDone(todo : Todo) : boolean{
    if(TodoState.Done == todo.state) {
        return true;
    }
    return false;
}

var todo : Todo = { name: "Pick up drycleaning" , state : TodoState.New};
var container = document.getElementById('container');
container.innerHTML = `
    <label>Task Name : </label><span>${todo.name}</span>
    <label>Is task completed : </label><span>${isDone(todo)}</span>
`;