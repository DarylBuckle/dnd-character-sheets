import React from 'react';


function StatBox2(props) {
  let classes = "d-and-d-statbox type2";
  if (props.classes) {
    classes += " " + props.classes;
  }

  return (
    <div>
      <div className={classes}>
        <div className="d-and-d-statbox-modifier">
          <input type="text" value={props.value} onChange={(e) => props.onChange(props.name, e.target.value)}></input>
        </div>
        {props.label_top != null ? <div><label className="label-top">{props.label_top}</label></div> : null}
        <div><label>{props.label}</label></div>
      </div>
    </div>
  );
}

export default StatBox2;
