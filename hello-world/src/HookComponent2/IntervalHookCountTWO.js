import React ,{useEffect, useState} from 'react'

function IntervealHookCount() {

    const [count,SetCount] = useState(0)

    const tick = () => {

        SetCount(count+1)
    }

    useEffect(() => {

        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    } , [])
  return (
    <div>
        
        {count}
    </div>
  )
}

export default IntervealHookCount