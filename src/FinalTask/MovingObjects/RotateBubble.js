import React, { useState } from "react";
import "../Components/Sidebar.css";

const RotateBubble = () => {

  const style={
    width: "50px",
  height: "50px",
  backgroundcolor: "rgb(255, 104, 104)",
border: "2px solid palevioletred",
transform: "translate(0, 0, 0)",
transition : "2s ease-in",
position : "absolute",

  }
  

  const [speed, setSpeed] = useState(style)
  // const [parentX, setParentX] = useState(0)
  const [xPosition, setXPosition] = useState(0)
  const [yPosition, setYPosition] = useState(0)
 
  const getClickPosition = (e) =>{

  let circleObject = document.querySelector('#circle');
  let circleContainer = document.querySelector('#bubble-div')
    setXPosition(e.clientX - circleContainer.offsetWidth/4 - circleObject.offsetWidth/4)
    setYPosition(e.clientY - circleContainer.offsetHeight/5 + circleObject.offsetHeight/2 )

    let translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    circleObject.style.transform = translate3dValue;
    setSpeed({
      width:style.width,
      height:style.height,
      backgroundcolor:style.backgroundcolor,
      border:style.border,
      transition:style.transition,
     
      transform:translate3dValue
    })
  }
  
  return (
    <div className="container pb-3">
     <h1 className='fs-4 text-center my-3 '>Rotate Bubble</h1>
    <div id="bubble-div" onClick={(e) =>getClickPosition(e)}>
      <div className="bg-danger rounded-circle bubble" id="circle" style={speed}></div></div>
      
      </div>
    
  );
};

export default RotateBubble;
