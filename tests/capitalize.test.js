import { capitalize } from "../src/capitalize.js";

test("Capitalize hello", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("Capitalize jaGuaR", () => {
    expect(capitalize("jaGuaR")).toBe("Jaguar")
})