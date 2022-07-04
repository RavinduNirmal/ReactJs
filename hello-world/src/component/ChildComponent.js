// import React from 'react'

// function ChildComponent(props) {
//   return (
//     <div>
//         <button onClick={props.greetHandler}>Click Me</button>
//     </div>
//   )
// }

// export default ChildComponent



import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('child'+' saman')}>Click Me</button>
    </div>
  )
}

export default ChildComponent

