import { Haiku } from "./../src/main.js";

describe("haiku checker", () => {
  let line1 = "An old silent pond";
  let line2 = "A frog jumps into the pond";
  let line3 = "Splash! Silence again.";
  let haiku = new Haiku(line1, line2, line3);
  test("haiku method splitLines() are spliting the lines into arrays and returning them", () => {
    expect(haiku.splitLines(line1)).toEqual(["An", "old", "silent", "pond"]);
  });
  test("haiku method verifyLines1and3() are returning true on a number of 5 or less", () => {
    expect(haiku.verifyLines1and3(line1)).toBeTruthy();
  });
  test("haiku method verifyLines1and3() are returning false on a number of 5 or more", () => {
    line1 += " hello world";
    expect(haiku.verifyLines1and3(line1)).toBeFalsy();
  });
  test("haiku method verifyLine2() are returning true on a number of 7 or less", () => {
    expect(haiku.verifyLine2(line2)).toBeTruthy();
  });
  test("haiku method verifyLine2() are returning false on a number of 7 or more", () => {
    line2 += " hello world";
    expect(haiku.verifyLine2(line2)).toBeFalsy();
  });
  test("haiku method countSyllables() is counting the vowels of the word passed into it", () => {
    expect(haiku.countSyllables("hello")).toEqual(2);
  });
  test("haiku method countSyllables() is not counting syllables of words ending with 'e'", ()=> {
    expect(haiku.countSyllables("home")).toEqual(1);
  })
});