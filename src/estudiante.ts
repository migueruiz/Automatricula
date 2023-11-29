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

    public comprobarCompatibilidadHorario(): AsigGrup[] {
        let comprobadoHorario = true;
        this.asignaturas_matriculadas.forEach(asigGrup => {
            this.asignaturas_matriculadas.forEach(asigGrup2 => {
                if (asigGrup != asigGrup2){
                    if (this.get_diaAsignatura(asigGrup) == this.get_diaAsignatura(asigGrup2)) {
                        comprobadoHorario = this.comprobarHora(this.get_horaInicioAsignatura(asigGrup), this.get_horaInicioAsignatura(asigGrup2), this.get_horaFinAsignatura(asigGrup), this.get_horaFinAsignatura(asigGrup2));

                        if (!comprobadoHorario) {
                            this.asignaturas_solapadas.push(asigGrup);
                            this.asignaturas_solapadas.push(asigGrup2);
                        }
                    }
                }
            });
        });
        return this.asignaturas_solapadas;
    }

    private comprobarHora(date1inicio: Date, date2inicio: Date, date1final: Date, date2final: Date): boolean {
        if (date1inicio.getHours() < date2final.getHours() && date1final.getHours() >= date2inicio.getHours()) {
            return false;
        }
        else if (date1final.getHours() > date2inicio.getHours() && date1final.getHours() <= date2final.getHours()) {
            return false;
        }
        else if (date1inicio.getHours() == date2inicio.getHours() && date1final.getHours() == date2final.getHours()) {
            return false;
        }
        else if (date1inicio.getHours() == date2inicio.getHours() && date1final.getHours() > date2final.getHours()) {
            return false;
        }
        else if ( date1inicio.getHours() < date2inicio.getHours() && date1final.getHours() == date2final.getHours()) {
            return false;
        }
        else if (date1inicio.getHours() < date2inicio.getHours() && date1final.getHours() > date2final.getHours()) {
            return false;
        }

        return true;
    }

    private get_diaAsignatura(asigGrup: AsigGrup): string {
        return asigGrup.grupo.dia;
    }

    private get_horaInicioAsignatura(asigGrup: AsigGrup): Date {
        return asigGrup.grupo.horario[0];
    }

    private get_horaFinAsignatura(asigGrup: AsigGrup): Date {
        return asigGrup.grupo.horario[0];
    }
}
