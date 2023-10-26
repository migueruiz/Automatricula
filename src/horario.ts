import { Asignatura } from "./asignatura";
import { Estudiante } from "./estudiante";
import { HorarioAsignatura, DiaConAsignaturas } from "./types";

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
    private asignaturas: Asignatura[];

    constructor(estudiante: Estudiante){
        this.estudiante = estudiante;
        this.asignaturas = estudiante.getAsignaturasMatriculadas();
    }

}