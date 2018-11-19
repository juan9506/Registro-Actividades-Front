import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { ListarActividadesService } from '../servicios/listar-actividades.service';
import { Actividad } from '../modelos/actividad';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  actividades = [];
  actividad: Actividad;
  servicioActividades: ListarActividadesService;

  constructor(private servicio: ListarActividadesService) {
    servicio.listarActividades().subscribe(data =>{
      this.actividades = data;
    })
   }

  ngOnInit() {
  }

  fillModal = function(actividad: Actividad, grupo: string, disable: boolean){
    this.actividad = actividad;
    $("#detalles").find('.modal-title').text(actividad.nombre);
    $("#detalles").find('.modal-body #nombre').val(actividad.nombre);
    $("#detalles").find('.modal-body #curso').val(grupo);
    $("#detalles").find('.modal-body #creacion').val(actividad.fecha_creacion);
    $("#detalles").find('.modal-body #culminacion').val(actividad.fecha_culminacion);
    $('#detalles').find(".modal-body #tipo option[value='" + actividad.tipo + "']").prop('selected', true);
    $('#detalles').find(".modal-body #estado option[value='" + actividad.estado + "']").prop('selected', true);
    $("#detalles").find('.modal-body #horas').val(actividad.horas_empleadas);
    $("#detalles").find('.modal-body #descripcion').val(actividad.descripcion);

    if(disable){
      this.disableFields(true);
    }else{
      this.disableFields(false);
    }
  }

  disableFields = function(deshabilitar: boolean){
    $("#detalles").find('.modal-body #nombre').attr('readonly', deshabilitar);
    $("#detalles").find('.modal-body #curso').attr('readonly', deshabilitar);
    $("#detalles").find('.modal-body #creacion').attr('readonly', deshabilitar);
    $("#detalles").find('.modal-body #culminacion').attr('readonly', deshabilitar);
    $("#detalles").find('.modal-body #tipo').prop('disabled', deshabilitar);
    $("#detalles").find('.modal-body #estado').prop('disabled', deshabilitar);
    $("#detalles").find('.modal-body #horas').attr('readonly', deshabilitar);
    $("#detalles").find('.modal-body #descripcion').attr('readonly', deshabilitar);

    if(deshabilitar){
      $("#detalles").find('.modal-footer #guardar').hide();
    }else{
      $("#detalles").find('.modal-footer #guardar').show();
    }

  }

  actualizarActividad = function(){
    this.actividad.nombre = $("#detalles").find('.modal-body #nombre').val();
    this.actividad.descripcion = $("#detalles").find('.modal-body #descripcion').val();
    this.actividad.tipo = $("#detalles").find('.modal-body #tipo').val();
    this.actividad.estado = $("#detalles").find('.modal-body #estado').val();
    this.actividad.horas_empleadas = $("#detalles").find('.modal-body #horas').val();
    this.actividad.fecha_culminacion = $("#detalles").find('.modal-body #culminacion').val();
    this.servicio.actualizarActividad(this.actividad).subscribe();
  }

  eliminarActividad = function(id: number){
    this.servicio.eliminarActividad(id).subscribe();
    
    for(var i = 0; i < this.actividades.length; i++){
      if(this.actividades[i].id == id){
        var index = this.actividades.findIndex(x => x.id==id);
        this.actividades.splice(index,1);
      }
    }
  }
}
