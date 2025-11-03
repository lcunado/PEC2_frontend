/**
 * @class Service
 *
 * Manages the data of the application.
 */
import { Todo } from '../models/todo.model';
// Servicio que gestiona la lógica de negocio de las tareas
export class TodoService {
    // Constructor: carga tareas desde localStorage si existen
    constructor() {
        this.todos = [];
        this.onTodoListChanged = () => { };
        const stored = localStorage.getItem('todos');
        this.todos = stored ? JSON.parse(stored).map((todo) => new Todo(todo)) : [];
    }
    // Permite al controlador registrar una función que se ejecuta cuando cambia la lista
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    // Actualiza localStorage y notifica el cambio
    _commit(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    // Añade una nueva tarea
    addTodo(text) {
        this.todos.push(new Todo({ text }));
        this._commit(this.todos);
    }
    // Edita el texto de una tarea existente
    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo => todo.id === id ? new Todo(Object.assign(Object.assign({}, todo), { text: updatedText })) : todo);
        this._commit(this.todos);
    }
    // Elimina una tarea por ID
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this._commit(this.todos);
    }
    // Cambia el estado de completado de una tarea
    toggleTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? new Todo(Object.assign(Object.assign({}, todo), { complete: !todo.complete })) : todo);
        this._commit(this.todos);
    }
}
