import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        title: 'Básicos',
        loadComponent: () =>
          import('./pages/basic-page/basic-page.component').then(
            (m) => m.BasicPageComponent
          ),
      },
      {
        path: 'dynamic',
        title: 'Dinámicos',
        loadComponent: () =>
          import('./pages/dynamic-page/dynamic-page.component').then(
            (m) => m.DynamicPageComponent
          ),
      },
      {
        path: 'switches',
        title: 'Switches',
        loadComponent: () =>
          import('./pages/switches-page/switches-page.component').then(
            (m) => m.SwitchesPageComponent
          ),
      },
      {
        path: "**",
        redirectTo: "basic"
      }
    ],
  },
];
