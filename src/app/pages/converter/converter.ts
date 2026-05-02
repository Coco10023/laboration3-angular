import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './converter.html',
  styleUrl: './converter.css'
})
export class Converter {
  meters = 0;
  feet = 0;
  celsius = 0;
  fahrenheit = 32;

  metersToFeet() {
    this.feet = +(this.meters * 3.28084).toFixed(2);
  }

  feetToMeters() {
    this.meters = +(this.feet / 3.28084).toFixed(2);
  }

  celsiusToFahrenheit() {
    this.fahrenheit = +((this.celsius * 9) / 5 + 32).toFixed(2);
  }

  fahrenheitToCelsius() {
    this.celsius = +(((this.fahrenheit - 32) * 5) / 9).toFixed(2);
  }
}