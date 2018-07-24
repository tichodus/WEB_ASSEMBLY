import { Component } from '@angular/core';
import { CalculatorWasm } from './services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private calculatorService: CalculatorWasm){
    console.log(this.calculatorService.add(3,4));
  }
}
