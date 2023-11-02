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

