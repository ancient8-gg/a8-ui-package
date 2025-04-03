
import { describe, it, expect } from 'vitest';

import { cn } from '@/utils';

describe('cn', () => {
    it('cn should combine classes correctly', () => {
        expect(cn('text-lg', 'text-center')).toBe('text-lg text-center');
    });

    it('cn should merge conflicting classes', () => {
        expect(cn('text-lg', 'text-lg', 'text-center')).toBe('text-lg text-center');
    });
})
