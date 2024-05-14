// Función para crear una nueva encuesta
const crearEncuesta = (pregunta, opciones) => {
    return {
        pregunta,
        opciones: opciones.reduce((acc, opcion) => {
            acc[opcion] = 0;
            return acc;
        }, {})
    };
};

// Función para votar en una encuesta
const votar = (encuesta, opcionVotada) => {
    if (encuesta.opciones.hasOwnProperty(opcionVotada)) {
        return {
            ...encuesta,
            opciones: {
                ...encuesta.opciones,
                [opcionVotada]: encuesta.opciones[opcionVotada] + 1
            }
        };
    } else {
        console.log("La opción seleccionada no es válida.");
        return encuesta;
    }
};

// Función para mostrar los resultados de la encuesta
const mostrarResultados = encuesta => {
    console.log("Resultados de la encuesta:");
    console.log(encuesta.pregunta);
    Object.entries(encuesta.opciones).forEach(([opcion, votos]) => {
        console.log(`${opcion}: ${votos}`);
    });
};

// Encuesta inicial
let encuesta1 = crearEncuesta("¿Que día quiere recuperar la clase?", ["Lunes", "Martes", "Miércoles","Jueves", "Viernes"]);
let encuesta2 = crearEncuesta("¿Que Horario le acomoda?", ["15:00 a 17:00", "15:00 a 18:00", "18:00 a 21:00","19:00 a 22:00", "20:00 a 23:00"]);
// Comando Consola para votar en la escuesta
// encuesta1 = votar(encuesta1, "Rojo");
// encuesta2 = votar(encuesta2, "15:00 a 17:00");

// Comando para Mostrar los resultados
mostrarResultados(encuesta1);
mostrarResultados(encuesta2);
