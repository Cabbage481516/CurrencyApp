import { TestBed } from '@angular/core/testing';

import { CurrencyStoreService } from './currency-store.service';

describe('CurrencyStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyStoreService = TestBed.get(CurrencyStoreService);
    expect(service).toBeTruthy();
  });
});
