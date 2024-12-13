import { describe, expect, test } from "vitest";
import {
  generateFakeAddress,
  generateFakeCity,
  generateFakeCountry,
  generateFakeState,
} from "./address";

// test for generateFakeCountry function
describe("testing generate fake country", () => {
  const country = generateFakeCountry();

  test("test making fake country is not null", () => {
    expect(country).not.toBeNull();
    expect(country).toBeDefined();
  });

  test("test making fake country is string", () => {
    expect(country).toBeTypeOf("string");
  });

  test("test making fake country is not empty", () => {
    expect(country).not.toBe("");
  });

  test("test making fake country length is greater than 0", () => {
    expect(country.length).toBeGreaterThan(0);
  });

  const country2 = generateFakeCountry();

  test("test making new fake country", () => {
    expect(country2).not.toBe(country);
  });
});

// test for generateFakeState function
describe("testing generate fake state", () => {
  const state = generateFakeState();

  test("test making fake state is not null", () => {
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
  });

  test("test making fake state is string", () => {
    expect(state).toBeTypeOf("string");
  });

  test("test making fake state is not empty", () => {
    expect(state).not.toBe("");
  });

  test("test making fake state length is greater than 0", () => {
    expect(state.length).toBeGreaterThan(0);
  });

  const state2 = generateFakeState();

  test("test making new fake state", () => {
    expect(state2).not.toBe(state);
  });
});

// test for generateFakeCity function
describe("testing generate fake city", () => {
  const city = generateFakeCity();

  test("test making fake city is not null", () => {
    expect(city).not.toBeNull();
    expect(city).toBeDefined();
  });

  test("test making fake city is string", () => {
    expect(city).toBeTypeOf("string");
  });

  test("test making fake city is not empty", () => {
    expect(city).not.toBe("");
  });

  test("test making fake city length is greater than 0", () => {
    expect(city.length).toBeGreaterThan(0);
  });

  const city2 = generateFakeCity();

  test("test making new fake city", () => {
    expect(city2).not.toBe(city);
  });
});

// test for generateFakeAddress function
describe("testing generate fake address", () => {
  const address = generateFakeAddress();

  test("test making fake address is not null", () => {
    expect(address).not.toBeNull();
    expect(address).toBeDefined();
  });

  test("test making fake address is string", () => {
    expect(address).toBeTypeOf("string");
  });

  test("test making fake address is not empty", () => {
    expect(address).not.toBe("");
  });

  test("test making fake address length is greater than 0", () => {
    expect(address.length).toBeGreaterThan(0);
  });

  const address2 = generateFakeAddress();

  test("test making new fake address", () => {
    expect(address2).not.toBe(address);
  });
});
