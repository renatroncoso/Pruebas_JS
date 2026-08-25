let edadPersona = prompt("Ingrese la edad de la persona:");
let edadNumerica = Number(edadPersona);

if (edadPersona === null || edadPersona.trim() === "") {
    console.log("ERROR: Debe ingresar una edad.");
} else if (!Number.isFinite(edadNumerica)) {
    console.log("ERROR: El dato ingresado debe ser un número.");
} else if (edadNumerica <= 0) {
    console.log("ERROR: La edad debe ser mayor que cero.");
} else if (edadNumerica < 18) {
    console.log("PERSONA ES MENOR DE EDAD");
} else if (edadNumerica < 65) {
    console.log("PERSONA ES ADULTA");
} else if (edadNumerica < 85) {
    console.log("PERSONA ES ADULTO MAYOR");
} else {
    console.log("PERSONA ES DE AÑOS DORADOS");
}
