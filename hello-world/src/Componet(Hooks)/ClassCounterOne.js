// import React, { Component } from 'react'

// export class ClassCounterOne extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          Count:0
//       }
//     }

//     componentDidMount(){

//          document.title=`You Clicked ${this.state.Count} Times`
//     }

//     componentDidUpdate(prevProps,prevState){
//         document.title  =`You Clicked ${this.state.Count} Times`
//     }

//   render() {
//     return (
//       <div>
//         <button onClick={() => this.setState({Count:this.state.Count + 1})}>Clicked {this.state.Count} Times</button>
//       </div>
//     )
//   }
// }

// export default ClassCounterOne


import React, { Component } from 'react'

class ClassCounterOne extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
 componentDidMount() {
     document.title=`You clicked ${this.state.count}`
 }

 componentDidUpdate(prevProps,prevState) {

  document.title=`You clicked ${this.state.count}`
 }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({count:this.state.count+1})}>Clicked {this.state.count}count</button>
       
      </div>
    )
  }
}

export default ClassCounterOne