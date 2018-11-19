import { Component, OnInit } from '@angular/core';
import { ListarGruposService } from '../servicios/listar-grupos.service';
import * as $ from 'jquery';
import { Actividad } from '../modelos/actividad';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  actividad: Actividad;
  idGrupo: number;

  grupos = [];
  constructor(private servicioGrupos: ListarGruposService) { 
    servicioGrupos.listarGrupos().subscribe(data =>{
      this.grupos = data;
    })
  }

  ngOnInit() {
  }

  registrarGrupo = function(grupo: number){
    this.idGrupo = grupo;
  }

  agregarActividad = function(){
    var nombre = $("#ModalAgregar").find('.modal-body #nombre').val();
    var descripcion = $("#ModalAgregar").find('.modal-body #descripcion').val();
    var estado = 'Activa';
    var tipo = $("#ModalAgregar").find('.modal-body #tipo').val();
    var horas = $("#ModalAgregar").find('.modal-body #horas').val();
    
    this.servicioGrupos.crearActividad(this.actividad, Math.floor(Math.random() * (10000 + 1) + 100), this.idGrupo, nombre, descripcion, estado, horas, tipo).subscribe();
    this.id = this.id + 1;
  }
}
