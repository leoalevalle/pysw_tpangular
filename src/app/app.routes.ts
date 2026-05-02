import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/header',
        pathMatch: 'full'
    },
    {
        path: 'header',
        loadComponent: () => import('./components/header/header').then(m => m.Header)
    }
];
