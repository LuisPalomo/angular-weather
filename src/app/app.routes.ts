import { Routes } from '@angular/router';


export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./dashboard/pages/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'week',
        title: 'Week',
        loadComponent: () => import('./dashboard/pages/week/week.component').then(m => m.WeekComponent),
      },
      {
        path: 'month',
        title: 'Month',
        loadComponent: () => import('./dashboard/pages/month/month.component').then(m => m.MonthComponent),
      },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  }

];
