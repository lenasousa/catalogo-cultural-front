import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { BairrosComponent } from './pages/bairros/bairros.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'eventos', component: EventosComponent },
  { path: 'bairros', component: BairrosComponent },
  { path: '**', redirectTo: '' } // Rota de fallback contra URLs inválidas
];
