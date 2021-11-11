import { Currency } from './../../models/currency';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyStoreService {

  private currencies: Currency[];
  constructor() {
    this.currencies = [
      {countryCode: 'EUR', courses: [
        {countryCode: 'USD', course: 1.1447848}, {countryCode: 'GBP', course: 0.85659423}, {countryCode: 'CAD', course: 1.4406043}
      ]},
      {countryCode: 'USD', courses: [
        {countryCode: 'EUR', course: 0.873532}, {countryCode: 'GBP', course: 0.74827314}, {countryCode: 'CAD', course: 1.2584255}
      ]},
      {countryCode: 'GBP', courses: [
        {countryCode: 'USD', course: 1.3364914}, {countryCode: 'EUR', course: 1.673972}, {countryCode: 'CAD', course: 1.6817868}
      ]},
      {countryCode: 'CAD', courses: [
        {countryCode: 'USD', course: 0.79468535}, {countryCode: 'GBP', course: 0.59462034}, {countryCode: 'EUR', course: 0.69415688}
      ]},
    ];
  }

  getCurrencyByCountryCode(countryCode: string) {
    return this.currencies.find(currency => currency.countryCode === countryCode);
  }

  getCourseByCountryCodes(countryCodeFrom: string, countryCodeTo: string) {
    return this.currencies.find(currency => currency.countryCode === countryCodeFrom)
    .courses.find(course => course.countryCode === countryCodeTo);
  }

  getAll() {
    return this.currencies;
  }
}
