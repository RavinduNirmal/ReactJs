import React, {Component} from 'react'

class Message extends Component{
    
    constructor(){
       super()
          this.state = {

            message:'Hello Visitor'
          }

    }
  
    
    changeMessage(){

        this.setState ({

            message:'Thank you for subscrbing'
        })
    }
    
    
    render() {
      
        return (

        <div>
              <h1>{this.state.message}</h1>
              <button onClick = {() => this.changeMessage()}>subscribe</button>
        </div>
       )
      
    }
}

export default Message;
