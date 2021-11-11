import { CurrencyStoreService } from 'src/app/services/currency-store/currency-store.service';
import { Calculation } from '../../models/calculation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyCalculatorService {

  constructor(private currencyStoreService: CurrencyStoreService) { }

  calculate(calculation: Calculation) {
    const courseByCountries = this.currencyStoreService.getCourseByCountryCodes(calculation.calculateFrom.countryCode, calculation.calculateTo.countryCode);
    calculation.result = calculation.amount * courseByCountries.course;
  }
}
