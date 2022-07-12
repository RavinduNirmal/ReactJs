// import React, {Component } from 'react'
// import UpdatedComponent from './withCounter'

// class ClickCounter extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        count:0
//     }
//   }

//   ClickCounter = () => {

//     this.setState(prevState =>{

//         return ({

//           count:prevState.count +1
//         })
//     } ,() =>console.log('Clicked Value',this.state.count))

//     console.log(this.state.count)
//   }
//   render() {

//     const {count} =this.state
//     return (
//       <div>
//         <h2>Counter --{count}</h2>
//         <button onClick={this.ClickCounter}>{this.props.name}Clicked {count} counter</button>
//       </div>
//     )
//   }
// }

// export default UpdatedComponent(ClickCounter)


import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {

  render() {

    const {count ,IncrementCount} = this.props

    return (
      <div>
        {/* ClickCounter --{count}<br/> */}
        <button onClick={IncrementCount} >
          {/* {this.props.heroname} */}
          {this.props.name}
          Clicked {count}time
          </button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter, 5)