import { Component } from '@angular/core';
import { PersonajesService } from '../../services/personajes';
@Component({
  selector: 'app-buscar-personaje',
  imports: [],
  templateUrl: './buscar-personaje.html',
  styleUrl: './buscar-personaje.css',
})
export class BuscarPersonaje {
  personajes: any[] = [];
  error = '';
  constructor(private buscarPersonajesService: PersonajesService) {}
  ngO;
}
