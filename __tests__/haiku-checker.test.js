import { Haiku } from "./../src/main.js";

describe("haiku checker", () => {
  let line1 = "An old silent pond";
  let line2 = "A frog jumps into the pond";
  let line3 = "Splash! Silence again.";
  let haiku = new Haiku(line1, line2, line3);
  test("haiku method splitLines() are spliting the lines into arrays and returning them", () => {
    expect(haiku.splitLines(line1)).toEqual(["An", "old", "silent", "pond"]);
  });
  test("haiku method verifyLines1and3() are returning true on a number of 5 or less", ()=>{
    expect(haiku.verifyLines1and3(line1)).toBeTruthy()
  })
  test("haiku method verifyLines1and3() are returning false on a number of 5 or more", ()=>{
    line1 += "hello world"
    expect(haiku.verifyLines1and3(line1)).toBeFalsy()
  })
});
