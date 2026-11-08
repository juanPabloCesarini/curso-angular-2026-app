import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieCreateComponent } from './pages/movie-create/movie-create.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'list',component:MoviesListComponent},
    {path:'create',component:MovieCreateComponent},
];
