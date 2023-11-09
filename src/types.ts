import { Asignatura } from './asignatura';

export type Dia = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes";
export type InicioFin = [Date, Date];
export type HorarioAsignatura = Array<[Dia, InicioFin[]]>;

export type Grupo = {
    nombre: string;
    horario: HorarioAsignatura;
};

export type AsignaturaConGrupos = {
    asignatura: Asignatura;
    grupos: Grupo[];
};