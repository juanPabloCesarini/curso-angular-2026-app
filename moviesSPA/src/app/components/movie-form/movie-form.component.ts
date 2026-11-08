import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css',
})
export class MovieFormComponent {
  movieForm: FormGroup;
  nameForm: FormControl;
  durationForm: FormControl;
  directorForm: FormControl;

  constructor() {
    this.nameForm = new FormControl('', Validators.required);
    this.durationForm = new FormControl('', [
      Validators.required,
      Validators.max(300),
    ]);
    this.directorForm = new FormControl('');
    this.movieForm = new FormGroup({
      name: this.nameForm,
      duration: this.durationForm,
      director: this.directorForm,
    });
  }

  handleSubmit(): void {
    console.log('Form submitted:', this.movieForm.value);
    this.movieForm.reset();
  }
}
