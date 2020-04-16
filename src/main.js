// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import $ from "jquery";

export class Haiku {
  constructor(line1, line2, line3) {
    this.firstLine = line1;
    this.secondLine = line2;
    this.thirdLine = line3;
  }
  splitLines(line) {
    let lineArray = line.split(" ");
    return lineArray;
  }
  verifyLines1and3(line) {
    let splitLine = this.splitLines(line);
    if (splitLine.length <= 5) {
      return true;
    } else return false;
  }
  verifyLine2(line) {
    let splitLine = this.splitLines(line);
    if (splitLine.length <= 7) {
      return true;
    } else return false;
  }
  countSyllables(str) {
    let vowelArr = ["a", "e", "i", "o", "u", "y"];
    str = str.toLowerCase();
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (vowelArr.includes(str[i])) {
        // checking if we are at the end of the word when we find  a vowel then see if it's an "e"
        if (i + 1 === str.length) {
          if (str[i] != "e") {
            counter++;
          }
        } else if (
          vowelArr.includes(str[i + 1]) &&
          vowelArr.includes(str[i + 2])
        ) {
          counter++;
          i += 2;
        } else if (vowelArr.includes(str[i + 1])) {
          counter++;
          i++;
        } else if (
          str.length === i + 2 &&
          str[i] === "e" &&
          str[i - 1] === "l" &&
          vowelArr.includes(str[i - 2])
        ) {
        } else {
          counter++;
        }
      }
    }
    return counter;
  }
  returnHaiku() {
    if (
      this.verifyLines1and3(this.firstLine) &&
      this.verifyLines1and3(this.thirdLine) &&
      this.verifyLine2(this.secondLine)
    ) {
      // let line1Array = this.splitLines(this.firstLine);
      // let line2Array = this.splitLines(this.secondLine);
      // let line3Array = this.splitLines(this.thirdLine);
      // if (
      //   this.verifyLines1and3(line1Array) &&
      //   this.verifyLine2(line2Array) &&
      //   this.verifyLines1and3(line3Array)
      // ) {
        return true;
        // }
    } else return false;
  }
}
