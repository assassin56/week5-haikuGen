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
  test("haiku method countSyllables() is not counting syllables of words with multiple vowels in congreancy", ()=> {
    expect(haiku.countSyllables("ACQUAINTANCE")).toEqual(3);
  })
  test("haiku method countSyllables() is only counting for 1 syllable if a word ends in 'le' or 'les' and the letter before 'l' is a constant", ()=> {
    expect(haiku.countSyllables("automobiles")).toEqual(4);
  })
  // test("haiku method returnHaiku() is returning false on lines with correct line lengths but incorrect syllabol lengths", ()=> {
  //   haiku.firstLine += " ACQUAINTANCE"
  //   expect(haiku.returnHaiku()).toBeTruthy();
  // })
  test("haiku method returnHaiku() is returning true on Hakiu lines with correct syllabols in each line", ()=> {
    expect(haiku.returnHaiku()).toBeTruthy();
  })
  test("haiku method returnHaiku() is returning false on lines with incorrect line lengths", ()=> {
    haiku.firstLine += " hello world";
    expect(haiku.returnHaiku()).toBeFalsy();
  })
});