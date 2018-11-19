export class Curso{
    id: number;
    nombre: string;
    semestre: [
       {id:number},
       {periodo: number},
       {activo: boolean}
    ];
    creditos: number;
    intensidad_horaria: number;
}