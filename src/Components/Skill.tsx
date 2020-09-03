import React from 'react';


function Skill(props) {
  let classes = "d-and-d-skill";
  if (props.classes) {
    classes += " " + props.classes;
  }
  
  return (
    <div className={classes}>
      <div 
        className={props.checked ? "d-and-d-skill-circle active" : "d-and-d-skill-circle"}
        onClick={() => props.onChange(props.name + "Checked", !props.checked) }
      />
      <input type="text" value={props.value} onChange={(e) => props.onChange(props.name, e.target.value)}></input>
      <label>{props.label}</label> 
      {props.hint ? <span className="d-and-d-skill-hint">{props.hint}</span> : null}
    </div>
  );
}

export default Skill;
