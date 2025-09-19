import { Component } from '@angular/core';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

@Component({
  selector: 'app-root',
  imports: [MoviesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
