// import React, { Component } from 'react'
// import axios from 'axios'

//  class PostForm extends Component {

//      constructor(props) {
//        super(props)
     
//        this.state = {
          
//           name:'',
//           address:'',
//           phone:''
//        }
//      }

//      clickhandler = (event) => {
 
//           this.setState({

//             [event.target.name]:event.target.value
//           })

//      }

//      SubmitHandler = (event) =>{
       
//         console.log(this.state)
//         event.preventDefault();

//         axios
//         .post('https://jsonplaceholder.typicode.com/posts', this.state)
//         .then(response => {

//             console.log(response)
//         })
//         .catch(error => {

//             console.log(error)
//         })
//      }
//   render() {

//     const {name,address,phone} = this.state
//     return (
//       <div>
//         <h2>Form Input</h2>
  
//        <form onSubmit={this.SubmitHandler}>
//         <div>
//         <input type='text'
//                 name='name'
//                 value={name}
//                 onChange={this.clickhandler}
//           />
//         </div>
         
//          <div>
//           <input type='text'
//                 name='address'
//                 value={address}
//                 onChange={this.clickhandler}
//           />
//           </div>

//          <input type='text' 
//                 name='phone'
//                 value={phone}
//                 onChange={this.clickhandler}
//           />

//           <button type='submit'>Submit</button>

//           </form>


//       </div>
//     )
//   }
// }

// export default PostForm





import axios from 'axios'
import React, { Component } from 'react'

export class PostForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name:'',
       address:'',
       userId:''
    }
  }

  ChangeValue = (event) =>{

    this.setState({

          [event.target.name]:event.target.value
    })
  }


  SubmitHandler = (event)=> {

    event.preventDefault()
    console.log(this.state)

    axios.post('https://jsonplaceholder.typicode.com/posts' ,this.state)
          .then(response => {
              
                 console.log(response)
          })
          .catch(error => {

            console.log(error)
          })

  }

  render() {

    const {name,address,userId} = this.state
    return (
      <div>
        Fill The Form 

     <form onSubmit={this.SubmitHandler}>
        <input type ='text'
               name='name'
               value={name}
               onChange={this.ChangeValue}  
        /> 

       <input type ='text'
               name='address'
               value={address}
               onChange={this.ChangeValue}  
        /> 

       <input type ='text'
               name='userId'
               value={userId}
               onChange={this.ChangeValue}  
        /> 

        <button type='submit'>Submit</button>

   </form>
      </div>
    )
  }
}

export default PostForm