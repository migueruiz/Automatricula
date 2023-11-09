import { Asignatura } from './asignatura';

export type Dia = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes";
export type InicioFin = [Date, Date];
export type HorarioAsignatura = Array<[Dia, InicioFin[]]>;

/**
 * 
 * Clase Curso.
 * 
 * Entidad.
 */
export class Curso{
    
    private nombre: string;
    private asignaturas: Asignatura[];

}