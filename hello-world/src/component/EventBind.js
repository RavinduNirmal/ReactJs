import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
     //third method
    //   this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){

        this.setState({

            message:'Good Bye!'
        })

       console.log(this)
        
    }

    // clickHandler = () =>{

    //     this.setstate({

    //         message:'Good Bye!'
    //     })
    // }

  render() {
    return (
       
      <div>
          <h2>{this.state.message}</h2>
        
        {/* first method
        <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}

        {/* second method
        <button onClick={ () => {this.clickHandler()}}>Click Me</button> */}

        {/* <button onClick={this.clickHandler}>Click Me</button> */}

      
        </div>
    )
  }
}

export default EventBind