// import React, { Component } from 'react'

// export class RefsDemo extends Component {

//     constructor(props) {
//       super(props)
        
//           this.InputText = React.createRef()
//       }
  

//     componentDidMount(){

//         this.InputText.current.focus()
//         console.log(this.InputText)

//     }

//     clickHandler = () => {

//         alert(this.InputText.current.value)
//     }

//   render() {
//     return (
//       <div>
//         RefsDemo
        
//         <input type='text' ref={this.InputText} />
//         <button onClick={this.clickHandler}>Click Me</button>
//       </div>
//     )
//   }
// }

// export default RefsDemo


// import React, { Component } from 'react'

// export class RefsDemo extends Component {

//     constructor(props) {
//       super(props)
         
//           this.textInput = React.createRef()

//           this.clickHandler = this.clickHandler.bind(this)
//     }

//     clickHandler(){

//         this.textInput.current.focus()
//         alert(this.textInput.current.value)
//     }
//   render() {
//     return (
//       <div>
        
//         RefsDemo
        
//           <input type='text' ref={this.textInput}/>
//           <button onClick={this.clickHandler}>Click Me</button>  
        
//       </div>
//     )
//   }
// }

// export default RefsDemo



import React, { Component } from 'react'

export class RefsDemo extends Component {

    constructor(props) {
      super(props)
       
         this.cbRef=null;
         this.setCbRef = (element) =>{

            this.cbRef=element
         }
      }
   
   componentDidMount(){

        if(this.cbRef){

            this.cbRef.focus()
        }

      
   }

   clickHandler = () =>{
    
    alert(this.cbRef.value)


   }


  render() {
    return (
      <div>
        RefsDemo

        <input type='text' ref={this.setCbRef}/>
        <button onClick={this.clickHandler}>Click Me</button>
    </div>
    )
  }
}

export default RefsDemo