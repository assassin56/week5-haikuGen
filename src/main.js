// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import $ from "jquery";

export class Haiku {
  constructor(line1, line2, line3) {
    this.fistLine = line1;
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
      return true
    } else return false
  }
  countSyllables(str){
    let vowelArr = ['a','e','i','o','u'];
    str = str.toLowerCase()
    let counter = 0; 
    for(let i=0; i<str.length; i++){
      if(vowelArr.includes(str[i])){
        counter++
      }
    }
    return counter;
  }
}
