import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Grupos } from '../modelos/grupos';
import { Actividad } from '../modelos/actividad';
import { Api } from '../api-url';

@Injectable({
  providedIn: 'root'
})
export class ListarGruposService {

  constructor(private clienteHttp: HttpClient, private api: Api) { }

  listarGrupos(): Observable<Grupos[]>{
    return this.clienteHttp.get<Grupos[]>(this.api.getUrl() + 'listarGrupos/123456789');
  }

  crearActividad(actividad: Actividad, id: number, idGrupo: number, nombre: string, descripcion: string, estado: string, horas: number, tipo: string){
    return this.clienteHttp.post<Actividad>(this.api.getUrl() + "agregarActividad/" + id + "/" + idGrupo +
    "/" + nombre + "/" + descripcion + "/" + estado + "/" + horas + "/" + tipo, actividad);
  }
}
