/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/
let palabraIngresada = "";
do {
  let cadena = prompt("Ingrese una frase o palabra:");
  if (palabraIngresada == "") {
    palabraIngresada = palabraIngresada + cadena;
  } else {
    palabraIngresada = palabraIngresada + "-" + cadena;
  }
} while (confirm("¿Desea seguir agregando palabras?"));
document.write(palabraIngresada);
