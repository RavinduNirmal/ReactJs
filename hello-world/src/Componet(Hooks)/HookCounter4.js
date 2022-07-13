// import React,{useState} from 'react'

// function HookCounter4() {

//    const [Items , setItems] = useState([]) 

//    const AddItem = () => {

//         setItems([...Items,{
                    
//                id:Items.length,
//               value:Math.floor(Math.random() * 10)+10
                 
//            }])
//    }


//   return (
//     <div>

//         <button onClick={AddItem}>Add A New Item</button>
       
//         <ul>
//           {
//             Items.map(item =>(
               
//                 <div><li key={item.id}>{item.value}</li></div>

//             ))
//           }
//         </ul>
        
//     </div>
//   )
// }

// export default HookCounter4



import React,{useState}from 'react'

function HookCounter4() {

  const [Items,setItems] = useState([])

  const AddNumber = () => {
      
      setItems([...Items,{

           id:Items.length,
           value: Math.floor(Math.random() * 10) +1
      }])
  }

  return (
    <div>
      <button onClick={AddNumber}>Add A New Number</button>

      <ul>
        {
          Items.map(item => (

            <li key = {item.id}>{item.value}</li>

          ))
        }
      </ul>
    </div>
  )
}

export default HookCounter4