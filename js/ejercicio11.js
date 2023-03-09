/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp
 */
let nombre1 = prompt('Ingrese el nombre de la primera persona:');
let edad1 = parseInt(prompt('Ingrese la edad de la primera persona:'));

while (isNaN(edad1)) {
    edad1 = parseInt(prompt(`Ingrese una edad válida para ${nombre1} :`));
  }

let nombre2 = prompt('Ingrese el nombre de la segunda persona:');
let edad2 = parseInt(prompt('Ingrese la edad de la segunda persona:'));

while (isNaN(edad2)) {
    edad2 = parseInt(prompt(`Ingrese una edad válida para ${nombre2} :`));
  }

let nombre3 = prompt('Ingrese el nombre de la tercera persona:');
let edad3 = parseInt(prompt('Ingrese la edad de la tercera persona:'));

while (isNaN(edad3)) {
    edad3 = parseInt(prompt(`Ingrese una edad válida para ${nombre3} :`));
  }

let mayorEdad = Math.max(edad1, edad2, edad3);

if (mayorEdad === edad1) {
  alert(`La persona mayor es ${nombre1}`);
} else if (mayorEdad === edad2) {
  alert(`La persona mayor es ${nombre2}`);
} else {
  alert(`La persona mayor es ${nombre3}`);
}