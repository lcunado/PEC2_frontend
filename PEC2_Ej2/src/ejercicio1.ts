function printArray(array:Array<number>):void{
       // Imprime el array en consola, separado por comas
       console.log(array.join(','));
}

let array:number[]=[2,3,4];

// Mostrar el primer elemento
console.log("Array [2,3,4]");
printArray(array);
console.log("Mostrar el primer elemento: '2'"); 
console.log(array[0]); // 2

// Eliminar el primer elemento
console.log("Array [2,3,4]");
printArray(array);
console.log("Eliminar el primer elemento: [3,4]"); 
array.shift();
printArray(array); // 3,4

// Añadir un nuevo número al final
console.log("Array [3,4]");
printArray(array);
console.log("Añadir un nuevo número al final: [3,4,5]");
array.push(5);
printArray(array); // 3,4,5

// Mostrar el último elemento
console.log("Array [3,4,5]");
printArray(array);
console.log("Mostrar el último elemento: '5'");
console.log(array[array.length - 1]); // 5

// Eliminar el último elemento
console.log("Array [3,4,5]");
printArray(array);
console.log("Eliminar el último elemento: [3,4]");
array.pop();
printArray(array); // 3,4

// Añadir un nuevo número al final
console.log("Array [3,4]");
printArray(array);
console.log("Añadir un nuevo número al final: [3,4,1]");
array.push(1);
printArray(array); // 3,4,1

// Añadir un nuevo número al principio
console.log("Array [3,4,1]");
printArray(array);
console.log("Añadir un nuevo número al principio: [8,3,4,1]");
array.unshift(8);
printArray(array); // 8,3,4,1

// Comprobar si todos los números son mayores que 3
console.log("Array [8,3,4,1]");
printArray(array);
console.log("Comprobar si todos los números son mayores que 3: 'false'");
let everyisgreater = array.every(num => num > 3);
console.log(everyisgreater); // false

// Comprobar si todos los números son menores que 10
console.log("Array [8,3,4,1]");
printArray(array);
console.log("Comprobar si todos los números son menores que 10: 'true'");
let everyisless = array.every(num => num < 10);
console.log(everyisless); // true

// Ordenar el array de forma ascendente
console.log("Array [8,3,4,1]");
printArray(array);
console.log("Ordenar el array de forma ascendente: [1,3,4,8]");
console.log(array.sort()); // 1,3,4,8

// Mostrar el array en orden descendente
console.log("Array [1,3,4,8]");
printArray(array);
console.log("Ordenar el array de forma descendente: [8,4,3,1]");
console.log(array.sort((a, b) => b - a)); // 8,4,3,1
