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
      console.log("La opción seleccionada no es válida.");
      return this.opciones
      return false;
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