/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/
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