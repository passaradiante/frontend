import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraOcultaComponent } from './barra-oculta.component';

describe('BarraOcultaComponent', () => {
  let component: BarraOcultaComponent;
  let fixture: ComponentFixture<BarraOcultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraOcultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraOcultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
