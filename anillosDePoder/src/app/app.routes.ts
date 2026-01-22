import { Routes } from '@angular/router';
import { Detalle } from './anillo/detalle/detalle';
import { Busqueda } from './anillo/busqueda/busqueda';
import { DetalleRaza } from './raza/detalle-raza/detalle-raza';
import { Busqueda2 } from './raza/busqueda/busqueda';
import { BuscarPersonaje } from './personajes/buscar-personaje/buscar-personaje';

export const routes: Routes = [
  { path: 'buscar-anillo', component: Busqueda },
  { path: 'crear-anillo', component: Detalle },
  { path: 'explorar-razas', component: Busqueda2 },
  { path: 'crear-raza', component: DetalleRaza },
  { path: 'personajes', component: BuscarPersonaje },
  { path: '', redirectTo: 'buscar-anillo', pathMatch: 'full' },
];
