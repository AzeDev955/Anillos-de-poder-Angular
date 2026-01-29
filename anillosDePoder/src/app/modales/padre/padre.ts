import { Component } from '@angular/core';
import { ConfirmarPopup } from '../confirmar-popup/confirmar-popup';
import { ConfiguracionPopup } from '../../interfaces/configuracion-popup';

@Component({
  selector: 'app-padre',
  imports: [ConfirmarPopup],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  parametrosModal: ConfiguracionPopup = {
    message: '¿Quieres borrar el personaje?',
    severity: 'success',
    nameButton: 'Aguila putero tintin fan',
    header: 'Elver',
  };
}
