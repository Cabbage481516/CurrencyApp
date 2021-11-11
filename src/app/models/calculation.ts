import { Currency } from './currency';

export interface Calculation {
    amount: number;
    calculateFrom: Currency;
    calculateTo: Currency;
    result?: number;
}
