enum TodoState {
    New = 1,
    Active,
    Done,
    Deleted
}

class Todo {
    name : string;
    state : TodoState;
    
    constructor(todoName : string) {
        this.name = todoName;
        this.state = TodoState.New;
    }

    setName(newName : string) {
        this.name = newName;
    }

    getName() : string {
        return this.name;
    }

    setState(newState : TodoState) {
        if(TodoState.Done == newState &&
            !(this.state == TodoState.Active || this.state == TodoState.Deleted)) {
            throw "Todo must be Active or Deleted in order to be marked Completed";
        }
        this.state = newState;
    }

    getState() : TodoState {
        return this.state;
    }
}

class TodoService {
    todos : Todo[];
    static totalCount : number = 0;

    constructor() {
        this.todos = [];
    }

    addTodo(todo : Todo) : number {
        this.todos.push(todo);
        return TodoService.getNextId();
    }

    getAll() : Todo[] {
        return this.todos;
    }

    static getNextId() : number{
        TodoService.totalCount += 1;
        return TodoService.totalCount;
    }
}

var todo1 = new Todo("Exercise");
todo1.setState(TodoState.Active);

var todo2 = new Todo("Dinner");

var todoService = new TodoService();
todoService.addTodo(todo1);
todoService.addTodo(todo2);

console.log("All Todos : ", todoService.getAll());
console.log("Total number of todos : ", TodoService.totalCount);

todo2.setState(TodoState.Done);
console.log("All Todos : ", todoService.getAll());