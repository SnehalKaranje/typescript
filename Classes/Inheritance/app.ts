enum TodoState {
    New = 1,
    Active,
    Done,
    Deleted
}

class Todo {
    name : string;
    state : TodoState;
    
    constructor(todoName : string, todoState : TodoState) {
        this.name = todoName;
        this.state = todoState;
    }
}

class TodoStateChanger {
    newState : TodoState;
    constructor(state : TodoState) {
        this.newState = state;
    }
    canChangeState(todo : Todo) : boolean {
        return !!todo;
    }
    changeState(todo : Todo) : Todo {
        if(this.canChangeState(todo)) {
            todo.state = this.newState;
        }
        return todo;
    }
}

class DoneTodoStateChanger extends TodoStateChanger {
    constructor() {
        super(TodoState.Done);
    }
    canChangeState(todo : Todo) {
        return (super.canChangeState(todo) && 
            (TodoState.Active == todo.state || TodoState.Deleted == todo.state));
    }
}

var todo1 = new Todo("Exercise", TodoState.Active);
var todo2 = new Todo("Dinner", TodoState.New);

console.log("Initial values : ");
console.log(todo1);
console.log(todo2);

var doneStateChanger = new DoneTodoStateChanger();
todo1 = doneStateChanger.changeState(todo1);
todo2 = doneStateChanger.changeState(todo2);

console.log("Updated values : ");
console.log(todo1);
console.log(todo2);