import { describe, it, expect } from 'vitest';

import { formatInputNumber } from '@/utils';

describe('formatInputNumber', () => {
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
});



