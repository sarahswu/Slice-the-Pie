
import React, { useRef, useEffect, useState } from 'react';
// import MyD3Component from "./MyD3Component.jsx";
import Text from "./Text.jsx"
import PieChart from "./PieChart.jsx";
import Revenues from "./Revenues.jsx";
import Expenditures from "./Expenditures.jsx";
import CompareRevenues from "./CompareRevenues.jsx";
import CompareExpenses from "./CompareExpenses.jsx";
import ProgressBar from "./ProgressBar.jsx";
import ProgressLabels from "./ProgressLabels.jsx";
import './App.css';






/* App */
function App() {

  // initialization
  let data = [
    { name: 'Frodo', value: 40, color: '#f0bf00' },
    { name: 'Gandalf', value: 10, color: '#f6e50e' },
    { name: 'Sam', value: 30, color: '#fff688' },
    { name: 'Aragorn', value: 10, color: '#5f63e3' },
    { name: 'Legolas', value: 0, color: '#71a8ff' }
  ];

  const realRevenues = [
    { name: 'Medical Center', value: 45, color: '#e9bf41' },
    { name: 'Student Fees', value: 4, color: '#fef597' },
    { name: 'State of California', value: 8, color: '#f4e44e' },
    { name: 'Tuition', value: 11, color: '#5e67e4' },
    { name: 'Research Grants and Contracts', value: 13, color: '#7ba8f8' },
    { name: 'Pell Grants', value: 1, color: '#75c7f6' },
    { name: 'Non-educational Services', value: 11, color: '#357aaf' },
    { name: 'Gifts, Endowments, Interest, etc', value: 7, color: '#d7e4fc' }
  ];

  const realExpenses = [
    { name: 'Medical Center', value: 43, color: '#e9bf41' },
    { name: 'Teaching and Teaching Support', value: 23, color: '#f4e44e' },
    { name: 'Research', value: 11, color: '#fef597' },
    { name: 'Student Services and Financial Aid', value: 8, color: '#f4e4b8' },
    { name: 'Operations and Maintenance', value: 2, color: '#5e67e4' },
    { name: 'Administration', value: 3, color: '#7ba8f8' },
    { name: 'Services', value: 2, color: '#75c7f6' },
    { name: 'Public Service', value: 2, color: '#357aaf' },
    { name: 'Depreciation, Interest, etc', value: 6, color: '#d7e4fc' }
  ];

  let revenuesData = [
    { name: 'Medical Center', value: 0, color: '#e9bf41' },
    { name: 'Student Fees', value: 0, color: '#fef597' },
    { name: 'State of California', value: 0, color: '#f4e44e' },
    { name: 'Tuition', value: 0, color: '#5e67e4' },
    { name: 'Research Grants and Contracts', value: 0, color: '#7ba8f8' },
    { name: 'Pell Grants', value: 0, color: '#75c7f6' },
    { name: 'Non-educational Services', value: 0, color: '#357aaf' },
    { name: 'Gifts, Endowments, Interest, etc', value: 0, color: '#d7e4fc' }
  ];

  let expensesData = [
    { name: 'Medical Center', value: 0, color: '#e9bf41' },
    { name: 'Teaching and Teaching Support', value: 0, color: '#f4e44e' },
    { name: 'Research', value: 0, color: '#fef597' },
    { name: 'Student Services and Financial Aid', value: 0, color: '#f4e4b8' },
    { name: 'Operations and Maintenance', value: 0, color: '#5e67e4' },
    { name: 'Administration', value: 0, color: '#7ba8f8' },
    { name: 'Services', value: 0, color: '#75c7f6' },
    { name: 'Public Service', value: 0, color: '#357aaf' },
    { name: 'Depreciation, Interest, etc', value: 0, color: '#d7e4fc' }
  ];


  const [currentPhase, setCurrentPhase] = useState('Revenues');
  const [pieData, setPieData] =   useState(revenuesData);
  const [pieData2, setPieData2] = useState(expensesData);
  const [revData, setRevData] = useState(revenuesData);
  const [expData, setExpData] = useState(expensesData);
  const [resetRev, setResetRev] = useState(false);
  const [resetExp, setResetExp] = useState(false);
  
  console.log("pieData: ", pieData);



  // don't keep making it longer!
  // if (pieData.length < 6) {
  //   setTimeout(() => {
  //     data.push({name: 'Testolas', value: 30, color: '#71a800'});
  //     setPieData([...data]);
  //     console.log("push");
  //   }, 3000);
  // }

  console.log("rendering App",pieData);



  function goToRevenues() {
    // if (pieData!=revenuesData) {
    //   setPieData(revenuesData);
    // }
    setCurrentPhase('Revenues');
  }

  function goToExpenditures() {
    // if (pieData!=expensesData) {
    //   setPieData(expensesData);
    // }
    console.log("revData: ",revData);
    setCurrentPhase('Expenses');
  }

  function goToCompare() {
    if (pieData!=revData) {
      setPieData(revData);
    }
    if (pieData2!=realRevenues) {
      setPieData2(realRevenues);
    }
    setCurrentPhase('Compare');
  }

  function goToCompareExpenses() {
    if (pieData!=expData) {
      setPieData(expData);
    }
    if (pieData2!=realExpenses) {
      setPieData2(realExpenses);
    }
    setCurrentPhase('CompareExpenses');
  }

  function goToResetRev() {
    setResetRev(true);
    setResetExp(true);
    for (let i=0; i<revenuesData.length; i++) {
      revenuesData[i].value = 0;
    }
    for (let i=0; i<expensesData.length; i++) {
      expensesData[i].value = 0;
    }
    setRevData(revenuesData);
    setExpData(expensesData);
    setCurrentPhase('Revenues');
  }





  switch(currentPhase) {
    case 'Revenues':
      return(
        <div className='mainDiv'>
          <Text/>

          <ProgressLabels currentPhase = {currentPhase}/>
          <ProgressBar currentPhase = {currentPhase}/>

          <PieChart title={'UC Davis Revenues'} data={pieData} refVal={"pie1"} />
          <Revenues goToExpenditures={goToExpenditures} setPieData={setPieData} setRevData={setRevData}setResetRev={setResetRev} resetRev={resetRev}/>
        </div>
      );
    case 'Expenses':
      return (
        <div className='mainDiv'>
          <Text/>

          <ProgressLabels currentPhase = {currentPhase}/>
          <ProgressBar currentPhase = {currentPhase}/>

          <PieChart title={'UC Davis Expenses'} data={pieData} refVal={"pie1"} />
          <Expenditures goToRevenues={goToRevenues} goToCompare={goToCompare} setPieData={setPieData} setExpData={setExpData} setResetExp={setResetExp} resetExp={resetExp}/>
        </div>
      );
    case 'Compare':
      return(
        <div className='mainDiv'>
          <Text/>

          <ProgressLabels currentPhase = {currentPhase}/>
          <ProgressBar currentPhase = {currentPhase}/>

          <PieChart title={'Your Revenue Guess'} data={pieData} refVal={"pie1"} />
          <PieChart title={'Actual Revenue'} data={pieData2} refVal={"pie2"} />
          <CompareRevenues goToCompareExpenses={goToCompareExpenses} setPieData={setPieData} setPieData2={setPieData2}/>
        </div>
      );
    case 'CompareExpenses':
      return(
        <div className='mainDiv'>
          <Text/>

          <ProgressLabels currentPhase = {currentPhase}/>
          <ProgressBar currentPhase = {currentPhase}/>

          <PieChart title={'Your Expenses Guess'} data={pieData} refVal={"pie1"} />
          <PieChart title={'Actual Expenses'} data={pieData2} refVal={"pie2"} />
          <CompareExpenses goToResetRev = {goToResetRev} setPieData={setPieData} setPieData2={setPieData2}/>
        </div>
      );
    default:
      return(
        <div>
          <Text/>

          <ProgressLabels currentPhase = {currentPhase}/>
          <ProgressBar currentPhase = {currentPhase}/>

          <PieChart title={'UC Davis Revenues'} data={pieData} refVal={"pie1"} />
          <Revenues/>
        </div>
      );

  }


    // return (
    //     <div>

    //       <PieChart title={pieTitle} data={pieData} />

    //       <Revenues goToExpenditures = {goToExpenditures}/>

    //     </div>
    // )
}

export default App;