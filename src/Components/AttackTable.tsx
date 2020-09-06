import React from 'react'

function AttackTable(props: {
  onChange: (arg0: any, arg1: any) => void
  name: string
  value?: any
  classes?: string
  rows: number
}) {
  function updateValue(index: React.Key, field: string, v: string) {
    const value = getValue().slice()
    value[index][field] = v
    props.onChange(props.name, value)
  }

  function getValue() {
    let value = props.value
    if (!value) {
      value = []
    }
    while (value.length < props.rows) {
      value.push({})
    }
    return value
  }

  let classes = 'd-and-d-table'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  return (
    <table className={classes}>
      <thead>
        <tr>
          <th>Name</th>
          <th style={{ width: '70px' }}>Atk Bonus</th>
          <th>Damage/Type</th>
        </tr>
      </thead>
      <tbody>
        {getValue().map(
          (
            v: {
              name: string | number | readonly string[] | undefined
              bonus: string | number | readonly string[] | undefined
              damage: string | number | readonly string[] | undefined
            },
            index: string
          ) => {
            return (
              <tr key={'d-and-d-table-row-' + props.name + index}>
                <td>
                  <input
                    type='text'
                    value={v.name ? v.name : ''}
                    onChange={(e) => updateValue(index, 'name', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.bonus ? v.bonus : ''}
                    onChange={(e) =>
                      updateValue(index, 'bonus', e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    type='text'
                    value={v.damage ? v.damage : ''}
                    onChange={(e) =>
                      updateValue(index, 'damage', e.target.value)
                    }
                  />
                </td>
              </tr>
            )
          }
        )}
      </tbody>
    </table>
  )
}

export default AttackTable
