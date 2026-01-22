import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

// Módulos de PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

// Importamos tus datos e interfaz
import { RAZAS } from '../../clases/razas';
import { Raza } from '../../interfaces/raza';

@Component({
  selector: 'app-busqueda-raza',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, InputTextModule, ButtonModule, TableModule],
  templateUrl: './busqueda.html',
  styleUrl: './busqueda.css',
})
export class Busqueda2 {
  todasLasRazas: Raza[] = RAZAS;

  razasFiltradas: Raza[] = RAZAS;

  campoBusqueda: string = '';

  buscar() {
    const texto = this.campoBusqueda.toLowerCase();

    this.razasFiltradas = this.todasLasRazas.filter(
      (r) =>
        r.nombre.toLowerCase().includes(texto) ||
        r.regionPrincipal.toLowerCase().includes(texto) ||
        r.longevidad.toLowerCase().includes(texto) ||
        r.descripcion.toLowerCase().includes(texto),
    );
  }
}
