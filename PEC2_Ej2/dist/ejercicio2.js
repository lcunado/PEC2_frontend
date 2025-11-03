"use strict";
// Creamos el objeto myHangar el cual tendrá un estructura HangarHash
let myHangar = {};
// Añadimos aviones a myHangar usando identificadores en claves y Plane como valor
myHangar['123Z'] = {
    model: 'airbus',
    npassengers: 200
};
myHangar['H789'] = {
    model: 'boeing',
    npassengers: 151
};
// Recorremos todas las claves del objeto myHangar e imprimimos cada avión con el formato deseado
for (const key in myHangar) {
    const plane = myHangar[key]; // Accedemos a cada avión
    console.log(`${key}:${plane.model}(${plane.npassengers})`); // Imprimimos los datos
}
