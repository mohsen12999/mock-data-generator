import { describe, expect, test } from "vitest";
import { convertToPersianNumber, randomElement, randomNumber } from "./helper";

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

describe("testing convertToPersianNumber function", () => {
  test("test converting number to persian number", () => {
    const number = 1234567890;
    const persianNumber = convertToPersianNumber(number);
    expect(persianNumber).toEqual("۱۲۳۴۵۶۷۸۹۰");
  });
  test("test converting one number to persian number", () => {
    const number = 1;
    const persianNumber = convertToPersianNumber(number);
    expect(persianNumber).toEqual("۱");
  });
});

