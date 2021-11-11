import { CurrencyStoreService } from 'src/app/services/currency-store/currency-store.service';
import { Calculation } from '../../models/calculation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyCalculatorService {

  constructor(private currencyStoreService: CurrencyStoreService) { }

  calculate(calculation: Calculation) {

    let courseFactor = 1;

    const countryCodeFrom = calculation.calculateFrom.countryCode;
    const countryCodeTo = calculation.calculateTo.countryCode;

    if (countryCodeFrom !== countryCodeTo) {
      courseFactor = this.currencyStoreService.getCourseByCountryCodes(countryCodeFrom, countryCodeTo).course;
    }

    calculation.result = calculation.amount * courseFactor;
  }
}
