import { describe, expect, test } from "vitest";
import { generatedFakeField, generatedFakeNumber } from "./faker";

// generatedFakeField
describe("testing generatedFakeField function", () => {
  test("test making number field", () => {
    const field = generatedFakeField("number", "0", "1", "10", "1");
    expect(field).toBeTypeOf("number");

    const filed_number = field as number;

    expect(filed_number).not.toEqual(NaN);
    expect(filed_number).not.toEqual(Math.floor(filed_number));
    expect(filed_number).toEqual(Number(filed_number.toFixed(1)));
  });

  test("test making first name field", () => {
    const field = generatedFakeField("first_name", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making last name field", () => {
    const field = generatedFakeField("last_name", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making full name field", () => {
    const field = generatedFakeField("full_name", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making city field", () => {
    const field = generatedFakeField("city", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making country field", () => {
    const field = generatedFakeField("country", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making email field", () => {
    const field = generatedFakeField("email", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making website field", () => {
    const field = generatedFakeField("website", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making address field", () => {
    const field = generatedFakeField("address", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making persian first name field", () => {
    const field = generatedFakeField("persian_first_name", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making persian last name field", () => {
    const field = generatedFakeField("persian_last_name", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making persian full name field", () => {
    const field = generatedFakeField("persian_full_name", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making persian id field", () => {
    const field = generatedFakeField("persian_id", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making persian country field", () => {
    const field = generatedFakeField("persian_country", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making persian city field", () => {
    const field = generatedFakeField("persian_city", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });

  test("test making persian address field", () => {
    const field = generatedFakeField("persian_address", "0");
    expect(field).toBeTypeOf("string");
    expect(field).not.toBe("");
    expect((field as string).length).toBeGreaterThan(0);
  });
  
});

// generatedFakeNumber
describe("testing generatedFakeNumber function", () => {
  test("make random number in range", () => {
    const min = 1;
    const max = 10;
    const number = generatedFakeNumber(min.toString(), max.toString(), "0");
    expect(number).toBeGreaterThanOrEqual(min);
    expect(number).toBeLessThanOrEqual(max);
  });

  test("make number without decimal part", () => {
    const min = 1;
    const max = 10;
    const number = generatedFakeNumber(min.toString(), max.toString(), "0");
    expect(number).toEqual(Math.floor(number));
  });

  // test decimal is exact 
  test("make number with decimal part", () => {
    const min = 1;
    const max = 10;
    const number = generatedFakeNumber(min.toString(), max.toString(), "1");
    
    expect(number).not.toEqual(NaN);
    expect(number).not.toEqual(Math.floor(number));
    expect(number).toEqual(Number(number.toFixed(1)));
  });
});
