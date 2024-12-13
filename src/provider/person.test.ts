import { expect, test } from "vitest";
import { generateFakeFirstName, generateFakeFullname, generateFakeLastName } from "./person";

test("test making fake first name", () => {
  expect(generateFakeFirstName()).toBeTypeOf("string");
});

test("test making fake last name", () => {
  expect(generateFakeLastName()).toBeTypeOf("string");
});

test("test making fake full name", () => {
  expect(generateFakeFullname()).toBeTypeOf("string");
});
