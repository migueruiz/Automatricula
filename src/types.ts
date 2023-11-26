import { Asignatura } from './asignatura';

export type Grupo = {
    nombre: string;
    dia: string;
    horario: Date[][];
};

export type AsignaturaConGrupos = {
    asignatura: Asignatura;
    grupos: Grupo[];
};

export type AsigGrup = {
    asignatura: Asignatura;
    grupo: Grupo;
};
