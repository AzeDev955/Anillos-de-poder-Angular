import { TestBed } from '@angular/core/testing';

import { PersonajesService } from './personajes';

describe('Personajes', () => {
  let service: PersonajesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonajesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
