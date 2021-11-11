import { Currency } from './../../models/currency';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyStoreService {

  private currencies: Currency[];
  constructor() {
    this.currencies = [
      {countryCode: 'EUR', course: 1.15932},
      {countryCode: 'USD', course: 0.862577},
      {countryCode: 'GBP', course: 0.855865},
      {countryCode: 'CAD', course: 1.43490}
    ];
  }

  getCurrencyByCountryCode(countryCode: string) {
    return this.currencies.find(currency => currency.countryCode === countryCode);
  }

  getAll() {
    return this.currencies;
  }
}
