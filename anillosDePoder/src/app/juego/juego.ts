import { Component, OnInit } from '@angular/core';
import { JuegoService } from '../services/juego-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css',
})
export class JuegoComponent implements OnInit {
  partidaActual: any = null;
  preguntaActual: any = null;
  preguntasJugadas: number[] = [];
  juegoFinalizado: boolean = false;
  mensajeFinal: string = '';
  private TOTAL_PREGUNTAS_BBDD = 15;

  constructor(private juegoService: JuegoService) {}

  ngOnInit(): void {
    this.empezarNuevaPartida();
  }

  empezarNuevaPartida(): void {
    this.juegoFinalizado = false;
    this.mensajeFinal = '';
    this.preguntasJugadas = [];
    this.preguntaActual = null;

    this.juegoService.empezarPartida().subscribe({
      next: (partida) => {
        this.partidaActual = partida;
        this.cargarNuevaPregunta();
      },
      error: (err) => console.error('Error al iniciar partida', err),
    });
  }

  cargarNuevaPregunta(): void {
    let idAleatorio = this.generarIdPreguntaUnico();

    if (idAleatorio === -1) {
      console.error('No quedan más preguntas disponibles');
      return;
    }

    this.juegoService.obtenerPregunta(idAleatorio).subscribe({
      next: (pregunta) => {
        this.preguntaActual = pregunta;
        this.preguntasJugadas.push(pregunta.id);
      },
      error: (err) => console.error('Error al obtener pregunta', err),
    });
  }

  responder(respuestaUsuario: number): void {
    if (!this.preguntaActual || !this.partidaActual) return;

    this.juegoService.comprobarRespuesta(this.preguntaActual.id, respuestaUsuario).subscribe({
      next: (esCorrecta) => {
        if (esCorrecta) {
          this.juegoService
            .actualizarCorrecta(this.partidaActual.id)
            .subscribe((partidaActualizada) => {
              this.partidaActual = partidaActualizada;

              if (this.partidaActual.puntuacion >= 5) {
                this.gestionarFinDeJuego(true);
              } else {
                this.cargarNuevaPregunta();
              }
            });
        } else {
          this.gestionarFinDeJuego(false);
        }
      },
      error: (err) => console.error('Error al comprobar respuesta', err),
    });
  }

  private gestionarFinDeJuego(esVictoria: boolean): void {
    this.juegoFinalizado = true;
    this.preguntaActual = null;

    this.juegoService.finalizarPartida(this.partidaActual.id).subscribe(() => {
      if (esVictoria) {
        this.mensajeFinal = '¡Has ganado! Eres un verdadero fan del Señor de los Anillos.';
        this.guardarEstadisticasLocales('victoria');
      } else {
        this.mensajeFinal = '¡Has perdido! Toca repasar los libros y las películas...';
        this.guardarEstadisticasLocales('derrota');
      }
    });
  }

  private generarIdPreguntaUnico(): number {
    if (this.preguntasJugadas.length >= this.TOTAL_PREGUNTAS_BBDD) return -1;

    let idGenerado: number;
    do {
      idGenerado = Math.floor(Math.random() * this.TOTAL_PREGUNTAS_BBDD) + 1;
    } while (this.preguntasJugadas.includes(idGenerado));

    return idGenerado;
  }

  private guardarEstadisticasLocales(resultado: 'victoria' | 'derrota'): void {
    let stats = JSON.parse(
      localStorage.getItem('estadisticasESDLA') || '{"jugadas": 0, "victorias": 0, "derrotas": 0}',
    );

    stats.jugadas += 1;
    if (resultado === 'victoria') {
      stats.victorias += 1;
    } else {
      stats.derrotas += 1;
    }

    localStorage.setItem('estadisticasESDLA', JSON.stringify(stats));
  }
}
