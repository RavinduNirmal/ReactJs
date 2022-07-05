import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'

 class ParentComp extends Component {

   constructor(props) {
     super(props)
   
     this.state = {
        name:'Ravindu'
     }
   }

   componentDidMount(){

    setInterval(() => {
        this.setState({

            name:'Nirmal'
        })     
        },2000)
   }

  render() {

    console.log('ParentComponent');

    return (
      <div>
        
          ParentComponent
        <RegularComp name = {this.state.name}/>
        <PureComp name = {this.state.name}/>

      </div>
    )
  }
}

export default ParentComp