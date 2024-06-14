import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { GamingComponent } from './gaming/gaming.component';

export const routes: Routes = [
      {
        path: 'gaming',
        component: GamingComponent,
      },
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
