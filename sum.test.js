const sum = require("./sum");

test("adds 1 + 3 to equal 4", () => {
  expect(sum(1, 3)).toBe(4);
});

test("adds 5 + 8 to equal 13", () => {
  expect(sum(5, 8)).toBe(13);
});
