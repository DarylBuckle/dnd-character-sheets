import React from 'react';


function StatBox(props) {
  let classes = "d-and-d-statbox";
  if (props.classes) {
    classes += " " + props.classes;
  }

  let modifier = "";
  if (props.value && !isNaN(props.value)) {
    modifier = Math.floor((props.value - 10) / 2)
    if (modifier > 0) {
      modifier = "+" + modifier;
    }
  }

  return (
    <div>
      <div className={classes}>
        <label>{props.label}</label>
        <div className="d-and-d-statbox-modifier">
          {modifier}
        </div>
      </div>
      <div className="d-and-d-statbox-value">
        <input type="text" value={props.value} onChange={(e) => props.onChange(props.name, e.target.value)}></input>
      </div>
    </div>
  );
}

export default StatBox;
