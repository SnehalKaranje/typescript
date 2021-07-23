import { Todo } from "./Model";
import '//code.jquery.com/jquery-1.12.1.min.js';
export default class TodoListComponent {
    private $el;
    constructor(el: HTMLElement);
    render(todos: Todo[]): void;
    private renderTodo;
}
