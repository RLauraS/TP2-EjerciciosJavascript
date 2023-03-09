/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
 */
let numero = prompt("Ingrese un número no mayor a 50:");
let piramide = "";

if (numero < 51 || !isNaN(numero)) {
  for (let i = 1; i <= numero; i++) {
    piramide += i;
    document.write(`${piramide}<br>`);
  }
} else {
  document.write("Recuerde ingresar un número menor a 50 (no palabras), por favor");
}
