import React from 'react';

function AttackTable(props) {
  const rows = 3;

  function updateValue(index, field, v) {
    let value = getValue().slice();
    value[index][field] = v; 
    props.onChange(props.name, value)
  }

  function getValue() {
    let value = props.value;
    if (!value) {
      value = [];
    }
    while (value.length < rows) {
      value.push({});
    }
    return value;
  }

  let classes = "d-and-d-table";
  if (props.classes) {
    classes += " " + props.classes;
  }

  return (
    <table className={classes}>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th style={{ width: "70px" }}>
            Atk Bonus
          </th>
          <th>
            Damage/Type
          </th>
        </tr>
      </thead>
      <tbody>
        {getValue().map((v, index) => {
          return (
            <tr key={"d-and-d-table-row-" + props.name + index}>
              <td>{<input type="text" value={v.name} onChange={(e) => updateValue(index, "name", e.target.value)}></input>}</td>
              <td>{<input type="text" value={v.bonus} onChange={(e) => updateValue(index, "bonus", e.target.value)}></input>}</td>
              <td>{<input type="text" value={v.damage} onChange={(e) => updateValue(index, "damage", e.target.value)}></input>}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}

export default AttackTable;
