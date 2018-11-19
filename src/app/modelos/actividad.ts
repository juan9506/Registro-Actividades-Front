export class Actividad{
    id: number;
    grupo: [
        {id: number},
        {num_alumnos: number},
        {docente: [
            {id: number},
            {rol: string},
            {usuario: string},
            {clave: string},
            {nombre: string},
            {telefono: number},
            {email: string}
        ]},
        {modalidad: string},
        {curso: [
            {id: number},
            {nombre: string},
            {semestre: [
                {id: number},
                {periodo: number},
                {estado: string}
            ]},
            {creditos: number},
            {intensidad_horaria: number}
        ]}
    ];
    nombre: string;
    fecha_creacion: Date;
    fecha_culminacion: String;
    descripcion: string;
    estado: string;
    horas_empleadas: number;
    tipo: string
}