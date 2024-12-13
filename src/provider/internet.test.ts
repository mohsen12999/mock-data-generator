import { describe, expect, test } from "vitest";
import {
  generateFakeDomainName,
  generateFakeEmail,
  generateUserName,
} from "./Internet";

// test for generateUserName function
describe("testing generate fake username", () => {
  const username = generateUserName();

  test("test making fake username is not null", () => {
    expect(username).not.toBeNull();
    expect(username).toBeDefined();
  });

  test("test making fake username is string", () => {
    expect(username).toBeTypeOf("string");
  });

  test("test making fake username is not empty", () => {
    expect(username).not.toBe("");
  });

  test("test making fake username length is greater than 0", () => {
    expect(username.length).toBeGreaterThan(0);
  });

  const username2 = generateUserName();

  test("test making new fake username", () => {
    expect(username2).not.toBe(username);
  });
});

// test for generateFakeDomainName function
describe("testing generate fake domain", () => {
  const domain = generateFakeDomainName();

  test("test making fake domain is not null", () => {
    expect(domain).not.toBeNull();
    expect(domain).toBeDefined();
  });

  test("test making fake domain is string", () => {
    expect(domain).toBeTypeOf("string");
  });

  test("test making fake domain is not empty", () => {
    expect(domain).not.toBe("");
  });

  test("test making fake domain length is greater than 0", () => {
    expect(domain.length).toBeGreaterThan(0);
  });

  const domain2 = generateFakeDomainName();

  test("test making new fake domain", () => {
    expect(domain2).not.toBe(domain);
  });
});

// test for generateFakeEmail function
describe("testing generate fake email", () => {
  const email = generateFakeEmail();

  test("test making fake email is not null", () => {
    expect(email).not.toBeNull();
    expect(email).toBeDefined();
  });

  test("test making fake email is string", () => {
    expect(email).toBeTypeOf("string");
  });

  test("test making fake email is not empty", () => {
    expect(email).not.toBe("");
  });

  test("test making fake email length is greater than 0", () => {
    expect(email.length).toBeGreaterThan(0);
  });

  const email2 = generateFakeEmail();

  test("test making new fake email", () => {
    expect(email2).not.toBe(email);
  });
});
