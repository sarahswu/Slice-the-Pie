import React, { useRef, useEffect, useState } from 'react';


function ProgressLabels (props) {


    switch(props.currentPhase) {
    case 'Revenues':
      return (
        <div className="row" id="progressBarLabels">
          <h4 className="labelBlue">REVENUES</h4>
          <h4>EXPENSES</h4>
          <h4>COMPARE</h4>
        </div>
      );
    case 'Expenses':
      return (
        <div className="row" id="progressBarLabels">
          <h4 className="labelBlue">REVENUES</h4>
          <h4 className="labelBlue">EXPENSES</h4>
          <h4>COMPARE</h4>
        </div>
      );
    case 'Compare':
      return (
        <div className="row" id="progressBarLabels">
          <h4 className="labelBlue">REVENUES</h4>
          <h4 className="labelBlue">EXPENSES</h4>
          <h4 className="labelBlue">COMPARE</h4>
        </div>
      );
    case 'CompareExpenses':
      return (
        <div className="row" id="progressBarLabels">
          <h4 className="labelBlue">REVENUES</h4>
          <h4 className="labelBlue">EXPENSES</h4>
          <h4 className="labelBlue">COMPARE</h4>
        </div>
      );
    default:
      return (
        <div className="row" id="progressBarLabels">
          <h4 className="labelBlue">REVENUES</h4>
          <h4>EXPENSES</h4>
          <h4>COMPARE</h4>
        </div>
      );
    }


}




export default ProgressLabels;