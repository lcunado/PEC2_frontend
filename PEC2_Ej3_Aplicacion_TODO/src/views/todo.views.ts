/**
 * @class View
 *
 * Visual representation of the model.
 */
import { Todo } from '../models/todo.model';

// Vista que gestiona el DOM y la interacción con el usuario
export class TodoView {
  private root: HTMLElement;

  constructor() {
    this.root = document.getElementById('root')!;
  }

  public bindAddTodo(callback: (text: string) => void): void {
    // Pendiente de implementación
  }

  public bindEditTodo(callback: (id: string, text: string) => void): void {
    // Pendiente de implementación
  }

  public bindDeleteTodo(callback: (id: string) => void): void {
    // Pendiente de implementación
  }

  public bindToggleTodo(callback: (id: string) => void): void {
    // Pendiente de implementación
  }

  // Muestra la lista de tareas en pantalla
  public displayTodos(todos: Todo[]): void {
    this.root.innerHTML = '';
    todos.forEach(todo => {
      const item = document.createElement('div');
      item.textContent = `${todo.text} ${todo.complete ? '(✓)' : ''}`;
      this.root.appendChild(item);
    });
  }
}
