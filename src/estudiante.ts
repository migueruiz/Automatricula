import { Asignatura } from "./asignatura";

/**
 *
 * Clase Estudiante.
 * Entidad.
 * 
 * Almacena los datos personales de cada estudiante en la universidad.
 * */

export class Estudiante{
    private nombre: string;
    private apellidos: string;
    private dni: string;
    private correo: string;
    private asignaturas_matriculadas: Asignatura[];

    // Un estudiante se puede crear sin tener asignaturas matriculadas.
    // Las asignaturas se pueden añadir posteriormente.
    constructor(nombre: string, apellidos: string, dni: string, correo: string){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.correo = correo;
        this.asignaturas_matriculadas = [];
    }

}
