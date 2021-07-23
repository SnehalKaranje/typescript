import { Todo, TodoState } from "./Model";

export interface ITodoService {
    add(todo: Todo): Todo;
    add(todo: string): Todo;
    clearCompleted(): void;
    getAll(): Todo[];
    getById(todoId: number): Todo;
    toggle(todoId: number): void;
}

export default class TodoService implements ITodoService{

    private static _lastId : number = 0;

    private static generateTodoId() : number {
        return TodoService._lastId += 1;
    }
    
    private static clone<T>(src : T) : T {
        var clone = JSON.stringify(src);
        return JSON.parse(clone);
    };


    private todos: Todo[] = [];

    constructor(todos: string[]) {
        if(todos) {
            todos.forEach(todo => this.add(todo));
        }
    }

    // Accepts a todo name or todo object
    add(todo : Todo) : Todo
    add(todo : string) : Todo
    add(input) : Todo {
        var todo = {
            id: TodoService.generateTodoId(),
            name: null,
            state: 1
        };

        if(typeof input === 'string') {
            todo.name = input;
        } 
        else if(typeof input.name === 'string') {
            todo.name = input.name;
        } else {
            throw 'Invalid Todo name!';
        }

        this.todos.push(todo);

        return todo;
    };

    clearCompleted() : void { 
        this.todos = this.todos.filter(function(x) { 
            return x.state == 1; 
        });
    }
    
    getAll() : Todo[] {
        return TodoService.clone(this.todos);
    };

    getById(todoId : number) : Todo {
        var todo : Todo = this._find(todoId);
        return TodoService.clone(todo);
    };
    
    toggle(todoId : number) : void {
        var todo = this._find(todoId);
        
        if(!todo) return;
        
        switch(todo.state) {
            case 1:
                todo.state = 2;
                break;
            case 2:
                todo.state = 1;
                break;
        }
    }

    _find(todoId : number) : Todo {
        var filtered = this.todos.filter(function (x) { 
            return x.id == todoId; 
        });
        
        if (filtered.length) {
            return filtered[0];
        }
        
        return null;
    }
}