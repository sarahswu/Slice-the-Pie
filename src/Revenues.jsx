import React, { useRef, useEffect, useState } from 'react';
import { Popup } from 'semantic-ui-react'

  let revenues = [
    { name: 'Medical Center', value: 0, color: '#e9bf41' },
    { name: 'Student Fees', value: 0, color: '#fef597' },
    { name: 'State of California', value: 0, color: '#f4e44e' },
    { name: 'Tuition', value: 0, color: '#5e67e4' },
    { name: 'Research Grants and Contracts', value: 0, color: '#7ba8f8' },
    { name: 'Pell Grants', value: 0, color: '#75c7f6' },
    { name: 'Non-educational Services', value: 0, color: '#357aaf' },
    { name: 'Gifts, Endowments, Interest, etc', value: 0, color: '#d7e4fc' }
  ];

  let total=0;


function Revenues (props) {

  useEffect(function() {

    let medCircle = d3.select("#medCircle");
    let studentCircle = d3.select("#studentCircle");
    let stateCircle = d3.select("#stateCircle");
    let tuitionCircle = d3.select("#tuitionCircle");
    let researchCircle = d3.select("#researchCircle");
    let pellCircle = d3.select("#pellCircle");
    let nonCircle = d3.select("#nonCircle");
    let giftsCircle = d3.select("#giftsCircle");
    medCircle.style("fill", "#e9bf41");
    studentCircle.style("fill", "#fef597");
    stateCircle.style("fill", "#f4e44e");
    tuitionCircle.style("fill", "#5e67e4");
    researchCircle.style("fill", "#7ba8f8");
    pellCircle.style("fill", "#75c7f6");
    nonCircle.style("fill", "#357aaf");
    giftsCircle.style("fill", "#d7e4fc");

    if(props.resetRev==true) {
      total=0;
      // console.log('ressettotal: ', total);
      revenues = [
        { name: 'Medical Center', value: 0, color: '#e9bf41' },
        { name: 'Student Fees', value: 0, color: '#fef597' },
        { name: 'State of California', value: 0, color: '#f4e44e' },
        { name: 'Tuition', value: 0, color: '#5e67e4' },
        { name: 'Research Grants and Contracts', value: 0, color: '#7ba8f8' },
        { name: 'Pell Grants', value: 0, color: '#75c7f6' },
        { name: 'Non-educational Services', value: 0, color: '#357aaf' },
        { name: 'Gifts, Endowments, Interest, etc', value: 0, color: '#d7e4fc' }
      ];
      props.setResetRev(false);
    }

    props.setPieData([...revenues]);

  },[]);
  
  
  function checkHundy(index) {
    if (total>100) {
      revenues[index].value = Number(100-(total-revenues[index].value));
      console.log('hundyy: ', revenues);
      total = 100;
    }
  }

  function calcTotal() {
    total=0;
    for (let i=0; i<revenues.length; i++) {
      total += Number(revenues[i].value);
    }
  }

  function medCenterChange(e) {
    const elementsIndex = revenues.findIndex(element => element.name == "Medical Center" )
    revenues[elementsIndex] = {...revenues[elementsIndex], value: e.target.value}
    console.log('revenues: ', revenues);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setRevData([...revenues]);
    props.setPieData([...revenues]);
  }

  function studentFeesChange(e) {
    const elementsIndex = revenues.findIndex(element => element.name == "Student Fees" )
    revenues[elementsIndex] = {...revenues[elementsIndex], value: e.target.value}
    console.log('revenues: ', revenues);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setRevData([...revenues]);
    props.setPieData([...revenues]);
  }

  function stateChange(e) {
    const elementsIndex = revenues.findIndex(element => element.name == "State of California" )
    revenues[elementsIndex] = {...revenues[elementsIndex], value: e.target.value}
    console.log('revenues: ', revenues);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setRevData([...revenues]);
    props.setPieData([...revenues]);

  }

  function tuitionChange(e) {
    const elementsIndex = revenues.findIndex(element => element.name == "Tuition" )
    revenues[elementsIndex] = {...revenues[elementsIndex], value: e.target.value}
    console.log('revenues: ', revenues);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setRevData([...revenues]);
    props.setPieData([...revenues]);
  }

  function researchChange(e) {
    const elementsIndex = revenues.findIndex(element => element.name == "Research Grants and Contracts" )
    revenues[elementsIndex] = {...revenues[elementsIndex], value: e.target.value}
    console.log('revenues: ', revenues);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setRevData([...revenues]);
    props.setPieData([...revenues]);
  }

  function pellChange(e) {
    const elementsIndex = revenues.findIndex(element => element.name == "Pell Grants" )
    revenues[elementsIndex] = {...revenues[elementsIndex], value: e.target.value}
    console.log('revenues: ', revenues);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setRevData([...revenues]);
    props.setPieData([...revenues]);
  }

  function nonEduChange(e) {
    const elementsIndex = revenues.findIndex(element => element.name == "Non-educational Services" )
    revenues[elementsIndex] = {...revenues[elementsIndex], value: e.target.value}
    console.log('revenues: ', revenues);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setRevData([...revenues]);
    props.setPieData([...revenues]);
  }

  function giftsChange(e) {
    const elementsIndex = revenues.findIndex(element => element.name == "Gifts, Endowments, Interest, etc" )
    revenues[elementsIndex] = {...revenues[elementsIndex], value: e.target.value}
    console.log('revenues: ', revenues);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setRevData([...revenues]);
    props.setPieData([...revenues]);
  }



  return (
    <div className="entryBoxes">

      <div className='row'>
        <h3>Function</h3>
        <h3>Percentage(%)</h3>
      </div>
      
      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="medCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3>Medical Center</h3>
          <Popup content='A large, not-for-profit regional medical center, including multiple hospitals, labs and clinics. Income comes from patients, medical insurance companies, and government programs like medicare.' trigger={<i className='info circle icon'></i>} />
        </div>
        
        <div className='totalRow'>
          <input value={revenues[0].value} type="number" id="medCenterRevenue" onChange={medCenterChange}/>
          <h3>%</h3>
        </div>
      </div>

      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="studentCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3>Student Fees</h3>
          <Popup content='Fees are dedicated to specific services, such as athletic facilities, bus service (UNITRANS), student organizations, the CoHo and Student Community Center, etc.' trigger={<i className='info circle icon'></i>} />
        </div>
        
        <div className='totalRow'>
          <input value={revenues[1].value} type="number" id="studentFeesRevenue" onChange={studentFeesChange}/>
          <h3>%</h3>
        </div>
      </div>

      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="stateCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3>State of California</h3>
          <Popup content='General funds given by the taxpayers of California, appropriated annualy by the state legislature. General funds are not dedicated to specific services.' trigger={<i className='info circle icon'></i>} />
        </div>
        
        <div className='totalRow'>
          <input value={revenues[2].value} type="number" id="stateRevenue" onChange={stateChange}/>
          <h3>%</h3>
        </div>
      </div>

      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="tuitionCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3>Tuition</h3>
          <Popup content='Students pay tuition to attend the University. Non-California residents pay about twice as much as residents.  Tuition is also general funds.' trigger={<i className='info circle icon'></i>} />
        </div>
        
        <div className='totalRow'>
          <input value={revenues[3].value} type="number" id="tuitionRevenue" onChange={tuitionChange}/>
          <h3>%</h3>
        </div>
      </div>

      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="researchCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3 id="researchWidth">Research Grants and Contracts</h3>
          <Popup content='Government and industry funds given to faculty and graduate students to perform research projects. These include up to 50% overhead in addition to the cost of the research.' trigger={<i className='info circle icon'></i>} />
        </div>
        
        <div className='totalRow'>
          <input value={revenues[4].value} type="number" id="researchRevenue" onChange={researchChange}/>
          <h3>%</h3>
        </div>
      </div>

      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="pellCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3>Pell Grants</h3>
          <Popup content="Federal grants for tuition and living expenses for low-income students. Percentage of students with Pell grants is a good way to measure who a University serves; at UCD, it's 34%; at Cal Tech it's 14%; at Sac State it's 71%." trigger={<i className='info circle icon'></i>} />
        </div>
        
        <div className='totalRow'>
          <input value={revenues[5].value} type="number" id="pellRevenue" onChange={pellChange}/>
          <h3>%</h3>
        </div>
      </div>

      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="nonCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3>Non-educational Services</h3>
          <Popup content='Services other than education that people pay for, like dorms, dining, parking, etc.  At UC Davis, this also includes almost $500M of revenue generated by medical school faculty, or 8%, making this category look really big.' trigger={<i className='info circle icon'></i>} />
        </div>
        
        <div className='totalRow'>
          <input value={revenues[6].value} type="number" id="nonEduRevenue" onChange={nonEduChange}/>
          <h3>%</h3>
        </div>
      </div>

      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="giftsCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3 id="giftsWidth">Gifts, Endowments, Interest, etc</h3>
          <Popup content='Endowments are past gifts that were invested to provide income; interest is earned on other savings. The Museum is the direct result of a $10M gift from Jan Shrem and Maria Manetti Shrem.' trigger={<i className='info circle icon'></i>} />
        </div>
        
        <div className='totalRow'>
          <input value={revenues[7].value} type="number" id="giftsRevenue" onChange={giftsChange}/>
          <h3>%</h3>
        </div>
      </div>

      
      <div className='row' className='maxRow'>
        <h3>Total %</h3>
        <div className='totalRow'>
          <input value={total} readOnly type="number" id="totalRevenue" />
          <h3>%</h3>
        </div>
      </div>

      <br></br>
      <br></br>
      
      <button id='nextRevenuesButton' onClick={props.goToExpenditures}>Next</button>

    </div>
  );

}


export default Revenues;