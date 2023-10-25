import { Curso } from "./curso";
import { HorarioAsignatura } from "./types";

/**
 *
 * Clase Asignatura.
 * Entidad.
 * 
 * Almacena información referente a cada asignatura disponible en el grado.
 * 
 * */

export class Asignatura{
    private codigo: string;
    private nombre: string;
    private curso: Curso;
    private horario: HorarioAsignatura;

    constructor(codigo: string, nombre: string, curso: Curso, horario: HorarioAsignatura){
        this.codigo = codigo;
        this.nombre = nombre;
        this.curso = curso;
        this.horario = horario;
    }

    public getNombre(): string{
        return this.nombre;
    }

    public getCurso(): Curso{
        return this.curso;
    }

    public getCodigo(): string{
        return this.codigo;
    }

    public getHorario(): HorarioAsignatura{
        return this.horario;
    }
}