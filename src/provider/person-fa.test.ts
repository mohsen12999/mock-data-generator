import { describe, expect, test } from "vitest";
import {
  generateNationalCode,
  generatePersianFirstName,
  generatePersianFullName,
  generatePersianLastName,
} from "./person-fa";

// test for generatePersianFirstName function
describe("testing generate fake first name", () => {
  const firstName = generatePersianFirstName();

  test("test making fake first name is not null", () => {
    expect(firstName).not.toBeNull();
    expect(firstName).toBeDefined();
  });

  test("test making fake first name is string", () => {
    expect(firstName).toBeTypeOf("string");
  });

  test("test making fake first name is not empty", () => {
    expect(firstName).not.toBe("");
  });

  test("test making fake first name length is greater than 0", () => {
    expect(firstName.length).toBeGreaterThan(0);
  });

  const firstName2 = generatePersianFirstName();

  test("test making new fake first name", () => {
    expect(firstName2).not.toBe(firstName);
  });
});

// test for generatePersianLastName function
describe("testing generate fake last name", () => {
  const lastName = generatePersianLastName();

  test("test making fake last name is not null", () => {
    expect(lastName).not.toBeNull();
    expect(lastName).toBeDefined();
  });

  test("test making fake last name is string", () => {
    expect(lastName).toBeTypeOf("string");
  });

  test("test making fake last name is not empty", () => {
    expect(lastName).not.toBe("");
  });

  test("test making fake last name length is greater than 0", () => {
    expect(lastName.length).toBeGreaterThan(0);
  });

  const lastName2 = generatePersianLastName();

  test("test making new fake last name", () => {
    expect(lastName2).not.toBe(lastName);
  });
});

// test for generatePersianFullName function
describe("testing generate fake full name", () => {
  const fullName = generatePersianFullName();

  test("test making fake full name is not null", () => {
    expect(fullName).not.toBeNull();
    expect(fullName).toBeDefined();
  });

  test("test making fake full name is string", () => {
    expect(fullName).toBeTypeOf("string");
  });

  test("test making fake full name is not empty", () => {
    expect(fullName).not.toBe("");
  });

  test("test making fake full name length is greater than 0", () => {
    expect(fullName.length).toBeGreaterThan(0);
  });

  const fullName2 = generatePersianFullName();

  test("test making new fake full name", () => {
    expect(fullName2).not.toBe(fullName);
  });
});

// test for generateNationalCode function
describe("testing generate fake national code", () => {
  const id = generateNationalCode();

  test("test making fake national code is not null", () => {
    expect(id).not.toBeNull();
    expect(id).toBeDefined();
  });

  test("test making fake national code is string", () => {
    expect(id).toBeTypeOf("string");
  });

  test("test making fake national code is not empty", () => {
    expect(id).not.toBe("");
  });

  test("test making fake national code length is equal to 10", () => {
    expect(id).toHaveLength(10);
  });

  const id2 = generateNationalCode();

  test("test making new fake national code", () => {
    expect(id2).not.toBe(id);
  });
});
