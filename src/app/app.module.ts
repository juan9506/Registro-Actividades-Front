import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common'
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ListarCursosService } from './servicios/listar-cursos.service';
import { CursosComponent } from './cursos/cursos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GruposComponent } from './grupos/grupos.component';
import { ListarGruposService } from './servicios/listar-grupos.service';
import { ActividadesComponent } from './actividades/actividades.component';
import { ListarActividadesService } from './servicios/listar-actividades.service';

const routes: Route[] = [
  {path: '', component: DashboardComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'grupos', component: GruposComponent},
  {path: 'actividades', component: ActividadesComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    DashboardComponent,
    GruposComponent,
    ActividadesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ListarCursosService,
    ListarGruposService,
    ListarActividadesService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
