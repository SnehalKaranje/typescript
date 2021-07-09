enum TodoState {
    New = 1,
    Active,
    Done,
    Deleted
}

interface Todo {
    id : number;
    name : string;
    state : TodoState;
}

interface ITodoService {
    add(todo : Todo) : Todo;
    delete(todoId : number) : boolean;
    getAll() : Todo[];
    getById(todoId : number) : Todo;
}

interface IIdGenerator {
    getId() : number;
}