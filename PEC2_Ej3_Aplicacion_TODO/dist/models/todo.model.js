/**
 * @class Model
 *
 * Manages the data of the application.
 */
// Clase que implementa la interfaz ITodo
export class Todo {
    // Constructor que recibe el texto y el estado de completado
    constructor({ text, complete = false }) {
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete;
    }
    // Método privado para generar un UUID v4
    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            const r = crypto.getRandomValues(new Uint8Array(1))[0] & 15;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
