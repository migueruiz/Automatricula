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

    public addGrupo(nombre_grupo: string): void{
        this.grupos.push({
            nombre: nombre_grupo,
            asignaturas: []
        });
    }

    public addAsignaturaToGrupo(asignatura: Asignatura, nombre_grupo: string): void{
        let grupo: Grupo | undefined = this.getGrupo(nombre_grupo);

        // Comprueba la existencia de 'grupo'.
        if(grupo === undefined){
            throw new Error("No existe el grupo " + nombre_grupo + " en el curso " + this.nombre);
        }
        grupo.asignaturas.push(asignatura);
    }


    public getAsignaturasFromGrupo(nombre_grupo: string): Asignatura[]{
        let grupo: Grupo | undefined = this.getGrupo(nombre_grupo);

        // Comprueba la existencia de 'grupo'.
        if(grupo === undefined){
            throw new Error("No existe el grupo " + nombre_grupo + " en el curso " + this.nombre);
        }
        return grupo.asignaturas;
    }

    public getAsignaturaFromGrupo(nombre_asignatura: string, grupo: Grupo): Asignatura | undefined{
        for (const asignatura of grupo.asignaturas) {
            if (asignatura.getNombre() === nombre_asignatura) {
                return asignatura;
            }
        }
        return undefined;
    }
    

    public getHorarioFromAsignatura(nombre_asignatura: string, grupo: Grupo): HorarioAsignatura | undefined{
        for (const asignatura of grupo.asignaturas) {
            if (asignatura.getNombre() === nombre_asignatura) {
                return asignatura.getHorario();
            }
        }
        return undefined;
    }
    
}