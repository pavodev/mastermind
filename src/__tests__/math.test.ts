import { subtract, sum } from "../math";

// Run only once
beforeAll(() => {
  console.log("Before all");
});

// Run only once
afterAll(() => {
  console.log("Before all");
});

// Describes a group of tests
describe("Sum function", () => {
  // Used to prepare the code before running tests
  beforeEach(() => {
    console.log("Before each");
  });
  afterEach(() => {
    console.log("After each");
  });

  test("4 + 5 is 9", () => {
    const result = sum(4, 5);
    expect(result).toBe(9);
    expect(result).toBeGreaterThan(0);
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3, 3);
  });

  test("Sum without parameters", () => {
    const n = null;
    expect(sum()).toBeUndefined();
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).toBeFalsy();
  });
});

describe("Subtract function", () => {
  test("4 - 5 is -1", () => {
    expect(subtract(4, 5)).toBe(-1);
  });

  test("Subtract without parameters", () => {
    expect(subtract()).toBeUndefined();
  });
});

describe("Other tests", () => {
  test("Object equality", () => {
    const obj = { prop: "ciao" };
    // expect({ prop: "ciao" }).toBe({ prop: "ciao" }); // Non funziona perchè il riferimento è diverso
    expect({ prop: "ciao" }).toEqual({ prop: "ciao" });
    expect(obj).not.toBe({ prop: "ciao" });
    expect(obj).not.toEqual({ prop: "CIAO" });
  });

  test("String match", () => {
    expect("ciao").toMatch(/i/);
    expect("ciao").not.toMatch(/I/);
  });

  test("Arrays", () => {
    const array = ["uno", "due", "tre"];
    expect(array.length).toBe(3);
    expect(array).toContain("due");
  });
});
