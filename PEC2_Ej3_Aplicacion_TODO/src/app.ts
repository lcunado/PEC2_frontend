import { TodoService } from './services/todo.service';
import { TodoView } from './views/todo.views';
import { TodoController } from './controllers/todo.controller';

// Punto de entrada de la aplicación
// Crea las instancias y lanza el controlador
const app = new TodoController(new TodoService(), new TodoView());
