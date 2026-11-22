import { calculator } from "../src/calculator";

it("Add 1 and 2", () => {
    expect(calculator.add(1, 2)).toBe(3); 
});

it("subtract 1 from 2", () => {
    expect(calculator.sub(2, 1)).toBe(1); 
});

it("multiply 1 and 2", () => {
    expect(calculator.mult(1, 2)).toBe(2); 
});

it("divide 2 by 1", () => {
    expect(calculator.div(2, 1)).toBe(2); 
});
