import { describe, it, expect } from 'vitest';

import { cn, formatInputNumber, formatPricing } from 'utils';

describe('Utility functions', () => {
    it('formatInputNumber should format integers correctly', () => {
        expect(formatInputNumber(1234)).toBe('1,234');
    });

    it('formatInputNumber should format floats correctly', () => {
        expect(formatInputNumber(1234.567, 5, 2)).toBe('1,234.57');
    });

    it('formatInputNumber should throw for large values', () => {
        expect(() => formatInputNumber(Math.pow(10, 20))).toThrow('Value is too large');
    });

    it('formatInputNumber should format with maximum digits correctly', () => {
        expect(formatInputNumber(99999, 5)).toBe('99,999');
    });

    it('formatPrice should format with symbol by default', () => {
        expect(formatPricing(1234.56)).toBe('$1,234.56');
    });

    it('formatPrice should format with currency unit when symbol is false', () => {
        expect(formatPricing(1234.56, false, '', 'USD')).toBe('1,234.56 USD');
    });

    it('formatPrice should format with large numbers correctly', () => {
        expect(formatPricing(999999.99, true, '$', 'USD')).toBe('$999,999.99');
    });

    it('cn should combine classes correctly', () => {
        expect(cn('text-lg', 'text-center')).toBe('text-lg text-center');
    });

    it('cn should merge conflicting classes', () => {
        expect(cn('text-lg', 'text-lg', 'text-center')).toBe('text-lg text-center');
    });
});
