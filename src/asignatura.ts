import { Curso } from "./curso";

/**
 *
 * Clase Asignatura.
 * Entidad.
 * 
 * Almacena información referente a cada asignatura disponible en el grado.
 * 
 * */

export class Asignatura{
    private codigo: string;
    private nombre: string;
    private curso: Curso;

    constructor(codigo: string, nombre: string, curso: Curso){
        this.codigo = codigo;
        this.nombre = nombre;
        this.curso = curso;
    }
}