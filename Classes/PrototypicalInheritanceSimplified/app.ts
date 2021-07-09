/*
function TodoService() {
    this.todos = [];
}

TodoService.prototype.getAll = function() {
    return this.todos;
}
*/

enum TodoState {
    New = 1,
    Active,
    Done,
    Deleted
}

interface Todo {
    name : string;
    state : TodoState;
}

class TodoService {
    /*
    todos : Todo[];

    constructor() {
        this.todos = [];
    }
    */

    constructor(private todos : Todo[]) {

    }

    getAll() {
        return this.todos;
    }
}

var todos = [{
    name : "Typescript essentials course", 
    state : TodoState.Active
}];
var todoService = new TodoService(todos);
console.log(todoService.getAll());
