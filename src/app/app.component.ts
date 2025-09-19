import { DatePipe, UpperCasePipe, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movie = {
    title: 'Spider-Man',
    releaseDate: new Date(),
    price: 1400.99
  }
}
