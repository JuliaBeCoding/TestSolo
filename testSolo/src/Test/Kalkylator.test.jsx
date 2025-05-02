import { describe, expect, test } from 'vitest';
import { addition, subtraction, multiplication, division } from '../Lib/Kalkylator';

describe('Calculator', () => {
  test('Adderar två tal', () => {
    expect(addition(2, 3)).toBe(5);
  });

  test('Subtraherar två tal', () => {
    expect(subtraction(5, 2)).toBe(3);
  });

  test('Multiplicerar två tal', () => {
    expect(multiplication(4, 3)).toBe(12);
  });

  test('Dividerar två tal', () => {
    expect(division(10, 2)).toBe(5);
  });
});