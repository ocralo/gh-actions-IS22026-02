const funciones = require("../index");

describe("sum", () => {
  test("should add two numbers correctly", () => {
    expect(funciones.sum(1, 2)).toBe(3);
  });

  test("should handle negative numbers", () => {
    expect(funciones.sum(-5, 3)).toBe(-2);
  });
});
