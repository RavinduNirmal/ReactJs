import React from 'react'
import Persons from './Persons';

// function NameList() {

//     const names = ['Ravindu' ,'Kasun' ,'Sonal' ]
//   return (
//     <div>
//         <h1>{names[0]}</h1>
//         <h1>{names[1]}</h1>
//         <h1>{names[2]}</h1>
//     </div>
//   )
// }



// function NameList() {

//     const names = ['Ravindu' ,'Kasun' ,'Sonal' ]
//   return (
//     <div>{
        
//             names.map(name => <div>{name}</div>)
//          }
        
//     </div>
//   )
// }



// function NameList() {

//     const names = ['Ravindu' ,'Kasun' ,'Sonal' ];
//     const nameList = names.map(name => <div>{name}</div>)
 
//     return (
//     <div>
        
//         <div><h1>{nameList}</h1></div> 
         
        
//     </div>
//   )
// }


function NameList() {

    const persons = [
    
        {
            id:1,
            name:'Nimal',
            age:25,
            language:'Java'
        },

        {
            id:2,
            name:'Kamal',
            age:22,
            language:'php'
        },


        {
            id:3,
            name:'sunil',
            age:40,
            language:'Mern'
        }


    ];

    const personList = persons.map(person => <Persons person = {person}/>)

    return(
        <div>{personList}</div>
    )

}

export default NameList

