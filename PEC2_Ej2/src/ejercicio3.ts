
// Clase abstracta Animal(no puede instanciarse)
abstract class Animal {
    static population: number = 0;
    constructor() {
        // Aumentamos la población al crear un animal
        Animal.population++;
    }
    public abstract sound(): void;
}

// Clase Dog hereda de la clase abstracta Animal
class Dog extends Animal {
    color: string;

    constructor(color: string) {
        super(); // Llamamos al constructor de Animal para incrementar la población
        this.color = color;
    }

    public sound(): void { // Método abstracto
        console.log('WOW');
    }

    public iamadog() { // Método específico de Dog
        console.log('yes, this is a dog');
    }
}

// Clase Cat hereda de la clase abstracta Animal
class Cat extends Animal {
    gender: string;
    
    constructor(gender : string) {
        super(); // Llamamos al constructor de Animal para incrementar la población
        this.gender  = gender ;
    }

    public sound(): void { // Método abstracto
        console.log('MEOW');
    }
    
    public iamacat() { // Método específico de Cat
        console.log('yes, this is a cat');
    }
}

// Array de tipo Animal[]
let animals: Animal[] = [];

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
        (animal as Cat).iamacat();
    } else if (animal instanceof Dog) {
        (animal as Dog).iamadog();
    }
}

// Imprimimos el número de animales
console.log(Animal.population); //4