import { Component } from '@angular/core';
import { MovieFormComponent } from '../../components/movie-form/movie-form.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-movie-create',
  standalone: true,
  imports: [HeaderComponent, MovieFormComponent],
  templateUrl: './movie-create.component.html',
  styleUrl: './movie-create.component.css'
})
export class MovieCreateComponent {

}
