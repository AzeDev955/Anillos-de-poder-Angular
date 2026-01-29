import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarPopup } from './confirmar-popup';

describe('ConfirmarPopup', () => {
  let component: ConfirmarPopup;
  let fixture: ComponentFixture<ConfirmarPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarPopup);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
