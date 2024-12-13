import { describe, expect, test } from "vitest";
import {
  generateFakeFirstName,
  generateFakeFullname,
  generateFakeLastName,
} from "./person";

describe("testing generate fake first name", () => {
  const firstName = generateFakeFirstName();

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

  const firstName2 = generateFakeFirstName();

  test("test making new fake first name", () => {
    expect(firstName2).not.toBe(firstName);
  });
});

describe("testing generate fake last name", () => {
  const lastName = generateFakeLastName();

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

  const lastName2 = generateFakeLastName();

  test("test making new fake last name", () => {
    expect(lastName2).not.toBe(lastName);
  });
});

describe("testing generate fake full name", () => {
  const fullName = generateFakeFullname();

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

  const fullName2 = generateFakeFullname();

  test("test making new fake full name", () => {
    expect(fullName2).not.toBe(fullName);
  });
});
