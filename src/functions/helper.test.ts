import { describe, expect, test } from "vitest";
import { randomElement, randomNumber } from "./helper";

describe("testing randomElement function", () => {
  test("test making random element", () => {
    const array = [1, 2, 3, 4, 5];
    const element = randomElement(array);
    expect(array).toContain(element);
  });
});

describe("testing randomNumber function", () => {
  test("test making random number", () => {
    const min = 1;
    const max = 5;
    const number = randomNumber(min, max);
    expect(number).toBeGreaterThanOrEqual(min);
    expect(number).toBeLessThanOrEqual(max);
  });
});
