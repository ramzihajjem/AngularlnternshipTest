import { Routes} from '@angular/router'; // CLI imports router
import {ListComponent} from './list/list.component';
import{FavorisComponent} from './favoris/favoris.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ListComponent },
    { path: 'favorits', component: FavorisComponent },
  ];