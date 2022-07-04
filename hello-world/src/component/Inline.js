import React from 'react'

function Inline() {

    const heading = {
        fontSize:'72px',
        color:'red'
    }

  return (
     <div>
        <h1 className='error'>Error</h1>
         <div style={heading}>Inline</div>
    </div>
  )
}

export default Inline