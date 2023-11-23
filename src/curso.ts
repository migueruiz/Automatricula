import { AsignaturaConGrupos } from './types';

/**
 * 
 * Clase Curso.
 * 
 * Entidad.
 */
export class Curso {

    private nombre: string;
    private asignaturas: AsignaturaConGrupos[];

    constructor(nombre: string, asignaturas: AsignaturaConGrupos[]) {
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }
}