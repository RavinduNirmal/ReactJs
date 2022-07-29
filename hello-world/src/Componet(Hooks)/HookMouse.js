import React ,{useState,useEffect} from 'react'

function HookMouse() {

  const [ x , setX] = useState(0)
  const [ y , setY] = useState(0)

const logMousePosition = e => {

    console.log('Mouse Move')
    setX(e.clientX)
    setY(e.clientY)
}

  useEffect(() => {

    console.log('useEffect called')
    window.addEventListener('userEffect' , logMousePosition)

    return () =>{

        console.log('code unmount code')
        window.removeEventListener('mousemove' ,logMousePosition)
    }
    
  },[]
  )
  return (
    <div> X -{x} Y -{y} </div>
  )
}

export default HookMouse