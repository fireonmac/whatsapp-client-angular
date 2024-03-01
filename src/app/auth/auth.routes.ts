import { Route } from '@angular/router';
import { AuthRouterComponent } from './router.component';

const authRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.component'),
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.component'),
  },
];

const routes: Route[] = [
  {
    path: '',
    component: AuthRouterComponent,
    children: authRoutes,
  },
];

export default routes;
