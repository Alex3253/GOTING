import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home/home.component').then((m) => m.Home),
  },
  {
    path: 'nosotros',
    loadComponent: () =>
      import('./pages/about/about-page/about-page.component').then((m) => m.AboutPage),
  },
  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/services/services-page/services-page.component').then((m) => m.ServicesPage),
  },
  {
    path: 'equipo',
    loadComponent: () =>
      import('./pages/team/team-page/team-page.component').then((m) => m.TeamPage),
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact-page/contact-page.component').then((m) => m.ContactPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
