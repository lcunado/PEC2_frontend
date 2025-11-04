/**
 * @class Model
 *
 * Manages the data of the application.
 */

// Interfaz que define la estructura de una tarea TODO
export interface ITodo {
  id: string;
  text: string;
  complete: boolean;
}

// Clase que implementa la interfaz ITodo
export class Todo implements ITodo{
  public id: string;
  public text: string;
  public complete: boolean;

  // Constructor que recibe el texto y el estado de completado
  constructor({ text, complete = false }: { text: string; complete?: boolean }) {
    this.id = this.uuidv4();
    this.text = text;
    this.complete = complete;
  }

  // Método privado para generar un UUID v4
  private uuidv4(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = crypto.getRandomValues(new Uint8Array(1))[0] & 15;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
