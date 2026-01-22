import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPersonaje } from './buscar-personaje';

describe('BuscarPersonaje', () => {
  let component: BuscarPersonaje;
  let fixture: ComponentFixture<BuscarPersonaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarPersonaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarPersonaje);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
