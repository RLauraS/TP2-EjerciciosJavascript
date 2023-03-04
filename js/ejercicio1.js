/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/
const edad = parseInt(prompt("Por favor, ingrese su edad"));

if (edad > 0 || edad < 120) {
  if (edad > 17) {
    document.write("Ya puede conducir");
  } else {
    document.write("Aún no tiene la edad necesaria para conducir");
  }
} else {
  document.write("Disculpe, la edad ingresada no es válida");
}
