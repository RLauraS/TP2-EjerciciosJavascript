/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
 */
let filas = parseInt(prompt("Ingrese un número de filas que desee"));
let columnas = parseInt(prompt("Ingrese un número de columnas que desee"));
repeticiones = filas * columnas;
document.write("<table>");
if (!isNaN(filas) || !isNaN(columnas)) {
  for (let i = 0; i < filas; i++) {
    document.write("<tr>");
    for (let j = 0; j < columnas; j++) {
      document.write("<td>" + repeticiones + "</td>");
      repeticiones--;
    }
    document.write("</tr>");
  }
  document.write("</table>");
} else {
  alert("Por favor ingrese números, no palabras");
}
