import React, { useRef, useEffect } from 'react';


function PieChart (props) {

  console.log("calling piechart");
  // console.log("props",props.data);
  // console.log("real props", props);
  
    // gets connected to svg drawn by React by variable name and its ref attribute
    let pie1 = React.createRef(null);
    let pie2 = React.createRef(null);

    let d3Container = pie1;
    if (props.refVal == "pie2") {
      d3Container = pie2;
    }
    
    let dimensions = ({
      width: props.width ? props.width : 200,
      height: props.height ? props.height : 200,
      padding: props.padding ? props.padding : 40
    });
 
    // const data = props.data;
    
    let pie = d3.pie()
                .sort(null)
                .value(d => d.value);

    let arc = d3.arc()
                .innerRadius(0)
                .outerRadius(Math.min(dimensions.width, dimensions.height) / 2 - 1);
  
    


  // init code - only run on startup
  useEffect(function() {

      if (!(d3Container.current && props.data)) 
        return;
      
    let chartSvg = d3.select(d3Container.current);

    chartSvg.append('g')
      .attr('id', props.refVal)
      .attr('class', 'chart-content')
      .attr('transform', `translate(
      ${dimensions.width / 2 + dimensions.padding},
      ${dimensions.height/2 + dimensions.padding})`);
    },[]);

  // update function
  useEffect(function() {

    console.log("update effect");
    
    if (!(d3Container.current && props.data)) 
        return;
    
    const valueSum = d3.sum(props.data, d => d.value);
    if (100 - valueSum > 0) {
      props.data.push({
        name: '$empty',
        value: (100 - valueSum),
        color: '#7f8187'
      });
    }

    const arcs = pie(props.data);

    const g = d3.select("#"+props.refVal);
    g.selectAll('path')
        .data(arcs)
        .join('path')
        .on('mouseover', (event, d) => onSliceOver(event, d))
        .on('mouseout', (event, d) => onSliceOut(event, d))
        .transition().duration(500)
        .attr('fill', d => d.data.color)
        .attr('transform', d => d.data.name == '$empty' ? 'scale(0.95)' : '')
        .attr('d', arc);
    }, [props.data, d3Container.current ]
  ); // useEffect update function

  
  function onSliceOver(event, d) {
    if (d.data.name == '$empty')
      return;

    // let pointer = d3.pointer(event);

    d3.select(event.currentTarget)
      .transition().duration(200)
      .attr('transform', 'scale(1.1)')

    const g = d3.select("#"+props.refVal);
    
    g.select('#chart-tooltip').remove();
    g.append('text')
        .attr('x', 0)
        .attr('y', 130)
        .attr('fill', 'white')
        .attr('text-anchor', 'middle')
        .attr('id', 'chart-tooltip')
        .text(`${d.data.name} ${d.data.value}%`);
  }

  function onSliceOut(event, d) {
    if (d.data.name == '$empty')
      return;

    d3.select(event.currentTarget)
      .transition().duration(200)
      .attr('transform', 'scale(1)')

     const g = d3.select("#"+props.refVal);
     g.select('#chart-tooltip').remove();
  }

  // function getColorValue(color) {
  //   let sumVal = 0;
  //   for (let i = 1; i < color.length; i+=2) {
  //     let val = parseInt(`0x${color[i]}${color[i+1]}`);
  //     sumVal += val;
  //   }
  //   sumVal /= 3;
  //   return sumVal;
  // }


  if (props.refVal == "pie1") {
  return (
    <div className="pieDiv">
        <h2>{props.title}</h2>
        <svg
            className="pie-chart"
            width={dimensions.width + 2*dimensions.padding}
            height={dimensions.height + 2*dimensions.padding}
            ref={pie1}
        />
    </div>
  ); } else {
    return (
    <div className="pieDiv">
        <h2>{props.title}</h2>
        <svg
            className="pie-chart"
            width={dimensions.width + 2*dimensions.padding}
            height={dimensions.height + 2*dimensions.padding}
            ref={pie2}
        />
    </div>
  ); }


  // return (
  //   <div>
  //       <h2>{props.title}</h2>
  //       <svg
  //           className="pie-chart"
  //           width={dimensions.width + 2*dimensions.padding}
  //           height={dimensions.height + 2*dimensions.padding}
  //           ref={d3Container}
  //       />
  //   </div>
  // );

}


export default PieChart;