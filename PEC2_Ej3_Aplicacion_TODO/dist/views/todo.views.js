"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoView = void 0;
// Vista que gestiona el DOM y la interacción con el usuario
class TodoView {
    constructor() {
        this.root = document.getElementById('root');
    }
    bindAddTodo(callback) {
        // Pendiente de implementación
    }
    bindEditTodo(callback) {
        // Pendiente de implementación
    }
    bindDeleteTodo(callback) {
        // Pendiente de implementación
    }
    bindToggleTodo(callback) {
        // Pendiente de implementación
    }
    // Muestra la lista de tareas en pantalla
    displayTodos(todos) {
        this.root.innerHTML = '';
        todos.forEach(todo => {
            const item = document.createElement('div');
            item.textContent = `${todo.text} ${todo.complete ? '(✓)' : ''}`;
            this.root.appendChild(item);
        });
    }
}
exports.TodoView = TodoView;
