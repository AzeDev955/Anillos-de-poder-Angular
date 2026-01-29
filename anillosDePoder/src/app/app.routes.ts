import { Routes } from '@angular/router';
import { Detalle } from './anillo/detalle/detalle';
import { Busqueda } from './anillo/busqueda/busqueda';
import { DetalleRaza } from './raza/detalle-raza/detalle-raza';
import { Busqueda2 } from './raza/busqueda/busqueda';
import { BuscarPersonaje } from './personajes/buscar-personaje/buscar-personaje';
import { EditarPersonajeComponent } from './personajes/editar-personaje/editar-personaje';
import { Padre } from './modales/padre/padre';

export const routes: Routes = [
  { path: 'buscar-anillo', component: Busqueda },
  { path: 'crear-anillo', component: Detalle },
  { path: 'explorar-razas', component: Busqueda2 },
  { path: 'crear-raza', component: DetalleRaza },
  { path: 'personajes', component: BuscarPersonaje },
  { path: 'personajes/nuevo', component: EditarPersonajeComponent },
  { path: 'personajes/editar/:id', component: EditarPersonajeComponent },
  { path: 'padre', component: Padre },
  { path: '', redirectTo: 'buscar-anillo', pathMatch: 'full' },
];
