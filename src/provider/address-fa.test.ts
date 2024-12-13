//
//

import { describe, expect, test } from "vitest";
import {
  generatePersianAddress,
  generatePersianCity,
  GeneratePersianCountry,
} from "./address-fa";

// test for generatePersianCity function
describe("testing generate fake persian city", () => {
  const city = generatePersianCity();

  test("test making fake persian city is not null", () => {
    expect(city).not.toBeNull();
    expect(city).toBeDefined();
  });

  test("test making fake persian city is string", () => {
    expect(city).toBeTypeOf("string");
  });

  test("test making fake persian city is not empty", () => {
    expect(city).not.toBe("");
  });

  test("test making fake persian city length is greater than 0", () => {
    expect(city.length).toBeGreaterThan(0);
  });

  const city2 = generatePersianCity();

  test("test making new fake persian city", () => {
    expect(city2).not.toBe(city);
  });
});

// test for generatePersianAddress function
describe("testing generate fake persian address", () => {
  const address = generatePersianAddress();

  test("test making fake persian address is not null", () => {
    expect(address).not.toBeNull();
    expect(address).toBeDefined();
  });

  test("test making fake persian address is string", () => {
    expect(address).toBeTypeOf("string");
  });

  test("test making fake persian address is not empty", () => {
    expect(address).not.toBe("");
  });

  test("test making fake persian address length is greater than 0", () => {
    expect(address.length).toBeGreaterThan(0);
  });

  const address2 = generatePersianAddress();

  test("test making new fake persian address", () => {
    expect(address2).not.toBe(address);
  });
});

// test for GeneratePersianCountry function
describe("testing generate fake persian country", () => {
  const country = GeneratePersianCountry();

  test("test making fake persian country is not null", () => {
    expect(country).not.toBeNull();
    expect(country).toBeDefined();
  });

  test("test making fake persian country is string", () => {
    expect(country).toBeTypeOf("string");
  });

  test("test making fake persian country is not empty", () => {
    expect(country).not.toBe("");
  });

  test("test making fake persian country length is greater than 0", () => {
    expect(country.length).toBeGreaterThan(0);
  });

  const country2 = GeneratePersianCountry();

  test("test making new fake persian country", () => {
    expect(country2).not.toBe(country);
  });
});
