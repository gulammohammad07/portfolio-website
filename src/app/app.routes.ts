import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent) },
  { path: 'projects', loadComponent: () => import('./features/projects/projects.component').then((m) => m.ProjectsComponent) },
  { path: 'services', loadComponent: () => import('./features/services/services.component').then((m) => m.ServicesComponent) },
  { path: 'resume', loadComponent: () => import('./features/resume/resume.component').then((m) => m.ResumeComponent) },
  { path: 'contact', loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent) },
  { path: '**', loadComponent: () => import('./features/not-found/not-found.component').then((m) => m.NotFoundComponent) }
];
