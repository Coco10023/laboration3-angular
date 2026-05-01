import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConverterComponent } from './pages/converter/converter.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'converter', component: ConverterComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];