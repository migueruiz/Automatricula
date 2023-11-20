import { AsigGrup } from './types';

/**
 * 
 * Clase Estudiante.
 * 
 * Entidad.
 */
export class Estudiante{
    private nombre: string;
    private asignaturas_matriculadas: AsigGrup[];
    private asignaturas_solapadas: AsigGrup[];
    private asignaturas_alternativas: AsigGrup[];

    constructor(nombre: string, asignaturas_matriculadas: AsigGrup[], asignaturas_solapadas: AsigGrup[], asignaturas_alternativas: AsigGrup[]) {
        this.nombre = nombre;
        this.asignaturas_matriculadas = asignaturas_matriculadas;
        this.asignaturas_solapadas = asignaturas_solapadas;
        this.asignaturas_alternativas = asignaturas_alternativas;
    }

    public comprobarCompatibilidadHorario(): boolean {
        let comprobadoHorario = true;
        this.asignaturas_matriculadas.forEach(asigGrup => {
            this.asignaturas_matriculadas.forEach(asigGrup2 => {
                if (asigGrup.grupo.horario[0][0] == asigGrup2.grupo.horario[0][0]) {
                    comprobadoHorario = this.comprobarHora(asigGrup.grupo.horario[0][1][0][0], asigGrup2.grupo.horario[0][1][0][0], asigGrup.grupo.horario[0][1][0][1], asigGrup2.grupo.horario[0][1][0][1]);
                }
            });
        });
        return comprobadoHorario;
    }

    private comprobarHora(date1inicio: Date, date2inicio: Date, date1final: Date, date2final: Date): boolean {
        if ((date1inicio.getHours() <= date2inicio.getHours() && date1final.getHours() > date2inicio.getHours()) || (date1inicio.getHours() < date2final.getHours() && date1final.getHours() >= date2final.getHours()) || (date1inicio.getHours() >= date2inicio.getHours() && date1final.getHours() <= date2final.getHours())) {
            return false;
        }

        return true;
    }

}
