import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app').then((c) => c.App),
    title: 'Smart Grocery Assistant - AI-Powered Shopping Lists',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
