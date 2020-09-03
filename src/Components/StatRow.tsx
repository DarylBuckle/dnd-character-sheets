import React from 'react';


function StatRow(props) {
  let classes = "d-and-d-statrow";
  if (props.classes) {
    classes += " " + props.classes;
  }
  
  return (
    <div className={classes}>
      <div className="d-and-d-statrow-value">
        <input type="text" value={props.value} onChange={(e) => props.onChange(props.name, e.target.value)}></input>
      </div>
      <div className="d-and-d-statrow-label">
        <label>{props.label}</label> 
      </div>
    </div>
  );
}

export default StatRow;
