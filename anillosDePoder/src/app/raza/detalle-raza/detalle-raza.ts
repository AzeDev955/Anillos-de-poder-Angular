import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-detalle-raza',
  imports: [
    ReactiveFormsModule,
    SelectModule,
    InputTextModule,
    TextareaModule,
    SelectButtonModule,
    ButtonModule,
  ],
  templateUrl: './detalle-raza.html',
  styleUrl: './detalle-raza.css',
})
export class DetalleRaza {
  regiones = ['Mordor', 'Rivendel', 'La Comarca'];
  afinidades = ['Tiene', 'No tiene'];

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    longevidad: new FormControl('', [Validators.required, Validators.minLength(3)]),
    nivelCorrupcion: new FormControl(50, [Validators.required]),
    regionPrincipal: new FormControl('', [Validators.required]),
    afinidadMagica: new FormControl('', [Validators.required]),
  });

  enviar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    console.log('Raza guardada:', this.formulario.value);
    alert('Raza guardada');
  }

  limpiar() {
    this.formulario.get('nombre')?.setValue('');
    this.formulario.get('descripcion')?.setValue('');
    this.formulario.get('longevidad')?.setValue('');
    this.formulario.get('nivelCorrupcion')?.setValue(50);
    this.formulario.get('regionPrincipal')?.setValue('');
    this.formulario.get('afinidadMagica')?.setValue(null);
  }
}
