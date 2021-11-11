import { Component, OnDestroy, OnInit } from '@angular/core';
import { Calculation } from 'src/app/models/calculation';
import { Currency } from 'src/app/models/currency';
import { CurrencyCalculatorService } from 'src/app/services/currency-calculator/currency-calculator.service';
import { CurrencyStoreService } from 'src/app/services/currency-store/currency-store.service';

@Component({
  selector: 'app-currency-calculation',
  templateUrl: './currency-calculation.component.html',
  styleUrls: ['./currency-calculation.component.sass']
})
export class CurrencyCalculationComponent implements OnInit, OnDestroy {

  public calculation: Calculation;
  public currencies: Currency[];
  public amount: number;
  public selectedCurrencyFrom: string;
  public selectedCurrencyTo: string;
  public result: number;

  constructor(private calculationService: CurrencyCalculatorService, private currencyStoreService: CurrencyStoreService) {

  }

  ngOnInit() {
    this.currencies = this.currencyStoreService.getAll();
  }

  calculate() {
    const currencyFrom = this.currencyStoreService.getCurrencyByCountryCode(this.selectedCurrencyFrom);
    const currencyTo = this.currencyStoreService.getCurrencyByCountryCode(this.selectedCurrencyTo);
    this.calculation = {amount: this.amount, calculateFrom: currencyFrom, calculateTo: currencyTo};
    debugger;
    this.calculationService.calculate(this.calculation);
    this.result = this.calculation.result;
  }

  ngOnDestroy() {

  }

}
