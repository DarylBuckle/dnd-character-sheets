import React from 'react'

function StatBox(props: {
  classes?: string
  value: string | number | readonly string[] | undefined
  label: React.ReactNode
  onChange: (arg0: any, arg1: string) => void
  name: any
}) {
  let classes = 'd-and-d-statbox'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  let modifier: string = ''
  if (props.value && !isNaN(Number(props.value))) {
    const modifierNum = Math.floor((Number(props.value) - 10) / 2)
    if (modifierNum > 0) {
      modifier = '+' + modifierNum
    } else {
      modifier = modifierNum.toString()
    }
  }

  return (
    <div>
      <div className={classes}>
        <label>{props.label}</label>
        <div className='d-and-d-statbox-modifier'>{modifier}</div>
      </div>
      <div className='d-and-d-statbox-value'>
        <input
          type='text'
          value={props.value ? props.value : ''}
          onChange={(e) => props.onChange(props.name, e.target.value)}
        />
      </div>
    </div>
  )
}

export default StatBox
