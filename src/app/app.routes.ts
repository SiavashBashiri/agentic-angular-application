import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home').then((c) => c.Home),
    title: 'Smart Grocery Assistant - AI-Powered Shopping Lists',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
