import { TestBed } from '@angular/core/testing';

import { CurrencyCalculatorService } from './currency-calculator.service';

describe('CurrencyCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyCalculatorService = TestBed.get(CurrencyCalculatorService);
    expect(service).toBeTruthy();
  });
});
