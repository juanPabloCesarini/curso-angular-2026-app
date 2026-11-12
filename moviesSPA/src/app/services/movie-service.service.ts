import { Injectable } from '@angular/core';
import Movie from '../models/Movies';

@Injectable({
  providedIn: 'root',
})
export class MovieServiceService {
  movies:Movie[] = [];
  constructor() {
    this.movies = [
      {
        name: 'The Shawshank Redemption',
        duration: 142,
        director: 'Frank Darabont',
      },
      {
        name: 'The Godfather',
        duration: 175,
        director: 'Francis Ford Coppola',
      },
      {
        name: 'The Dark Knight',
        duration: 152,
        director: 'Christopher Nolan',
      },
      {
        name: 'Pulp Fiction',
        duration: 154,
        director: 'Quentin Tarantino',
      }
    ];
  }

  addMovie(movie: Movie): void {
    this.movies.push(movie);
  } 

  getMovie(name: string): Movie | undefined {
    return this.movies.find(movie => movie.name === name);
  }
}
