import React from 'react'

function Image(props: {
  classes?: string
  value: any
  onChange: (arg0: any, arg1: string) => void
  name: any
}) {
  function importImage(event: any) {
    console.log(event)
    if (event.target.files.length > 0) {
      console.log(event.target.files)
      if (event.target.files[0].size > 2000000) {
        window.alert(
          'Image is too large. Max size is 2 Mb. Please reduce the size and upload again.'
        )
        return
      }

      var fr = new FileReader()

      fr.onload = function (e) {
        if (
          e.target &&
          e.target.result &&
          typeof e.target.result === 'string'
        ) {
          props.onChange(props.name, e.target.result)
        }
      }

      fr.readAsDataURL(event.target.files[0])
    }
  }

  let classes = 'd-and-d-image'
  if (props.classes) {
    classes += ' ' + props.classes
  }

  const elementId = 'd-and-d-image-' + props.name

  return (
    <div
      className={classes}
      style={{
        backgroundImage: props.value ? 'url(' + props.value + ')' : ''
      }}
      onClick={() => document.getElementById(elementId)?.click()}
    >
      <input
        style={{ display: 'none' }}
        type='file'
        id={elementId}
        accept='image/*'
        onChange={(e) => importImage(e)}
      />
    </div>
  )
}

export default Image
