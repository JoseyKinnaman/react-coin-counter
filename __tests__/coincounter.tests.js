import { Counter } from './../src/coincounter.js';

describe('coin counter', () => {

  test("should correctly return the amount of coins that make up a given amount", () => {
    const amount = 0;
    const result = new Counter()

    expect(result.countRecursive(amount)).toEqual("not a valid entry");
  });

  test("should correctly return -1 if the amount is not a number", () => {
    const amount = "apple";
    const result = new Counter();

    expect(result.countRecursive(amount)).toEqual("not a valid entry");
  });

  test("should correctly return the amount of quarters for a given amount", () => {
    const amount = 4.99;
    const result = new Counter();

    expect(result.countRecursive(amount)).toEqual([19, 2, 0, 4]);
  });

  test("should correctly return the amount of quarters for a given amount", () => {
    const result = new Counter();
    const quarters = result.countClosure(.10);
    expect(quarters(4.99)).toEqual(49);
  });
});


