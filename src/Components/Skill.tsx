import React from 'react'

function Skill(props: {
  classes?: string
  checked?: boolean
  onChange: (arg0: string, arg1: string | boolean) => void
  name: string
  value: string | number | readonly string[] | undefined
  label?: React.ReactNode
  hint?: React.ReactNode
}) {
  let classes = 'd-and-d-skill'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <div className={classes}>
      <div
        className={
          props.checked ? 'd-and-d-skill-circle active' : 'd-and-d-skill-circle'
        }
        onClick={() => props.onChange(props.name + 'Checked', !props.checked)}
      />
      <input
        type='text'
        value={props.value ? props.value : ''}
        onChange={(e) => props.onChange(props.name, e.target.value)}
      />
      <label>{props.label}</label>
      {props.hint ? (
        <span className='d-and-d-skill-hint'>{props.hint}</span>
      ) : null}
    </div>
  )
}

export default Skill
