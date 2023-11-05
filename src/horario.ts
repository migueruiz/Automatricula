import { Asignatura } from './asignatura';

export interface Horario{

    private asignaturas: Asignatura[];

}

function compruebaSolapamientos(asignaturas: Asignatura[]): Asignatura[]{

    const asignaturas_solapadas: Asignatura[] = [];

    // Comprueba si hay solapamientos en el horario y 
    // devuelve un array con las asignaturas que se solapan.
    return asignaturas_solapadas;
    
}

function generaHorario(asignaturas: Asignatura[]): Asignatura[]{

    const horario: Asignatura[] = [];

    // Comprueba si existen solapamientos en el horario.
    if (compruebaSolapamientos(asignaturas).length > 0){
        
        // Reorganiza el horario.
    }

    return horario;
}







