# PEC2 - Ejercicio 1
![Captura del TypeError](error.png)

**Explicación**

El error ocurre porque TypeScript infiere que c.apple es de tipo number porque se inicializó con a, que es 1 + 2.
Al intentar asignarle un valor de tipo string, TypeScript lanza un error: no se puede asignar un string a una propiedad que espera un número.
Además, la línea const d = c.apple * 4 se vuelve inválida, porque estaría intentando multiplicar una cadena por un número.

**Ventajas de TypeScript**
- Detecta errores de tipo antes de ejecutar el código.
- Protege la coherencia de los datos en estructuras como objetos.
- Facilita el mantenimiento y la escalabilidad del código.

## Cuestiones:
**1. Para cada uno de los valores del fichero code2.ts, ¿Qué tipo de datos inferirá TypeScript? Explica por qué se ha inferido este tipo de datos.**
- const a = 1042; -> Es un número entero, TypeScript lo reconoce como tipo number.
- const b = 'apples and oranges'; -> Es una cadena de texto, por lo tanto el tipo inferido es string.
- const c = 'pineapples'; -> También es una cadena, así que el tipo es string.
- const d = [true, true, false]; -> Es un array de valores booleanos, TypeScript infiere boolean[].
- const e = { type: 'ficus' }; -> Es un objeto con una propiedad type de tipo string.
- const f = [1, false]; -> Es un array mixto, TypeScript infiere una unión de tipos number y boolean.
- const g = [3]; -> Es un array con un solo número, TypeScript lo interpreta como number[].
- const h = null; -> Se asigna explícitamente null, así que el tipo inferido es null.

TypeScript analiza el valor asignado en tiempo de desarrollo y deduce el tipo más específico posible. Esto permite evitar errores como por ejemplo, usar métodos de string sobre un number. Permite también el autocompletado inteligente donde el editor te sugiere métodos y propiedades válidas, y, además, mejora la legibilidad y mantenibilidad del código.

**2. ¿Por qué se dispara cada uno de los errores del fichero code3.ts?**
- const i: 3 = 3; i = 4; -> const declara una constante, lo que significa que no se puede reasignar su valor. Al intentar modificar una constante se genera el error: Cannot assign to 'i' because it is a constant.
- const j = [1, 2, 3]; j.push(4); j.push('5'); -> j es un array de números, number[]. j.push('5'); lanza un error porque '5' es una cadena (string) y el array solo acepta number. El error generado es: Argument of type 'string' is not assignable to parameter of type 'number'.
- let k: never = 4; -> never significa “nunca debe tener un valor”. Asignar 4 a k contradice el tipo never, que se usa para funciones que nunca retornan o para variables imposibles. El error generado es: Type '4' is not assignable to type 'never'.
- let l: unknown = 4; let m = l * 2; -> unknown es un tipo seguro que no permite operaciones directas. l * 2 lanza error porque no se puede operar con unknown sin antes hacer una verificación de tipo. El error generado es: 'l' is of type 'unknown'.

**3. ¿Cuál es la diferencia entre una clase y una interface en TypeScript?**

En TypeScript, tanto las clases como las interfaces se utilizan para definir estructuras de datos, pero tienen propósitos diferentes y se comportan de manera distinta. 

Una interface es una herramienta que permite definir la forma que debe tener un objeto. Es decir, especifica qué propiedades y tipos debe tener, pero no contiene ninguna lógica ni implementación. Las interfaces existen únicamente en tiempo de desarrollo y no se traducen a código JavaScript cuando el proyecto se compila. Esto las hace ideales para definir contratos de tipo, especialmente cuando se trabaja con objetos complejos, funciones o clases que deben seguir una estructura determinada. Por ejemplo, si se define una interface llamada Persona con las propiedades nombre y edad, TypeScript se asegurará de que cualquier objeto que afirme ser del tipo Persona tenga exactamente esas propiedades con los tipos correctos. Esto ayuda a mantener la coherencia del código y a detectar errores antes de que se ejecuten.

Por otro lado, una clase en TypeScript no solo define la estructura de un objeto, sino también su comportamiento. Las clases pueden contener propiedades, métodos, constructores y lógica interna. A diferencia de las interfaces, las clases sí se convierten en código JavaScript al compilarse, lo que permite crear instancias reales con new. Además, las clases pueden implementar interfaces para garantizar que cumplen con una determinada estructura, y también pueden extender otras clases para heredar funcionalidad.

En resumen, las interfaces sirven para definir contratos de tipo y asegurar que los objetos cumplan con una estructura determinada, mientras que las clases permiten crear objetos con lógica y funcionalidad.


