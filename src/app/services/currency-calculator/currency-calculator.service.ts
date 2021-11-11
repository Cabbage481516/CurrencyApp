import { Calculation } from '../../models/calculation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyCalculatorService {

  constructor() { }

  calculate(calculation: Calculation) {
    calculation.result = calculation.amount * calculation.calculateTo.course;
  }
}
