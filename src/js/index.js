//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";

let uSegundos = 0
let dSegundos = 0
let cSegundos = 0
let umSegundos = 0
let dmSegundos = 0
let cmSegundos = 0

//render your react application
setInterval(() => {
  uSegundos++;
 
  if (uSegundos > 9) {
    uSegundos = 0;
    dSegundos++;
  }
  if (dSegundos > 9) {
    dSegundos = 0;
    cSegundos++;
    
  }
  if (cSegundos > 9) {
    cSegundos = 0;
    umSegundos++;
  }

  if (umSegundos > 9) {
    umSegundos = 0;
    dmSegundos++;
  }
    if (dmSegundos > 9) {
    dmSegundos = 0;
    cmSegundos++;
  }

  ReactDOM.render(
    <SecondsCounter
      digitSix={cmSegundos}
      digitFive={dmSegundos}
      digitFour={umSegundos}
      digitThree={cSegundos}
      digitTwo={dSegundos}
      digitOne={uSegundos}
    />,
    document.querySelector("#app")
  );
}, 1000);
