import { Routes } from '@angular/router';
import { NobelListComponent } from './components/nobel-list/nobel-list.component';

export const routes: Routes = [
  { path: '', component: NobelListComponent },
  { path: '**', redirectTo: '' }
];
