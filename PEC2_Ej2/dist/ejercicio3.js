"use strict";
// Clase abstracta Animal(no puede instanciarse)
class Animal {
    constructor() {
        // Aumentamos la población al crear un animal
        Animal.population++;
    }
}
Animal.population = 0;
// Clase Dog hereda de la clase abstracta Animal
class Dog extends Animal {
    constructor(color) {
        super(); // Llamamos al constructor de Animal para incrementar la población
        this.color = color;
    }
    sound() {
        console.log('WOW');
    }
    iamadog() {
        console.log('yes, this is a dog');
    }
}
// Clase Cat hereda de la clase abstracta Animal
class Cat extends Animal {
    constructor(gender) {
        super(); // Llamamos al constructor de Animal para incrementar la población
        this.gender = gender;
    }
    sound() {
        console.log('MEOW');
    }
    iamacat() {
        console.log('yes, this is a cat');
    }
}
// Array de tipo Animal[]
let animals = [];
// Creamos perros y gatos
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));
// Bucle para recorrer todos los animales del array
for (let animal of animals) {
    animal.sound(); // Llamamos al método abstracto implementado por cada clase
    // Verificamos el tipo de animal para llamar a su método específico
    if (animal instanceof Cat) {
        animal.iamacat();
    }
    else if (animal instanceof Dog) {
        animal.iamadog();
    }
}
// Imprimimos el número de animales
console.log(Animal.population); //4
