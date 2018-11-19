import { Component, OnInit } from '@angular/core';
import { ListarCursosService } from '../servicios/listar-cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos = [];
  constructor(private servicio: ListarCursosService){
    servicio.obtenerDatos().subscribe(data =>{
      this.cursos = data;
    })
  }

  ngOnInit() {
  }

}
