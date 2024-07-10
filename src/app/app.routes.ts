import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { GamingComponent } from './gaming/gaming.component';

export const routes: Routes = [
      {
        path: 'shift',
        component: GamingComponent,
      },
      {
        path: 'superchargedferrari',
        component: LandingComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: '',
        redirectTo: 'superchargedferrari',
        pathMatch:'full'
      },
      {
        path: '**',
        redirectTo: 'superchargedferrari',
        pathMatch: 'full'
      }
];
