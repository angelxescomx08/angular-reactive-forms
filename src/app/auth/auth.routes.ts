import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register-page/register-page.component').then(
            (m) => m.RegisterPageComponent
          ),
      },
      {
        path: "**",
        redirectTo: "register"
      }
    ],
  },
];
