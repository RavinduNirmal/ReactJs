import React, { Component } from 'react'
import FRInput from './FRInput'

 class FRParent extends Component {

  constructor(props) {
    super(props)
     
      this.InputText = React.createRef()
  }
  render() {
    return (
      <div>

         <FRInput ref={this.InputText}/>
         
         <button>Forward Fragment</button>
     
     </div>
    )
  }
}

export default FRParent