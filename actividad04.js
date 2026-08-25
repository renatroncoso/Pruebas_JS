// 1. Crear arreglo con el doble del elemento anterior
function crearArreglo(n) {
    let arreglo = [];

    if (n <= 0) {
        return arreglo;
    }

    arreglo[0] = 1;

    for (let i = 1; i < n; i++) {
        arreglo[i] = arreglo[i - 1] * 2;
    }

    return arreglo;
}


// 2. Obtener el mayor número
function obtenerMayor(arreglo) {
    let mayor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }

    return mayor;
}


// 3. Obtener día de la semana
function obtenerDia(numero) {
    let diasSemana = [
        "lunes",
        "martes",
        "miércoles",
        "jueves",
        "viernes",
        "sábado",
        "domingo"
    ];

    if (numero < 1 || numero > 7) {
        return "Número de día inválido";
    }

    return diasSemana[numero - 1];
}


// 4. Buscar elemento
function buscarElemento(arreglo, elementoBuscado) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === elementoBuscado) {
            return i;
        }
    }

    return -1;
}


// 5. Ordenar ascendentemente
function ordenarAscendente(arreglo) {
    return arreglo.sort(function(a, b) {
        return a - b;
    });
}


// PRUEBAS

console.log("Ejercicio 1:", crearArreglo(6));

let numeros = [15, 8, 32, 4, 27, 10, 45, 3, 19, 7];
console.log("Ejercicio 2:", obtenerMayor(numeros));

console.log("Ejercicio 3:", obtenerDia(1));
console.log("Ejercicio 3:", obtenerDia(7));

let arregloBusqueda = [10, 25, 8, 42, 17, 30];
console.log("Ejercicio 4:", buscarElemento(arregloBusqueda, 42));

let arregloDesordenado = [25, 8, 42, 3, 17, 10, 5];
console.log("Ejercicio 5:", ordenarAscendente(arregloDesordenado));
