import React,{useState} from 'react'

function HookCounter2() {

    const IntialCount = 0;

    const [count,setCount] = useState(IntialCount)

   const IncrementFive = () => {

        for( let i=0;i<5;i++){

            setCount(prevCount => prevCount+1)
        }
    }

  return (
    <div>
        Count {count}
        <button onClick={() => setCount(IntialCount)}>Reset</button>
        {/* <button onClick={() => setCount(count+1)}>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button> */}
        <button onClick={() => setCount(prevCount => prevCount+1)}>Increment</button>
        <button onClick={() => setCount(prevCount => prevCount-1)}>Decrement</button>
        <button onClick={IncrementFive}>IncrementFive</button>
    </div>
  )
}

export default HookCounter2