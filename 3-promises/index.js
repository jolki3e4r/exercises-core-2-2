/* 
**************************
**************************

Agregar la dentro del metodo .then() la logica necesaria para imprimir el valor 'value'

**************************
**************************
*/

const myPromise = Promise.resolve(50);

myPromise.then(function(value) {
  // logica aqui
  myPromise = value;
  console.log(value);
});

/*
**************************
**************************

Agregar dentro del Callback 'funcion1' la logica necesaria sumarle al valor 'value' la cantidad 10 y luego imprimirlo

**************************
**************************
*/

const addValue = function(value) {
  // logica aqui.
  value = value + 10;
  console.log(value);
};

let anotherPromise = Promise.resolve(10);

anotherPromise.then(addValue);

/* 
**************************
**************************

Crear una promesa que resuelva con el string 'foo'

**************************
**************************
*/

const addValueFoo = function(value) {
  console.log(value);
}; // logica aqui

let myPromiseFoo = Promise.resolve("foo");

myPromiseFoo.then(addValueFoo);
/* 
**************************
**************************

A la promesa anterior agregar un metodo .then() para concatenar al string su propio nombre. 

**************************
**************************
*/
//tu logica aqui
let myPromiseFooConcat = Promise.resolve("foo");

myPromiseFooConcat.then(function(value) {
  console.log(value);
});
