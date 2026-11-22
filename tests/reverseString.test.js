import { reverseString } from "../src/reverseString.js";

it("reverse hello", () => {
    expect(reverseString("hello")).toBe("olleh");
});

it("reverse jomiloju", () => {
    expect(reverseString("jomiloju")).toBe("ujolimoj");
});