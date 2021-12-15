import React, { useRef, useEffect, useState } from 'react';


function CompareExpenses (props) {

  console.log('gotorev: ', props);

  return (
    <button id='restartButton' onClick={props.goToResetRev}>Restart</button>
  );

}


export default CompareExpenses;