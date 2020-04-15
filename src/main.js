// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import $ from "jquery";

class Haiku {
  constructor(line1, line2, line3) {
    this.fistLine = line1;
    this.secondLine = line2;
    this.thirdLine = line3;
  }
  splitLines(line){
      let lineArray = line.split(" ")
      return lineArray
  }
  
}


// export const checkHaiku = (poem) => {
//   if (poem.length > 17) {
//     return false;
//   }
//   return true;
// };
