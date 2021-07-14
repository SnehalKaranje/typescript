import Model = require('./model');
import Todo = Model.Todo;

interface ITodoService {
    add(todo : Todo) : Todo;
    delete(todoId : number) : boolean;
    getAll() : Todo[];
    getById(todoId : number) : Todo;
}

interface IIdGenerator {
    getId() : number;
}

export class TodoService implements ITodoService, IIdGenerator{
    private todos : Todo[];
    constructor() {
        this.todos = [];
    }

    add(todo : Todo) : Todo {
        this.todos.push(todo);
        return todo;
    }

    getAll() : Todo[] {
        return this.todos;
    }

    getById(todoId : number) : Todo {
        var filtered : Todo[] = this.todos.filter(todo => todo.id == todoId);
        return (filtered.length > 0) ? filtered[0] : null;
    }

    delete(todoId : number) : boolean {
        var todo = this.getById(todoId);
        if(todo == null) {
            return false;
        }
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    getId() : number {
        return this.todos.length + 1;
    }
}