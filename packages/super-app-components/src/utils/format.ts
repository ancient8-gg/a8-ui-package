import { MAX_DECIMAL_FRACTION_DIGITS, MAX_DECIMAL_INTEGER_DIGITS, MAX_INTEGER_DIGITS } from "@/constants/number"

/**
 * Formats a given numeric value into a localized string representation.
 * 
 * The function ensures that the number is within allowable integer digit limits
 * and formats it according to specified maximum fraction digits.
 *
 * @param value - The numeric value to format.
 * @param maximumIntegerDigits - Optional. The maximum number of integer digits 
 * allowed. If not provided, a default is used based on whether the number is 
 * a float or integer.
 * @param maximumFractionDigits - Optional. The maximum number of fractional 
 * digits allowed. Defaults to MAX_DECIMAL_FRACTION_DIGITS.
 * 
 * @throws Will throw an error if the value exceeds the maximum allowed based 
 * on the specified or default maximum integer digits.
 * 
 * @returns A string representing the formatted number.
 */

export function formatInputNumber(value: number, maximumIntegerDigits?: number, maximumFractionDigits = MAX_DECIMAL_FRACTION_DIGITS): string {
    const isFloat = value % 1 !== 0
    const maxIntDigits = maximumIntegerDigits ?? (isFloat ? MAX_DECIMAL_INTEGER_DIGITS : MAX_INTEGER_DIGITS);
    const maxValue = Math.pow(10, maxIntDigits);

    if (value >= maxValue) {
        throw Error('Value is too large');
    }

    return value.toLocaleString('en-US', {
        maximumFractionDigits: isFloat ? maximumFractionDigits : 0,
    });
}

/**
 * Formats a given numeric value into a price string with optional currency symbol or unit.
 * 
 * @param value - The numeric value to be formatted.
 * @param useSymbol - Flag to determine if the currency symbol should be used (default is true).
 * @param symbol - The currency symbol to prepend if useSymbol is true (default is '$').
 * @param currencyUnit - Optional currency unit to append if useSymbol is false.
 * @returns The formatted price string.
 */

export function formatPricing(value: number, useSymbol = true, symbol = '$', currencyUnit = ''): string {
    const formattedValue = formatInputNumber(value)

    if (useSymbol) {
        return `${symbol}${formattedValue}`;
    }

    return currencyUnit ? `${formattedValue} ${currencyUnit}` : formattedValue;
}



export function formatNumber(value: number, maximumFractionDigits = 3) {
    return value.toLocaleString('en-US', {
        maximumFractionDigits,
    })
}
