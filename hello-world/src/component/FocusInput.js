import React, { Component } from 'react'

 class FocusInput extends Component {

    constructor(props) {
      super(props)
    
         this.componentRef = React.createRef()
    }

    clickhandler = () =>{

        this.componentRef.current.focusInput()
    }

  render() {
    return (
      <div>
        <input ref={this.componentRef}/>
        <button onClick={this.clickhandler}>Input ref</button>
     </div>
    )
  }
}

export default FocusInput