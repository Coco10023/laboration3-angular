import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; 
import { Converter } from './pages/converter/converter'; 
import { About } from './pages/about/about'; 

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'converter', component: Converter },
  { path: 'about', component: About }
];