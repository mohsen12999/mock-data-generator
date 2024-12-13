import { describe, expect, test } from "vitest";
import { generatePersianCompany, generatePersianContract } from "./company-fa";

// test for generatePersianCompany function
describe("testing generate fake company", () => {
  const company = generatePersianCompany();

  test("test making fake company is not null", () => {
    expect(company).not.toBeNull();
    expect(company).toBeDefined();
  });

  test("test making fake company is string", () => {
    expect(company).toBeTypeOf("string");
  });

  test("test making fake company is not empty", () => {
    expect(company).not.toBe("");
  });

  test("test making fake company length is greater than 0", () => {
    expect(company.length).toBeGreaterThan(0);
  });

  const company2 = generatePersianCompany();

  test("test making new fake company", () => {
    expect(company2).not.toBe(company);
  });
});

// test for generatePersianContract function
describe("testing generate fake contract", () => {
  const contract = generatePersianContract();

  test("test making fake contract is not null", () => {
    expect(contract).not.toBeNull();
    expect(contract).toBeDefined();
  });

  test("test making fake contract is string", () => {
    expect(contract).toBeTypeOf("string");
  });

  test("test making fake contract is not empty", () => {
    expect(contract).not.toBe("");
  });

  test("test making fake contract length is greater than 0", () => {
    expect(contract.length).toBeGreaterThan(0);
  });

  const contract2 = generatePersianContract();

  test("test making new fake contract", () => {
    expect(contract2).not.toBe(contract);
  });
});
