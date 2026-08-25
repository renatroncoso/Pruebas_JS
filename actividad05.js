// 1. Función para convertir nombre y apellidos a mayúsculas
function obtenerNombreCompleto(nombre, apellidos) {
    return (nombre + " " + apellidos).toUpperCase();
}


// 2. Función que determina el monto de asignación familiar
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


// 3. Función para calcular el total según cantidad de beneficiarios
function calcularBeneficio(asignacionFamiliar, cantidadBeneficiarios) {
    return asignacionFamiliar * cantidadBeneficiarios;
}


// Función principal
function ingresarDatos() {

    let nombre = prompt("Ingrese el nombre:");
    let apellidos = prompt("Ingrese los apellidos:");

    let nombreCompleto = obtenerNombreCompleto(nombre, apellidos);

    let sueldoBaseActual = Number(
        prompt("Ingrese el sueldo base actual:")
    );

    let sueldoBaseAnterior = Number(
        prompt("Ingrese el sueldo base promedio del semestre anterior:")
    );

    if (
        !Number.isInteger(sueldoBaseActual) ||
        !Number.isInteger(sueldoBaseAnterior)
    ) {
        console.log("ERROR: Los sueldos deben ser números enteros.");
        return;
    }

    let respuestaCargas = prompt(
        "¿Tiene cargas familiares autorizadas? (SI/NO)"
    );

    let tieneCargas = respuestaCargas.toUpperCase() === "SI";

    let montoAsignacion = obtenerAsignacionFamiliar(
        sueldoBaseAnterior,
        tieneCargas
    );

    console.log(
        "Al Trabajador " +
        nombreCompleto +
        " le corresponde valor de familiar (" +
        montoAsignacion +
        ") por su renta del semestre anterior que es: $" +
        sueldoBaseAnterior
    );

    // Si tiene asignación familiar, preguntar cantidad de beneficiarios
    if (tieneCargas && montoAsignacion > 0) {

        let cantidadBeneficiarios = Number(
            prompt("Ingrese la cantidad de beneficiados con carga familiar:")
        );

        if (
            !Number.isInteger(cantidadBeneficiarios) ||
            cantidadBeneficiarios <= 0
        ) {
            console.log(
                "ERROR: La cantidad de beneficiarios debe ser un número entero mayor que 0."
            );
            return;
        }

        let beneficioTotal = calcularBeneficio(
            montoAsignacion,
            cantidadBeneficiarios
        );

        console.log(
            "El beneficio total por " +
            cantidadBeneficiarios +
            " beneficiario(s) es: $" +
            beneficioTotal
        );
    }
}


// Ejecutar programa
ingresarDatos();
