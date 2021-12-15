import React, { useRef, useEffect, useState } from 'react';


function ProgressBar (props) {
  

  useEffect( () => {
    let circle1 = d3.select("#circle1");
    let circle = d3.selectAll("circle");
    let rect = d3.selectAll("rect");
    circle.style("fill", "#7f8187");
    circle1.style("fill", "#71a8ff");
    rect.style("fill", "#7f8187");
  },[]);

  useEffect(  () => {
    let circle1 = d3.select("#circle1");
    let circle2 = d3.select("#circle2");
    let circle3 = d3.select("#circle3");
    let rect1 = d3.select("#rect1");
    let rect2 = d3.select("#rect2");
    
    switch(props.currentPhase) {
    case 'Revenues':
      circle1.style("fill", "#71a8ff");
      circle2.style("fill", "#7f8187");
      circle3.style("fill", "#7f8187");
      rect1.style("fill", "#7f8187");
      rect2.style("fill", "#7f8187");
      break;
    case 'Expenses':
      circle1.style("fill", "#71a8ff");
      circle2.style("fill", "#71a8ff");
      circle3.style("fill", "#7f8187");
      rect1.style("fill", "#71a8ff");
      rect2.style("fill", "#7f8187");
      break;
    case 'Compare':
      circle1.style("fill", "#71a8ff");
      circle2.style("fill", "#71a8ff");
      circle3.style("fill", "#71a8ff");
      rect1.style("fill", "#71a8ff");
      rect2.style("fill", "#71a8ff");
      break;
    case 'CompareExpenses':
      circle1.style("fill", "#71a8ff");
      circle2.style("fill", "#71a8ff");
      circle3.style("fill", "#71a8ff");
      rect1.style("fill", "#71a8ff");
      rect2.style("fill", "#71a8ff");
      break;
    default:
      circle1.style("fill", "#71a8ff");
      circle2.style("fill", "#7f8187");
      circle3.style("fill", "#7f8187");
      rect1.style("fill", "#7f8187");
      rect2.style("fill", "#7f8187");
      break;
    }
  }, [props.currentPhase]);
  

  
  return (
      <svg width="280" height="60">
        <rect x="0" y="28" width="140" height="4" id="rect1"/>
        <rect x="140" y="28" width="140" height="4" id="rect2"/>
        <circle cx="10" cy="30" r="10" id="circle1"></circle>
        <circle cx="140" cy="30" r="10" id="circle2"></circle>
        <circle cx="270" cy="30" r="10" id="circle3"></circle>
      </svg>
  );

}




export default ProgressBar;