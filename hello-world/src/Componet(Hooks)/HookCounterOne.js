// import React,{useState,useEffect} from 'react'

// function HookCounterOne() {

// const [Count,setCount] = useState(0)

// useEffect(() => {

//     document.title=`You CLicked ${Count} times`
// })
//   return (
//     <div>
//         <button onClick={() => setCount(Count +1)}>Clicked {Count} Times</button>
//     </div>
//   )
// }

// export default HookCounterOne

import React ,{useState,useEffect}from 'react'

function HookCounterOne() {

  const [count,setCount] = useState(0);

  useEffect(() => {

    document.title=`You clicked ${count} times `
  })
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Clicked {count} Counter</button>
    </div>
  )
}

export default HookCounterOne