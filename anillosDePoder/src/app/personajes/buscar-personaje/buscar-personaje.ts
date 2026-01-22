import { Component, OnInit } from '@angular/core'; // Importar OnInit
import { PersonajesService } from '../../services/personajes';

@Component({
  selector: 'app-buscar-personaje',
  imports: [],
  templateUrl: './buscar-personaje.html',
  styleUrl: './buscar-personaje.css',
})
export class BuscarPersonaje implements OnInit {
  personajes: any[] = [];
  error = '';

  constructor(private buscarPersonajesService: PersonajesService) {}

  ngOnInit(): void {
    this.buscarPersonajesService.getAllPersonajes().subscribe({
      next: (data) => {
        this.personajes = data;
      },
      error: (err) => {
        this.error = 'Error al cargar personajes';
        console.error(err);
      },
    });
  }
}
