import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCalculationComponent } from './currency-calculation.component';

describe('CurrencyCalculationComponent', () => {
  let component: CurrencyCalculationComponent;
  let fixture: ComponentFixture<CurrencyCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
