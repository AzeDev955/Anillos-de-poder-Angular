import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importamos el módulo de la tarjeta de PrimeNG
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-estadisticas',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './estadisticas.html',
  styleUrl: './estadisticas.css',
})
export class Estadisticas implements OnInit {
  estadisticas = { jugadas: 0, victorias: 0, derrotas: 0 };

  ngOnInit(): void {
    const statsGuardadas = localStorage.getItem('estadisticasESDLA');

    if (statsGuardadas) {
      this.estadisticas = JSON.parse(statsGuardadas);
    }
  }
}
