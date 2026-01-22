import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-detalle',
  imports: [RouterLink, ReactiveFormsModule, InputTextModule, ButtonModule, SelectModule],
  templateUrl: './detalle.html',
  styleUrl: './detalle.css',
})
export class Detalle {
  razasOptions = ['Elfo', 'Enano', 'Humano', 'Maiar', 'Oscuro'];

  formularioAnillo = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    portador: new FormControl('', [Validators.required, Validators.minLength(3)]),
    raza: new FormControl('', [Validators.required]),
    poder: new FormControl('', [Validators.required, Validators.minLength(10)]),
    corrupcion: new FormControl(50, [Validators.required, Validators.min(0), Validators.max(100)]),
  });

  get nombre() {
    return this.formularioAnillo.get('nombre');
  }
  get portador() {
    return this.formularioAnillo.get('portador');
  }
  get raza() {
    return this.formularioAnillo.get('raza');
  }
  get poder() {
    return this.formularioAnillo.get('poder');
  }
  get corrupcion() {
    return this.formularioAnillo.get('corrupcion');
  }

  enviar() {
    if (this.formularioAnillo.invalid) {
      this.formularioAnillo.markAllAsTouched();
      return;
    }
    console.log('Anillo guardado:', this.formularioAnillo.value);
    alert('Anillo guardado correctamente');
  }
  limpiar() {
    this.nombre?.setValue('');
    this.portador?.setValue('');
    this.raza?.setValue('');
    this.poder?.setValue('');
    this.corrupcion?.setValue(50);
  }
}
