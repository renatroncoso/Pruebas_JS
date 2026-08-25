// Función para obtener nombre y apellidos en mayúsculas
function obtenerNombreCompleto(nombre, apellidos) {
    return (nombre + " " + apellidos).toUpperCase();
}


// Función para determinar el monto de asignación familiar
function obtenerAsignacionFamiliar(rentaSemestreAnterior, tieneCargas) {

    if (!tieneCargas) {
        return 0;
    }

    if (rentaSemestreAnterior <= 429899) {
        return 16828;
    } else if (rentaSemestreAnterior <= 627913) {
        return 10327;
    } else if (rentaSemestreAnterior <= 979330) {
        return 3264;
    } else {
        return 0;
    }
}


// Función para determinar el tramo
function obtenerTramo(rentaSemestreAnterior) {

    if (rentaSemestreAnterior <= 429899) {
        return "Tramo 1 (A)";
    } else if (rentaSemestreAnterior <= 627913) {
        return "Tramo 2 (B)";
    } else if (rentaSemestreAnterior <= 979330) {
        return "Tramo 3 (C)";
    } else {
        return "Tramo 4 (D)";
    }
}


// Función para calcular el total de asignación familiar
function calcularBeneficio(asignacionFamiliar, cantidadCargas) {
    return asignacionFamiliar * cantidadCargas;
}


// Crear objeto persona
let persona = {
    nombre: prompt("Ingrese el nombre:"),
    apellidos: prompt("Ingrese los apellidos:"),
    sueldoActual: Number(prompt("Ingrese el sueldo base actual:")),
    sueldoSemestreAnterior: Number(
        prompt("Ingrese el sueldo base promedio del semestre anterior:")
    ),
    tieneCargas: prompt(
        "¿Tiene cargas familiares autorizadas? (SI/NO)"
    ).toUpperCase() === "SI",
    cantidadCargas: 0
};


// Si tiene cargas, solicitar cantidad
if (persona.tieneCargas) {
    persona.cantidadCargas = Number(
        prompt("Ingrese la cantidad de cargas familiares:")
    );
}


// Obtener datos calculados
persona.nombreCompleto = obtenerNombreCompleto(
    persona.nombre,
    persona.apellidos
);

persona.tramo = obtenerTramo(
    persona.sueldoSemestreAnterior
);

persona.montoPorCarga = obtenerAsignacionFamiliar(
    persona.sueldoSemestreAnterior,
    persona.tieneCargas
);

persona.montoTotalCargas = calcularBeneficio(
    persona.montoPorCarga,
    persona.cantidadCargas
);

persona.sueldoMasCargas =
    persona.sueldoActual + persona.montoTotalCargas;


// Mostrar todos los datos
console.log("======================================");
console.log("           DATOS DE LA PERSONA");
console.log("======================================");

console.log("Nombre:", persona.nombre);
console.log("Apellidos:", persona.apellidos);
console.log(
    "Cargas:",
    persona.tieneCargas ? "SI" : "NO"
);
console.log(
    "Cantidad de Cargas familiares:",
    persona.cantidadCargas
);
console.log(
    "Está en el tramo:",
    persona.tramo
);
console.log(
    "Le corresponde por carga familiar el monto:",
    "$" + persona.montoPorCarga
);
console.log(
    "Le corresponde el monto total de carga familiar de:",
    "$" + persona.montoTotalCargas
);
console.log(
    "Su sueldo del mes más las cargas familiares es de:",
    "$" + persona.sueldoMasCargas
);
