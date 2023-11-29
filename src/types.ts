import { Asignatura } from './asignatura';

export type Dia = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes";
export type InicioFin = [Date, Date];

export type Grupo = {
    nombre: string;
    dia: Dia;
    horario: InicioFin;
};

export type AsignaturaConGrupos = {
    asignatura: Asignatura;
    grupos: Grupo[];
};

export type AsigGrup = {
    asignatura: Asignatura;
    grupo: Grupo;
};
