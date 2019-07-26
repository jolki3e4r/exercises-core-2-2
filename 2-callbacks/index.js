/**
***************************
**************************

Agregar la logica necesaria a la funcion 'onClick' que permita cambiar el contenido del div con clase box

**************************
**************************
 */

function changeTextOnclick(e) {
  // logica aqui.
  box.innerHTML = "Nuevo Contenido";
  box.style.color = "RGB(138, 43, 226)";
}
const button1 = document.getElementById("btn-1");
button1.addEventListener("click", changeTextOnclick);

/*
**************************
**************************

Agregar un evento click al boton del HTML que cambie el color del div con clase box

**************************
**************************
*/

const box = document.querySelector(".box");
const button2 = document.querySelector(".btn-2");

button2.addEventListener("click", changeBackgroundColorOnClick);

function changeBackgroundColorOnClick() {
  box.style.backgroundColor = "RGB(255, 20, 147)";
}
