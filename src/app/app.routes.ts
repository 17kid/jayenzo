import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: '',
        redirectTo: 'landing',
        pathMatch:'full'
      },
      {
        path: '**',
        redirectTo: 'landing',
        pathMatch: 'full'
      }
];
