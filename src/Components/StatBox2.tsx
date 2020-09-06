import React from 'react'

function StatBox2(props: {
  classes?: string
  value: string | number | readonly string[] | undefined
  onChange: (arg0: any, arg1: string) => void
  name: any
  labelTop?: {} | null | undefined
  label?: React.ReactNode
}) {
  let classes = 'd-and-d-statbox type2'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <div>
      <div className={classes}>
        <div className='d-and-d-statbox-modifier'>
          <input
            type='text'
            value={props.value ? props.value : ''}
            onChange={(e) => props.onChange(props.name, e.target.value)}
          />
        </div>
        {props.labelTop != null ? (
          <div>
            <label className='label-top'>{props.labelTop}</label>
          </div>
        ) : null}
        {props.label != null ? (
          <div>
            <label>{props.label}</label>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default StatBox2
