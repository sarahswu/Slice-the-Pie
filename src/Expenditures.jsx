import React, { useRef, useEffect, useState } from 'react';
import { Popup } from 'semantic-ui-react'


let expenses = [
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

  let total=0;


function Expenditures (props) {


  useEffect(function() {

    let medCircle = d3.select("#medCircle");
    let teachCircle = d3.select("#teachCircle");
    let researchCircle = d3.select("#researchCircle");
    let studentCircle = d3.select("#studentCircle");
    let operationsCircle = d3.select("#operationsCircle");
    let adminCircle = d3.select("#adminCircle");
    let servicesCircle = d3.select("#servicesCircle");
    let publicCircle = d3.select("#publicCircle");
    let depreciationCircle = d3.select("#depreciationCircle");
    medCircle.style("fill", "#e9bf41");
    teachCircle.style("fill", "#f4e44e");
    researchCircle.style("fill", "#fef597");
    studentCircle.style("fill", "#f4e4b8");
    operationsCircle.style("fill", "#5e67e4");
    adminCircle.style("fill", "#7ba8f8");
    servicesCircle.style("fill", "#75c7f6");
    publicCircle.style("fill", "#357aaf");
    depreciationCircle.style("fill", "#d7e4fc");


    if(props.resetExp==true) {
      total=0;
      expenses = [
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
      props.setResetExp(false);
    }

    props.setPieData([...expenses]);

  },[]);


  function checkHundy(index) {
    if (total>100) {
      expenses[index].value = Number(100-(total-expenses[index].value));
      console.log('hundyy: ', expenses);
      total = 100;
    }
  }

  function calcTotal() {
    total=0;
    for (let i=0; i<expenses.length; i++) {
      total += Number(expenses[i].value);
    }
  }

  function medCenterChange(e) {
    const elementsIndex = expenses.findIndex(element => element.name == "Medical Center" )
    expenses[elementsIndex] = {...expenses[elementsIndex], value: e.target.value}
    console.log('expenses: ', expenses);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setExpData([...expenses]);
    props.setPieData([...expenses]);
  }

  function teachingChange(e) {
    const elementsIndex = expenses.findIndex(element => element.name == "Teaching and Teaching Support" )
    expenses[elementsIndex] = {...expenses[elementsIndex], value: e.target.value}
    console.log('expenses: ', expenses);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setExpData([...expenses]);
    props.setPieData([...expenses]);
  }

  function researchChange(e) {
    const elementsIndex = expenses.findIndex(element => element.name == "Research" )
    expenses[elementsIndex] = {...expenses[elementsIndex], value: e.target.value}
    console.log('expenses: ', expenses);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setExpData([...expenses]);
    props.setPieData([...expenses]);
  }

  function studentServChange(e) {
    const elementsIndex = expenses.findIndex(element => element.name == "Student Services and Financial Aid" )
    expenses[elementsIndex] = {...expenses[elementsIndex], value: e.target.value}
    console.log('expenses: ', expenses);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setExpData([...expenses]);
    props.setPieData([...expenses]);
  }

  function operationChange(e) {
    const elementsIndex = expenses.findIndex(element => element.name == "Operations and Maintenance" )
    expenses[elementsIndex] = {...expenses[elementsIndex], value: e.target.value}
    console.log('expenses: ', expenses);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setExpData([...expenses]);
    props.setPieData([...expenses]);
  }

  function adminChange(e) {
    const elementsIndex = expenses.findIndex(element => element.name == "Administration" )
    expenses[elementsIndex] = {...expenses[elementsIndex], value: e.target.value}
    console.log('expenses: ', expenses);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setExpData([...expenses]);
    props.setPieData([...expenses]);
  }

  function servChange(e) {
    const elementsIndex = expenses.findIndex(element => element.name == "Services" )
    expenses[elementsIndex] = {...expenses[elementsIndex], value: e.target.value}
    console.log('expenses: ', expenses);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setExpData([...expenses]);
    props.setPieData([...expenses]);
  }

  function publicServChange(e) {
    const elementsIndex = expenses.findIndex(element => element.name == "Public Service" )
    expenses[elementsIndex] = {...expenses[elementsIndex], value: e.target.value}
    console.log('expenses: ', expenses);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setExpData([...expenses]);
    props.setPieData([...expenses]);
  }

  function depreciationChange(e) {
    const elementsIndex = expenses.findIndex(element => element.name == "Depreciation, Interest, etc" )
    expenses[elementsIndex] = {...expenses[elementsIndex], value: e.target.value}
    console.log('expenses: ', expenses);
    calcTotal();
    checkHundy(elementsIndex);
    console.log('total: ', total);
    props.setExpData([...expenses]);
    props.setPieData([...expenses]);
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
          <Popup content='The cost of providing care at the Medical Center is roughly what we get paid to provide it.' trigger={<i className='info circle icon'></i>} />
        </div>
        <div className='totalRow'>
          <input value={expenses[0].value} type="number" id="medCenterExpenses" onChange={medCenterChange}/>
          <h3>%</h3>
        </div>
      </div>
      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="teachCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3 id="teachingWidth">Teaching and Teaching Support</h3>
          <Popup content='Professors, advisors, deans, the library, the computer labs, etc, including Medical School faculty salaries.' trigger={<i className='info circle icon'></i>} />
        </div>
        <div className='totalRow'>
          <input value={expenses[1].value} type="number" id="teachingExpenses" onChange={teachingChange}/>
          <h3>%</h3>
        </div>
      </div>
      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="researchCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3>Research</h3>
          <Popup content='The costs of doing the research, mostly researcher salaries.' trigger={<i className='info circle icon'></i>} />
        </div>
        <div className='totalRow'>
          <input value={expenses[2].value} type="number" id="researchExpenses" onChange={researchChange}/>
          <h3>%</h3>
        </div>
      </div>
      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="studentCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3 id="studentWidth">Student Services and Financial Aid</h3>
          <Popup content='Student Health, things covered by fees, Admissions, and also financial aid from the general funds, which is about $100M or 1.5%.' trigger={<i className='info circle icon'></i>} />
        </div>
        <div className='totalRow'>
          <input value={expenses[3].value} type="number" id="studentServExpenses" onChange={studentServChange}/>
          <h3>%</h3>
        </div>
      </div>
      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="operationsCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3 id="operationsWidth">Operations and Maintenance</h3>
          <Popup content='Upkeep of the grounds and building, and utilities, which are less than 1%.' trigger={<i className='info circle icon'></i>} />
        </div>
        <div className='totalRow'>
          <input value={expenses[4].value} type="number" id="operationExpenses" onChange={operationChange}/>
          <h3>%</h3>
        </div>
      </div>
      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="adminCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3>Administration</h3>
          <Popup content="Provost and Chancellor's offices, raising money, accounting, personnel, legal, making budgets." trigger={<i className='info circle icon'></i>} />
        </div>
        <div className='totalRow'>
          <input value={expenses[5].value} type="number" id="adminExpenses" onChange={adminChange}/>
          <h3>%</h3>
        </div>
      </div>
      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="servicesCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3>Services</h3>
          <Popup content="The costs of providing dorms, dining,parking, etc." trigger={<i className='info circle icon'></i>} />
        </div>
        <div className='totalRow'>
          <input value={expenses[6].value} type="number" id="servExpenses" onChange={servChange}/>
          <h3>%</h3>
        </div>
      </div>
      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="publicCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3>Public Service</h3>
          <Popup content="Mostly the cooperative extension, which provides agricultural services to farmers, ranchers, winemakers, etc.  Part of our mission as a land grant university." trigger={<i className='info circle icon'></i>} />
        </div>
        <div className='totalRow'>
          <input value={expenses[7].value} type="number" id="publicServExpenses" onChange={publicServChange}/>
          <h3>%</h3>
        </div>
      </div>
      <div className='row'>
        <div className='infoRow'>
          <svg width="25" height="30">
            <circle id="depreciationCircle" r="8" cx="10" cy="18"></circle>
          </svg>
          <h3>Depreciation, Interest, etc</h3>
          <Popup content="Depreciation is the loss of value of buildings and equipment as they wear out. Mostly unavoidable financial losses." trigger={<i className='info circle icon'></i>} />
        </div>
        <div className='totalRow'>
          <input value={expenses[8].value} type="number" id="depreciationExpenses" onChange={depreciationChange}/>
          <h3>%</h3>
        </div>
      </div>
      
      <div className='row' className='totalRow'>
        <h3>Total %</h3>
        <div className='totalRow'>
          <input value={total} readOnly type="number" id="totalExpenses" />
          <h3>%</h3>
        </div>
      </div>

      <br/><br/>
      
      <button id='compareButton' onClick={props.goToCompare}>Compare</button>

      <br/>

      <button id='previousButton' onClick={props.goToRevenues}>Previous</button>

    </div>
  );

}


export default Expenditures;