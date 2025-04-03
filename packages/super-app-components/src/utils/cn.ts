import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

/**
 * A utility function to conditionally concatenate class names.
 * 
 * @param classes - A variable number of arguments, each of which can be a string,
 * null, undefined, or false. The strings are concatenated, and the other values
 * are ignored.
 * 
 * @returns The concatenated string of class names.
 */
export function cn(...classes: ClassValue[]): string {
    return twMerge(clsx(...classes));
}
