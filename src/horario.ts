import { Asignatura } from "./asignatura";
import { Estudiante } from "./estudiante";
import { HorarioAsignatura, DiaConAsignaturas } from "./types";

/**
 *
 * Clase Horario.
 * Objeto valor.
 * 
 * Representa información relacionada con la unión entre 
 * objetos de las clases Estudiante y Asignatura.
 * 
 * */

export class Horario{
    private estudiante: Estudiante;
    private asignaturas: Asignatura[];

    constructor(estudiante: Estudiante){
        this.estudiante = estudiante;
        this.asignaturas = estudiante.getAsignaturasMatriculadas();
    }
    
    public getHorarioCompleto(): string{
        let horario_completo: string = "";

        let horario: DiaConAsignaturas[] = [];
        this.asignaturas.forEach(asignatura => {
            let horario_asignatura: HorarioAsignatura = asignatura.getHorario();
            horario_asignatura.forEach(dia => {
                let dia_con_asignaturas: DiaConAsignaturas = {
                    dia: dia[0],
                    asignaturas: {
                        nombre: asignatura.getNombre(),
                        horas: dia[1]
                    }
                }
                horario.push(dia_con_asignaturas);
            });
        });

        horario.forEach(dia => {
            horario_completo += dia.dia + "\n";
            dia.asignaturas.horas.forEach(hora => {
                horario_completo += "\t" + dia.asignaturas.nombre + " " + hora[0] + " - " + hora[1] + "\n";
            });
        });

        return horario_completo;
        
    }





    


}