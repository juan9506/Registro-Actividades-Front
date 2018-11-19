import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { GruposComponent } from './grupos.component';

describe('GruposComponent', () => {
  let component: GruposComponent;
  let fixture: ComponentFixture<GruposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GruposComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
