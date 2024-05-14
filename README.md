
![Banner](https://github.com/neonolb/PRO2/blob/PRO2/banner.png)
## PROYECTO 2: Sistema de Votación en JavaScript
Bootcamper : Nolberto Hernández A. -  Cohort 14





## Qué construirás en este proyecto
Construirás un programa en JavaScript que permita a los usuarios crear encuestas, votar y ver los resultados en tiempo real. El programa debe cumplir con los siguientes requisitos:

Permitir a los usuarios crear encuestas con opciones de respuesta.
Permitir a los usuarios votar en las encuestas.
Mostrar los resultados de las encuestas en tiempo real.
Almacenar los datos de las encuestas y los votos en una variable.
Implementar la solución utilizando programación orientada a objetos (POO) y programación funcional (PF).
Subirás tu solución a un repositorio de GitHub, el cual compartirás con tu equipo educativo, posteriormente.


## Código POO
1. Se definen las clases y los metodos a utilizar para la encuesta:
- `Metodo : class` el método clase contiene las preguntas, opciones y votos
- `Método : Votar` En este método se construye la votacipón que será guardada, y se agrega el validador en caso de que la respuesta elegida no está dentro de las opciones parametrizadas.
- `Método : Obtener Resultados` sirve para almacenar los resultados de las encuestas
- `Class : EncuestaManager` Construida para gestionar multiples encuestas.
- `Método : CrearEncuesta` Sirve para crear la encuesta e ir almacenenado 1 a 1 las respuestas.
- `Método: ObtenerEncuesta` retorna una lista de las encuestas y las indexa.
- `Const encuesta (1,2,3)` se declara una constante, en este caso la pregunta de la encuesta y un pool de soluciones correctas.
- `Const Resultados (1,2,3)` Se declara una constante de resulatado, para mostrar el detalle de la votación
- `console.log` Se muestra en pantalla cada una de las 3 preguntas de la encuestas




2. ### Código de la solución POO:
```scss
// Definición de la clase Encuesta
class Encuesta {
    constructor(pregunta, opciones) {
      this.pregunta = pregunta;
      this.opciones = opciones;
      this.votos = new Array(opciones.length).fill(0); 
    }
  
    // Método para votar por una opción
    votar(opcion) {
      const index = this.opciones.indexOf(opcion);
      if (index !== -1) {
        this.votos[index]++;
        return true;
      }
      console.log("La opción seleccionada no es válida, debe elegir entre: ");
      return this.opciones
      //return false;
    }
  
    // Método para obtener los resultados de las encuestas
    obtenerResultados() {
      const resultados = {};
      this.opciones.forEach((opcion, index) => {
        resultados[opcion] = this.votos[index];
      });
      return resultados;
    }
  }
  
  // Definición de la clase EncuestasManager para gestionar múltiples encuestas
  class EncuestasManager {
    constructor() {
      this.encuestas = [];
    }
  
    // Método para crear una nueva encuesta y agregarla a la lista
    crearEncuesta(pregunta, opciones) {
      const nuevaEncuesta = new Encuesta(pregunta, opciones);
      this.encuestas.push(nuevaEncuesta);
      return nuevaEncuesta;
    }
  
    // Método para obtener una encuesta por su índice en la lista
    obtenerEncuesta(index) {
      return this.encuestas[index];
    }
  }
  
  // Ejemplo de uso
  const encuestasManager = new EncuestasManager();

  // Crear las Encuestas y las opciones
  const encuesta1 = encuestasManager.crearEncuesta("¿Cuál es tu lenguaje de programación favorito?", ["JavaScript", "Python","C++"]);
  const encuesta2 = encuestasManager.crearEncuesta("¿Que Plataforma Cloud prefieres?", ["Amazon", "Azure", "Google"]);
  const encuesta3 = encuestasManager.crearEncuesta("¿Cual es tu BBDD Favorita?", ["MySql", "Oracle", "MongoDB"]);
  
    const resultados1 = encuesta1.obtenerResultados();
    const resultados2 = encuesta2.obtenerResultados();
    const resultados3 = encuesta3.obtenerResultados();

    console.log("Resultados de la encuesta:");
    console.log(resultados1);
    console.log(resultados2);
    console.log(resultados3);


```
- En este ejemplo, la encuesta tiene 3 preguntas.
a. ¿Cuál es tu lenguaje de programación favorito?

b. ¿Que Plataforma Cloud prefieres?

c. ¿Cual es tu BBDD Favorita?


3. Evidencia de la ejecución en la consola:
```scss

```

3.  ### Código de la solución PF:
```scss

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
        return opciones;
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

// Las Preguntas y opciones
let encuesta1 = crearEncuesta("¿Que día quiere recuperar la clase?", ["Lunes", "Martes", "Miércoles","Jueves", "Viernes"]);
let encuesta2 = crearEncuesta("¿Que Horario le acomoda?", ["15:00 a 17:00", "15:00 a 18:00", "18:00 a 21:00","19:00 a 22:00", "20:00 a 23:00"]);

// Comando de Consola para votar en la escuesta
// encuesta1 = votar(encuesta1, "Lunes");
// encuesta2 = votar(encuesta2, "15:00 a 17:00");

// Comando para Mostrar los resultados
mostrarResultados(encuesta1);
mostrarResultados(encuesta2);


```
- Como evidencia de la ejecución se agrega el pantallazo del cálculo solicitado por el proyecto.



## Entregables

Crea un repositorio en GitHub para este proyecto, con 2 carpetas para POO y PF.


- Archivo Readme.md
- https://github.com/neonolb/PRO2/tree/PRO2
- Pantallazo de la soluciónes.

![Banner](https://github.com/neonolb/PRO2/blob/PRO2/img_poo.png) 



