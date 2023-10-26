import { Asignatura } from "./asignatura";
import { HorarioAsignatura } from "./types";

/**
 * 
 * Interfaces Grupo.
 * Agregado.
 * 
 * Representa un determinado grupo perteneciente a un curso.
 */
export interface Grupo{
    nombre: string;
    asignaturas: Asignatura[];
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

    public getNombre(): string{
        return this.nombre;
    }

    public getGrupos(): Grupo[]{
        return this.grupos;
    }

    public getGrupo(nombre_grupo: string): Grupo | undefined{
        for (const grupo of this.grupos) {
            if (grupo.nombre === nombre_grupo)
                return grupo;
        }
        return undefined;
    }

    public getNombreGrupos(): string[]{
        let nombres_grupos: string[] = [];
        this.grupos.forEach(grupo => {
            nombres_grupos.push(grupo.nombre);
        });
        return nombres_grupos;
    }
    
}