import { Asignatura } from "./asignatura";
import { Dia, Hora } from "./types";

/**
 * 
 * Interfaces AsignaturaConHorario y Grupo.
 * Agregado.
 * 
 * Representan el horario de las asignaturas que se imparten en un grupo
 * perteneciente a un curso y el propio grupo, respectivamente.
 */

interface AsignaturaConHorario extends Asignatura{
    horario: Array<[Dia, Hora[]]>;
}

export interface Grupo{
    nombre: string;
    asignaturas: AsignaturaConHorario[];
}

/**
 * 
 * Clase Curso
 * Entidad.
 * 
 * Identifica cada curso disponible en el grado.
 */

export class Curso{
    private nombre: string;
    private grupos: Grupo[];

    // Un curso se puede crear sin tener grupos.
    // Los grupos se pueden añadir posteriormente.
    constructor(nombre: string){
        this.nombre = nombre;
        this.grupos = [];
    }
}