import React from 'react'
import './stylesheet.css'

function Stylesheet(props) {

    let className = props.font ? 'font' : ''
  return (
    <div>
        {/* <h1 className='font'>Stylesheet</h1> */}
        {/* <h1 className={className}>Stylesheet</h1> */}
        <h1 className={`${className} fontfamily` }>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet