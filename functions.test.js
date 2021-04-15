test("pritive equals", () => {
  expect(2 + 2).toBe(4);
});

test("comparison", () => {
  expect(17 * 17).toBeLessThan(1000);
  expect(17 * 17).toBeLessThanOrEqual(289);
});

test("string contains", () => {
  expect("team").not.toMatch(/I/);
});

test("array contains", () => {
  expect(["jagdeep", "pradeep", "sandeep"]).toContain("jagdeep");
  expect(["jagdeep", "pradeep", "sandeep"]).not.toContain("gagandeep");
});

test("object equals", () => {
  expect({ msg: "hello world" }).toEqual({ msg: "hello world" });
});
