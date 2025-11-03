// Controlador que conecta la vista con el servicio
export class TodoController {
    constructor(service, view) {
        this.service = service;
        this.view = view;
        // Actualiza la vista cuando cambian las tareas
        this.onTodoListChanged = (todos) => {
            this.view.displayTodos(todos);
        };
        // Métodos que responden a eventos de la vista
        this.handleAddTodo = (text) => {
            this.service.addTodo(text);
        };
        this.handleEditTodo = (id, text) => {
            this.service.editTodo(id, text);
        };
        this.handleDeleteTodo = (id) => {
            this.service.deleteTodo(id);
        };
        this.handleToggleTodo = (id) => {
            this.service.toggleTodo(id);
        };
        // Enlaza los eventos de la vista con los métodos del servicio
        this.service.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindEditTodo(this.handleEditTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);
        // Muestra las tareas iniciales
        this.onTodoListChanged(this.service.todos);
    }
}
