import { AsignaturaConGrupos } from './types';

/**
 * 
 * Clase Estudiante.
 * 
 * Entidad.
 */
export class Estudiante{
    
    private nombre: string;
    private asignaturas_matriculadas: AsignaturaConGrupos[];
    private asignaturas_solapadas: AsignaturaConGrupos[];
    private asignaturas_alternativas: AsignaturaConGrupos[];

}