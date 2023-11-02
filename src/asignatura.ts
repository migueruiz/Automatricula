import { Curso } from "./curso";

/**
 *
 * Clase Asignatura.
 * Entidad.
 * 
 * Almacena información referente a cada asignatura.
 * 
 * */

export type Dia = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes";

export type HoraMinutos = [number, number];

export type InicioFin = [HoraMinutos, HoraMinutos];

export type HorarioAsignatura = Array<[Dia, InicioFin[]]>;

export class Asignatura{

    private nombre: string;
    private curso: Curso;

}


