import Model = require('./model');
import TodoState = Model.TodoState;

import DataAccess = require('./DataAccess');
import TodoService = DataAccess.TodoService;

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