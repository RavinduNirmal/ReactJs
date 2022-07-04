// import React, { Component } from 'react'
// import ChildComponent from './ChildComponent';

// export class ParentComponent extends Component {

//  constructor(props) {
//    super(props)
 
//    this.state = {
//         parent:'Parent'
//    }

//    this.greetParent = this.greetParent.bind(this);
//  }

//   greetParent(){

//       alert(`Hello ${this.state.parent}`)
//   }


//   render() {
//     return (
//       <div>
//         <ChildComponent greetHandler = {this.greetParent}/>
//       </div>
//     )
//   }
// }

// export default ParentComponent





import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

 constructor(props) {
   super(props)
 
   this.state = {
        parent:'Parent'
   }

   this.greetParent = this.greetParent.bind(this);
 }

  greetParent(childName){

      alert(`Hello ${this.state.parent} from ${childName}`)
  }


  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent


