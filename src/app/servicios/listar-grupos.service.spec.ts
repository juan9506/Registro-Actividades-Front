import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ListarGruposService } from './listar-grupos.service';

describe('ListarGruposService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: ListarGruposService = TestBed.get(ListarGruposService);
    expect(service).toBeTruthy();
  });

  /*it('should get the groups list', () =>{
    const fixture = TestBed.createComponent(ListarGruposService);
    const servicioGrupos = fixture.debugElement.componentInstance;
    expect(servicioGrupos).toBeGreaterThan(1);
  });*/
});
