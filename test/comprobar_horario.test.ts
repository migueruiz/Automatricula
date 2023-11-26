import { Asignatura } from "../src/asignatura";
import { Estudiante } from "../src/estudiante";
import { describe, expect, it } from "@jest/globals";

describe("Comprobar horario", () => {
    it("Comprobar horario que no se solapa", () => {
        // Creación de asignaturas
        const asignatura1 = new Asignatura("FFT");
        const asignatura2 = new Asignatura("SO");
        const asignatura3 = new Asignatura("SCD");

        // Creación de InicioFin
        const inicioFin1 = [new Date('2023-11-20T11:30:00'), new Date('2023-11-20T13:30:00')];
        
        // Creación de grupos 
        const grupo1 = {
            nombre: "Grupo A",
            dia : "Miércoles",
            horario: [inicioFin1]
        };

        const grupo2 = {
            nombre: "Grupo B",
            dia: "Jueves",
            horario: [inicioFin1]
        };
        const grupo3 = {
            nombre: "Grupo B",
            dia: "Miércoles",
            horario: [inicioFin1]
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
        const inicioFin1 = [new Date('2023-11-20T11:30:00'), new Date('2023-11-20T13:30:00')];
        const inicioFin2 = [new Date('2023-11-20T15:30:00'), new Date('2023-11-20T17:30:00')];
        
        // Creación de grupos 
        const grupo1 = {
            nombre: "Grupo A",
            dia : "Miércoles"  ,
            horario: [inicioFin1]
        };
        const grupo2 = {
            nombre: "Grupo B",
            dia : "Jueves"  ,
            horario: [inicioFin1]   
        };
        const grupo3 = {
            nombre: "Grupo B",
            dia : "Miércoles"  ,
            horario: [inicioFin2]
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
