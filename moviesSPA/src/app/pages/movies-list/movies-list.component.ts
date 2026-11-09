import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieServiceService } from '../../services/movie-service.service';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {
  constructor(public movieService: MovieServiceService) {}
}
