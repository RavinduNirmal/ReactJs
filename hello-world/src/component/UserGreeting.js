import React, { Component } from 'react'



 class UserGreeting extends Component {


    constructor(props) {
        super(props)
      
        this.state = {
            isLoggedIn : false
        }
      }

  render() {
    

   
    // return this.state.isLoggedIn && <div>Welcome Ravindu</div>
   
   
   
    //short another way
//    return this.state.isLoggedIn ? (
//     <div>Welcome ravindu</div>
//    ) : (
//     <div>Welcome Guest</div>
//    )

     //Recommend way
      let message

      if(this.state.isLoggedIn){
        message = <div>Welcome Ravindu</div>
      }
      else{
        message = <div>Welcome Guest</div>
      }

       return (
        <div>
        {message}</div>
     )
     
        // if(this.state.isLoggedIn){
        //    return <div>Hello Ravindu</div>
        // }
        // else{
        //    return  <div>Hello Guest</div>
        // }
   
   
  }
}

export default UserGreeting