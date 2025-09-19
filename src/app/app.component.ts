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
  movies = [{
    title: 'Spider-Man',
    releaseDate: new Date(),
    price: 1400.99
  },
  {
    title: 'Moana',
    releaseDate: new Date("2016-05-03"),
    price: 300
  }]
}
