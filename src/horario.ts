import { Estudiante } from "./estudiante";
import { DiaConAsignaturas } from "./types";

/**
 *
 * Clase Horario.
 * Objeto valor.
 * 
 * Representa información relacionada con la unión entre 
 * objetos de las clases Estudiante y Asignatura.
 * 
 * */

export class Horario{
    private estudiante: Estudiante;
    private asignaturas: DiaConAsignaturas[];

    constructor(estudiante: Estudiante){
        this.estudiante = estudiante;

        // Las asignaturas matriculadas por el estudiante se deben añadir.
        this.asignaturas = [];
    }



    


}