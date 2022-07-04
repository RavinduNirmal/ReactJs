import React from 'react'

function Persons({person}) {
  return (
    <div>I am {person.name} and my age is {person.age} and my skills are {person.language}</div>
  )
}

export default Persons


