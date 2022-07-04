// import React, { Component } from 'react'
// import LifeCycleB from './LifeCycleB';

// export class LifeCycleA extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//         name:'ravindu'
//     }

//     console.log('LifeCycleA Constructor');
//   }

//   static getDerivedStateFromProps(props,state){

//     console.log('LifeCycleA getDerivedStateFromProps');
//       return null;
//   }

//   componentDidMount(){
//     console.log('LifeCycleA componentDidMount');
//   }


//   render() {


//     console.log('LifeCycleA Render');

//     return (
        
//       <div>
//           LifeCycleA
//           <LifeCycleB/>
//      </div>
//     )
//   }
// }

// export default LifeCycleA




import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

export class LifeCycleA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
        name:'ravindu'
    }

    console.log('LifeCycleA Constructor');
  }

  static getDerivedStateFromProps(props,state){

    console.log('LifeCycleA getDerivedStateFromProps');
      return null;
  }

//   componentDidMount(){
//     console.log('LifeCycleA componentDidMount');
//   }


  shouldComponentUpdate(){

    console.log('LifeCycleA shouldComponentUpdate');
    return true;
  }
  

  getSnapshotBeforeUpdate(prevProps,preState){
   
    console.log('LifeCycleA getSnapshotBeforeUpdate');

    return null;

  }


  componentDidUpdate(){

    console.log('LifeCycleA componentDidUpdate');
  }

  changeState = () => {

    this.setState({

        name:'Hello'
    })
  }


  render() {


    console.log('LifeCycleA Render');

    return (
        
      <div>
          LifeCycleA
          <button onClick={this.changeState}>Click Me</button>
          <LifeCycleB/>
     </div>
    )
  }
}

export default LifeCycleA