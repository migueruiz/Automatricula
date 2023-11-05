import { Asignatura } from './asignatura';

interface Grupo{

    // Un grupo es el conjunto de asignaturas de un mismo curso.
    // Los grupos se diferencian entre sí por el horario de las asignaturas.
    nombre: string;
    asignaturas: Asignatura[];
}

export class Curso{
    
    private nombre: string;
    private grupos: Grupo[];

}