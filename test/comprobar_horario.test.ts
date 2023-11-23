import { as } from "vitest/dist/reporters-5f784f42";
import { Asignatura } from "../src/asignatura";
import { Curso } from "../src/curso";
import { Estudiante } from "../src/estudiante";
import { AsignaturaConGrupos, Dia, InicioFin } from "../src/types";
import { expect, describe, it } from 'vitest';

describe("Comprobar horario", () => {
    it("Comprobar horario que no se solapa", () => {
        // Creación de asignaturas
        const asignatura1 = new Asignatura("FFT");
        const asignatura2 = new Asignatura("SO");
        const asignatura3 = new Asignatura("SCD");

        // Creación de InicioFin
        const inicioFin1: InicioFin = [new Date('2023-11-20T11:30:00'), new Date('2023-11-20T13:30:00')];
        
        // Creación de grupos 
        const grupo1 = {
            nombre: "Grupo A",
            dia : "Miércoles" as Dia,
            horario: [inicioFin1] as InicioFin[]
        };
        const grupo2 = {
            nombre: "Grupo B",
            dia : "Jueves" as Dia,
            horario: [inicioFin1] as InicioFin[]
        };
        const grupo3 = {
            nombre: "Grupo B",
            dia : "Miércoles" as Dia,
            horario: [inicioFin1] as InicioFin[],
        };

        // Creación de AsigGrup
        const asigGrup1 = { asignatura: asignatura1, grupo: grupo1 };
        const asigGrup2 = { asignatura: asignatura2, grupo: grupo2 };
        const asigGrup3 = { asignatura: asignatura3, grupo: grupo3 };
        

        // Creación de estudiantes
        const estudiante1 = new Estudiante("Pablo Barranco Torres", [asigGrup1, asigGrup2, asigGrup3], [], []);
        

        expect(estudiante1.comprobarCompatibilidadHorario()).not.toEqual([])
    });
    it("Comprobar horario que no se solapa", () => {
        // Creación de asignaturas
        const asignatura1 = new Asignatura("FFT");
        const asignatura2 = new Asignatura("SO");
        const asignatura3 = new Asignatura("SCD");

        // Creación de InicioFin
        const inicioFin1: InicioFin = [new Date('2023-11-20T11:30:00'), new Date('2023-11-20T13:30:00')];
        const inicioFin2: InicioFin = [new Date('2023-11-20T15:30:00'), new Date('2023-11-20T17:30:00')];
        
        // Creación de grupos 
        const grupo1 = {
            nombre: "Grupo A",
            dia : "Miércoles" as Dia,
            horario: [inicioFin1] as InicioFin[]
        };
        const grupo2 = {
            nombre: "Grupo B",
            dia : "Jueves" as Dia,
            horario: [inicioFin1] as InicioFin[]
        };
        const grupo3 = {
            nombre: "Grupo B",
            dia : "Miércoles" as Dia,
            horario: [inicioFin2] as InicioFin[],
        };

        // Creación de AsigGrup
        const asigGrup1 = { asignatura: asignatura1, grupo: grupo1 };
        const asigGrup2 = { asignatura: asignatura2, grupo: grupo2 };
        const asigGrup3 = { asignatura: asignatura3, grupo: grupo3 };
        

        // Creación de estudiantes
        const estudiante1 = new Estudiante("Pablo Barranco Torres", [asigGrup1, asigGrup2, asigGrup3], [], []);

        expect(estudiante1.comprobarCompatibilidadHorario()).toEqual([]);
    });  
});
