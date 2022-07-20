
import React, {useState,useEffect } from 'react'

function HookCounterTwo() {

    const [count,setCount] = useState(0);
    const [name,setName] =useState(['']);

useEffect(() => {

    console.log('You clicked count')
    document.title=`you clicked ${count}`
}, [count])

  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count+1)}>Click {count} Count</button>
    </div>
  )
}

export default HookCounterTwo