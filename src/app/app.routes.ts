import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { HistorialComponent } from './components/historial/historial.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Página de inicio',
  },
  {
    path: 'historial',
    component: HistorialComponent,
    title: 'Historial',
  },
];
