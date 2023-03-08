/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/ 
let vocales=["a","e","i","o","u","á","é","í","ó","ú"];
let texto = prompt("ingrese un texto");
texto= texto.toLowerCase();
let posicion = 0;
let fin= false;

for (let i = 0; i < texto.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
        if (vocales[j]==texto.charAt(i)) {
            posicion=i;
            fin=true;
            break;
        }
    }
   if (fin) {
    break;
   } 
}
document.write("La primera vocal está en la posición " + (posicion+1));
/*
var vocales = ["a", "e", "i", "o", "u"];
var texto = prompt("Introduce un texto");
var textomin = texto.toLowerCase();
var posicion = 0;
var parar = false;
for (var i = 0; i < textomin.length; i++) {
    for (var j = 0; j < vocales.length; j++) {
        if (vocales[j] == textomin.charAt(i)) {
            posicion = i;
            parar = true;
            break;
        }
    }
    if (parar) {
        break;
    }
}
document.write("La primera vocal está en la posición " + posicion);*/
