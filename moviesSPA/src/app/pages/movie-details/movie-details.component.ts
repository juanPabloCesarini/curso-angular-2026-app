import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { MovieServiceService } from '../../services/movie-service.service';
import Movie from '../../models/Movies';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent {
  selectedMovie: Movie | undefined;
  constructor(private route: ActivatedRoute,
              private movieService: MovieServiceService
  ) { 
    const movieName = this.route.snapshot.paramMap.get('movieName');
    if(movieName) {

      this.selectedMovie = this.movieService.getMovie(movieName);
    }else {
     console.error('No movie name provided in the route parameters.');
    }
  }
}
