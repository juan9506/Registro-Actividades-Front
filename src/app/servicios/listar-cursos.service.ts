import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Curso } from '../modelos/curso';
import { Api } from '../api-url';

@Injectable({
  providedIn: 'root'
})
export class ListarCursosService {

  constructor(private httpCliente: HttpClient, private api: Api) { }

   obtenerDatos(): Observable<Curso[]>{
     return this.httpCliente.get<Curso[]>(this.api.getUrl() + 'listarCursos');
   }
}
