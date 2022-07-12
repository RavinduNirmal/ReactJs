// const UpdatedComponent = OriginalComponent => {

//     class NewComponent extends Component{

//       render(){
          
//         return <OriginalComponent name='Ravindu'/>
//       }
       
//     }

//     return NewComponent
// }

// export default UpdatedComponent;


import React,{Component} from 'react';

const WithCounter = (WrappedComponent ,IncrementNumber) => {

    class WithCounter extends Component{

        
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }

  IncrementCount = () => {

    this.setState(prevState =>
         ({

          count:prevState.count+ IncrementNumber
    }), () => {console.log(this.state.count)}
    // {
    //     return {count:prevState.count +1}
    // }
    
    )


  }

        render(){

            console.log(this.props.name)
            return (
                <div>
                    <WrappedComponent 
              
              count={this.state.count}
              IncrementCount={this.IncrementCount}
              heroname='Ravindu'

              {...this.props}
              />
                </div>
            )
        }
    }

    return WithCounter;

}

export default WithCounter;