import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieCreateComponent } from './pages/movie-create/movie-create.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'list',component:MoviesListComponent},
    {path:'movies/:movieName',component:MovieDetailsComponent},
    {path:'create',component:MovieCreateComponent},
];
