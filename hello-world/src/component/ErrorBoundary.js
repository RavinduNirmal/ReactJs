// import React, { Component } from 'react'

// export class ErrorBoundary extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          haserror:false
//       }
//     }

//    static  getDerivedStateFromError(){

//         return {

//             haserror:true
//         }

//    }

//   render() {
    
//       if(this.state.haserror){
          
//         return(
//             <div>Something went wrong</div>
//         )
//       }

//       return this.props.children
    
//   }
// }

// export default ErrorBoundary


// import React, { Component } from 'react'

// export class ErrorBoundary extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          hasError:false
//       }
//     }

//     static getDerivedStateFromError(){

//         return{
            
//             hasError:true
//         }

//     }

//     componentDidCatch(error,info){

//         console.log(error)
//         console.log(info)
//     }

//   render() {
     
//     if(this.state.hasError){
//         return(
//             <div>
//                 Something Went wrong
//             </div>
//         )
//     }

//     return this.props.children
//   }
// }

// export default ErrorBoundary


import React, { Component } from 'react'

 class ErrorBoundary extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }

    static getDerivedStateFromError(){

        return{

            hasError:true
        }
    }

    componentDidCatch(error,info){
       
         console.log(error)
         console.log(info)

    }
  render() {
   
    if(this.state.hasError){

        return(
            <div>Something Went Wrong</div>
        )
    }

    return this.props.children
  }
}

export default ErrorBoundary