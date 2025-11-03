/**
 * @class Service
 *
 * Manages the data of the application.
 */
import { Todo } from '../models/todo.model';

// Servicio que gestiona la lógica de negocio de las tareas
export class TodoService {
  public todos: Todo[] = [];
  private onTodoListChanged: (todos: Todo[]) => void = () => {};

  // Constructor: carga tareas desde localStorage si existen
  constructor() {
    const stored = localStorage.getItem('todos');
    this.todos = stored ? JSON.parse(stored).map((todo: any) => new Todo(todo)) : [];
  }

  // Permite al controlador registrar una función que se ejecuta cuando cambia la lista
  public bindTodoListChanged(callback: (todos: Todo[]) => void): void {
    this.onTodoListChanged = callback;
  }

  // Actualiza localStorage y notifica el cambio
  private _commit(todos: Todo[]): void {
    this.onTodoListChanged(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  // Añade una nueva tarea
  public addTodo(text: string): void {
    this.todos.push(new Todo({ text }));
    this._commit(this.todos);
  }

  // Edita el texto de una tarea existente
  public editTodo(id: string, updatedText: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id ? new Todo({ ...todo, text: updatedText }) : todo
    );
    this._commit(this.todos);
  }

  // Elimina una tarea por ID
  public deleteTodo(id: string): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this._commit(this.todos);
  }

  // Cambia el estado de completado de una tarea
  public toggleTodo(id: string): void {
    this.todos = this.todos.map(todo =>
      todo.id === id ? new Todo({ ...todo, complete: !todo.complete }) : todo
    );
    this._commit(this.todos);
  }
}
