/*

Obtener e imprimir en consola del siguiente HTML los siguientes elementos

* todos los div's
* el elemento con Id 'header'
* el primer elemento con clase 'box'
* todos los elementos con la clase 'wrap'
* todos los elementos div con la clase 'wrap'
* solo el elemento con clase 'box' que se encuentra dentro del elemento 'wrap' que a su vez esta dentro del elemento 'container'

*/
//todos los divs de la pagina
let divs = document.getElementsByTagName("div");
console.log(divs);
//elementos con id Header
let header = document.getElementById("header");
console.log(header);
//primer elemento con clase box
let box = document.getElementsByClassName("wrap");
console.log(box);
//solo divs con la clase wrap
let divW = document.querySelectorAll("div.wrap");
console.log(divW);
// unico elemento con clase box dentro de wrap dentro de container
let unico = document.querySelector("div.container > div.wrap > span.box");
console.log(unico);
