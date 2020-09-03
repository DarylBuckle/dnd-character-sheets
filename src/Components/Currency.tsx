import React from 'react';


function Currency(props) {
  let classes = "d-and-d-currency";
  if (props.classes) {
    classes += " " + props.classes;
  }

  return (
    <div className={classes}>
      <div className="d-and-d-currency-label">
        <label>{props.label}</label>
      </div>
      <div className="d-and-d-currency-value">
        <input type="text" value={props.value} onChange={(e) => props.onChange(props.name, e.target.value)}></input>
      </div>
    </div>
  );
}

export default Currency;
