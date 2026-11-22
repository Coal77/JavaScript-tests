import { caesarCipher } from "../src/caesarCipher.js";

it("'xyz', 3 should return abc", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
}) 

it("'abc', 3 should return 'cde'", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
})

it("on shift of 3 'HeLLo' convert to 'KhOOr'", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})

it("punctuation test", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})