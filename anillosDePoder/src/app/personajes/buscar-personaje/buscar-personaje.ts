import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PersonajesService, PersonajeDTO } from '../../services/personajes';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-buscar-personaje',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TableModule,
    ButtonModule,
    ProgressBarModule,
    ToastModule,
    ConfirmPopupModule,
  ],

  providers: [ConfirmationService, MessageService],
  templateUrl: './buscar-personaje.html',
  styleUrl: './buscar-personaje.css',
})
export class BuscarPersonaje implements OnInit {
  personajes: PersonajeDTO[] = [];
  error = '';

  constructor(
    private personajeService: PersonajesService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.personajeService.getAllPersonajes().subscribe({
      next: (data) => {
        this.personajes = data;
      },
      error: (err) => {
        this.error = 'Error al cargar personajes';
        console.error(err);
      },
    });
  }

  confirmarBajaFisica(event: Event, id: number) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Se va a borrar de forma definitiva el registro ¿Estás seguro que deseas borrarlo?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Cancelar',
      acceptButtonStyleClass: 'p-button-danger',
      accept: () => {
        this.personajeService.bajaFisica(id).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Eliminado',
              detail: 'Personaje eliminado físicamente',
            });
            this.cargarPersonajes();
          },
          error: (err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'No se puede borrar ese personaje porque es portador (o error del servidor).',
            });
          },
        });
      },
      reject: () => {},
    });
  }

  confirmarBajaLogica(event: Event, personaje: PersonajeDTO) {
    const estaDadoDeBaja = !!personaje.fechaBaja;

    const mensaje = estaDadoDeBaja
      ? '¿Deseas reactivar el personaje?'
      : 'Se va a dar de baja el personaje ¿Estás seguro?';

    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: mensaje,
      icon: 'pi pi-info-circle',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Cancelar',
      accept: () => {
        if (estaDadoDeBaja) {
          this.personajeService.reactivar(personaje.id).subscribe({
            next: () => {
              this.messageService.add({
                severity: 'success',
                summary: 'Reactivado',
                detail: 'Personaje reactivado correctamente',
              });
              this.cargarPersonajes();
            },
            error: () => this.mostrarErrorGenerico(),
          });
        } else {
          this.personajeService.bajaLogica(personaje.id).subscribe({
            next: () => {
              this.messageService.add({
                severity: 'success',
                summary: 'Baja Lógica',
                detail: 'Se ha dado de baja correctamente.',
              });
              this.cargarPersonajes();
            },
            error: () => this.mostrarErrorGenerico(),
          });
        }
      },
    });
  }

  mostrarErrorGenerico() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Ocurrió un error al procesar la solicitud',
    });
  }
}
