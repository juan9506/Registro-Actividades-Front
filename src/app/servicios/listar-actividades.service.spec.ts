import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ListarActividadesService } from './listar-actividades.service';

describe('ListarActividadesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: ListarActividadesService = TestBed.get(ListarActividadesService);
    expect(service).toBeTruthy();
  });
});
