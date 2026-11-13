import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesListComponent } from './pages/movies-list/movies-list.component';
import { MovieCreateComponent } from './pages/movie-create/movie-create.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UserFormComponent } from './pages/user-form/user-form.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'list',component:MoviesListComponent},
    {path:'movies/:movieName',component:MovieDetailsComponent},
    {path:'create',component:MovieCreateComponent},
    {path:'users',component:UserListComponent},
    {path:'user-detail/:id',component:UserDetailComponent},
    {path:'users/create',component:UserFormComponent}
];
