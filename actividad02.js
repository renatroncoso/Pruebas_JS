var num1 =3;
var num2 =4;
let entrada = prompt("ingrese un numero:");
while (isNaN(entrada) || entrada <= 0) {
    entrada = Number(prompt("Error. Ingrese un número mayor a 0:"));
}
let entrada2 = prompt("ingrese un segundo numero:");
while (isNaN(entrada2) || entrada2 <= 0 || entrada2 === entrada) {
    if (entrada2 === entrada) {
        entrada2 = Number(prompt("Error. Los números deben ser distintos. Ingrese otro número:"));
    } else {
        entrada2 = Number(prompt("Error. Ingrese un número mayor que 0:"));
    }
}
var suma = num1 + num2;
var resta = num1 - num2;
var division = num1/num2;
var multiplicacion = entrada * entrada2

console.log('la multiplicacion es: '+ multiplicacion)