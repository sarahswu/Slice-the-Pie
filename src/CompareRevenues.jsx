import React, { useRef, useEffect, useState } from 'react';
import Revenues from "./Revenues.jsx";

function CompareRevenues (props) {

  return (
    <button id='nextCompareButton' onClick={props.goToCompareExpenses}>Next</button>
  );

}


export default CompareRevenues;