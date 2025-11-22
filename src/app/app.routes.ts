import { Routes } from '@angular/router';
// Pages
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
    },
    {
        path: '**',
        component: NotFound
    },

];
