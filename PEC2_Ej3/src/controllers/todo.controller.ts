/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */
import { TodoService } from '../services/todo.service';
import { TodoView } from '../views/todo.views';
import { Todo } from '../models/todo.model';

// Controlador que conecta la vista con el servicio
export class TodoController {
  constructor(private service: TodoService, private view: TodoView) {
    // Enlaza los eventos de la vista con los métodos del servicio
    this.service.bindTodoListChanged(this.onTodoListChanged);
    this.view.bindAddTodo(this.handleAddTodo);
    this.view.bindEditTodo(this.handleEditTodo);
    this.view.bindDeleteTodo(this.handleDeleteTodo);
    this.view.bindToggleTodo(this.handleToggleTodo);

    // Muestra las tareas iniciales
    this.onTodoListChanged(this.service.todos);
  }

  // Actualiza la vista cuando cambian las tareas
  private onTodoListChanged = (todos: Todo[]): void => {
    this.view.displayTodos(todos);
  };

  // Métodos que responden a eventos de la vista
  private handleAddTodo = (text: string): void => {
    this.service.addTodo(text);
  };
  private handleEditTodo = (id: string, text: string): void => {
    this.service.editTodo(id, text);
  };
  private handleDeleteTodo = (id: string): void => {
    this.service.deleteTodo(id);
  };
  private handleToggleTodo = (id: string): void => {
    this.service.toggleTodo(id);
  };
}
