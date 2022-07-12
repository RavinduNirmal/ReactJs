// import React, { Component } from 'react'
// import OriginalComponent from './withCounter'

// export class HoverCounter extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }

//     moveMouse = () =>{

//         this.setState(prevState =>({

//             count:prevState.count +1
//         }), ()=> {console.log('MouseMoveCount' , this.state.count)})

        
//     }
//   render() {

//     const {count} = this.state
//     return (
//       <div>
//         <h2 onMouseMove={this.moveMouse}>Counter --{this.props.name}{count}</h2>
//       </div>
//     )
//   }
// }

// export default OriginalComponent(HoverCounter)





import React, { Component } from 'react'
import UpdatedComponent from './withCounter'



export class HoverCounter extends Component {

  render() {

    const {count,IncrementCount} = this.props
    return (
      <div>
      <h2 onMouseMove={IncrementCount}>{this.props.heroname}HoverCount--{count}</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HoverCounter , 10)