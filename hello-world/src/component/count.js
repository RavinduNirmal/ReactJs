// import React, { Component } from 'react'

// export class Count extends Component {

//  constructor(props) {
//    super(props)
 
//    this.state = {
//       count:0
//    }
//  }

//  Increment(){

//     this.setState({

//         count:this.state.count+1
//     }, () => {console.log('Increment value' ,this.state.count)})

//     console.log( this.state.count)
//  }


//   render() {
//     return (
//       <div>
//         <h1>Count - {this.state.count}</h1>
//         <button onClick={() => {this.Increment()}}>Increment</button>
//       </div>
      
//     )
//   }
// }

// export default Count;

// import React ,{Component} from "react";

// class Count extends Component{

//     constructor(){
//         super()

//         this.state = {

//             count:0
//         }
//     }

//     Increment(){

//         this.setState(
//             prevState => ({
//                 count:prevState.count+1
//             })  
//         )

//         console.log(this.state.count)
//     }

//     IncremenFive(){

       
//         this.Increment();
//         this.Increment();
//         this.Increment();
//         this.Increment();
//         this.Increment();

//     }


//     render(){

//         return(
//             <div>
//                 <h1>Count -- {this.state.count}</h1>
//                 <button onClick={() => {this.IncremenFive()}}>Increment</button>
//             </div>
//         )
//     }
// }

// export default Count

import React , {Component} from 'react';

class Count extends Component{

    constructor(){
        super()

        this.state = {

            count:0
        }
    }

    ChangeIncrement(){

        this.setState(

            prevState => ({
                 
                count:prevState.count+1

            }),
              () => { console.log(this.state.count)}
         )
         console.log(this.state.count)
    }

    ChangeIncrementFive(){

        this.ChangeIncrement();
        this.ChangeIncrement();
        this.ChangeIncrement();
        this.ChangeIncrement();
        this.ChangeIncrement();

    }


    render(){

        return(

            <div>
                <h1>Count -- {this.state.count}</h1>
                <button onClick={() => {this.ChangeIncrementFive()}}>Increment</button>
            </div>
        )
    }
}

export default Count;