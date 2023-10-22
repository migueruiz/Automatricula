export type Dia = "Lunes" | "Martes" | "Miércoles" | "Jueves" | "Viernes";

export type Hora = [string, string]; // [horaInicio, horaFin]

export type DiaConAsignaturas = {
    dia: Dia;
    asignaturas: {
        nombre: string;
        horas: Hora[];
    };
};