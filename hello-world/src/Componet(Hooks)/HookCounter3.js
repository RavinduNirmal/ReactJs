import React,{useState}from 'react'

function HookCounter3() {

  const [name,setName] = useState({firstname:'',lastname:''})
  return (
    <div>
        <input type='text'
            value={name.firstname}
            onChange={e => setName({...name,firstname:e.target.value})}
        />

        <input type='text'
            value={name.lastname}
            onChange={e => setName({...name,lastname:e.target.value})}

        />
        <h2>First Name-{name.firstname}</h2>
        <h2>Last Name-{name.lastname}</h2>
        {JSON.stringify(name)}
    </div>
  )
}

export default HookCounter3