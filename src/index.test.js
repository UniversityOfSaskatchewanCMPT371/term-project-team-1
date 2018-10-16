
const greeter = require(".");
test("should return hello message", () => {
  expect(greeter()).toBe("Hello, world!");
});