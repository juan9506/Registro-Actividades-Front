import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';

import { Api } from '../api-url';
import { Actividad } from '../modelos/actividad';

@Injectable({
  providedIn: 'root'
})
export class ListarActividadesService {

  constructor(private httpCliente: HttpClient, private api: Api) { }

  listarActividades(): Observable<Actividad[]>{
    return this.httpCliente.get<Actividad[]>(this.api.getUrl() + 'listarActividades');
  }

  actualizarActividad(actividad: Actividad){
    return this.httpCliente.put<Actividad>(this.api.getUrl() + "actualizarActividad/" + actividad.nombre + "/" + actividad.id + "/" + 
    actividad.descripcion + "/" + actividad.estado + "/" + actividad.horas_empleadas + "/" + actividad.fecha_culminacion + "/" + actividad.tipo, actividad);
  }

  eliminarActividad(id: number){
    return this.httpCliente.delete(this.api.getUrl() + "eliminarActividad/" + id);
  }
}
