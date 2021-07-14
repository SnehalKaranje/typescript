namespace TodoApp.Model {
    export enum TodoState {
        New = 1,
        Active,
        Done,
        Deleted
    }
}

namespace TodoApp.Model {
    export interface Todo {
        id : number;
        name : string;
        state : TodoState;
    }
}

namespace DataAccess {
    import Model = TodoApp.Model;
    import Todo = Model.Todo;
    import TodoState = Model.TodoState;

    interface ITodoService {
        add(todo : Todo) : Todo;
        delete(todoId : number) : boolean;
        getAll() : Todo[];
        getById(todoId : number) : Todo;
    }

    interface IIdGenerator {
        getId() : number;
    }

    class TodoService implements ITodoService, IIdGenerator{
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

    var todoService = new TodoService();
    todoService.add({id : todoService.getId(), name : "task1", state : TodoState.New});
    todoService.add({id : todoService.getId(), name : "task2", state : TodoState.Done});
    todoService.add({id : todoService.getId(), name : "task3", state : TodoState.Deleted});
    todoService.add({id : todoService.getId(), name : "task4", state : TodoState.Active});

    console.log("Todos : ", todoService.getAll());
    console.log("Get todo by ID : ", todoService.getById(2));
    console.log("Get todo by ID : ", todoService.getById(12));
    console.log("Is todo deleted : ", todoService.delete(12));
    console.log("Is todo deleted : ", todoService.delete(2));
    console.log("Todos : ", todoService.getAll());
}