import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ListarCursosService } from './listar-cursos.service';

describe('ListarCursosService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[HttpClientModule]
  }));

  it('should be created', () => {
    const service: ListarCursosService = TestBed.get(ListarCursosService);
    expect(service).toBeTruthy();
  });
});
