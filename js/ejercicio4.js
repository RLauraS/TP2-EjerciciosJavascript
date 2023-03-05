/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
let contador = 0;
let num = prompt("Ingrese un número, por favor");
if (!isNaN(num) === true) {
  do {
    num = prompt("Ingrese otro número para ser sumado");
    contador = contador + num;
  } while (confirm("¿Desea seguir sumando números?"));
  document.write(
    "La suma de los números ingreados da un total de: " + contador
  );
} else {
  alert("Por favor no ingrese texto, solo números");
}
*/
let total = 0;
let nroIngresado;

do{
  nroIngresado = prompt('Introduce un número:');

  if (nroIngresado === null) {
    break;
  }

  const num = Number(nroIngresado);

  if (Number.isNaN(num)) {
    alert('El valor introducido no es un número válido. Inténtalo de nuevo.');
    continue;
  }

  total += num;
}while (confirm("¿Desea seguir agregando numeros?"));

alert(`La suma total de los números introducidos es ${total}.`);
