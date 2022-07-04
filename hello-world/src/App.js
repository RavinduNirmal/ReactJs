import React from 'react';
// import React,{ Component } from 'react';
import './App.css'
import Greet from './component/greet';
import Welcome from './component/Welcome';
import Hello from './component/hello';
import Message from './component/Message';
import Count from './component/count';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/classClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Stylesheet from './component/Stylesheet';
import Inline from './component/Inline';
import './component/appStyle.css';
import Styles from './component/appstyles.module.css';

function App() {
  return (
          
        <div className="App">
          <h1 className='error'>Error</h1>
          <h1 className={Styles.success}>Success</h1>
           {/* {/* <Greet/>
            <Welcome/> */}
            {/* <Hello /> */}
            {/* <Greet name="saman" heroname="Batman">
              <p>This is childern component</p>
            </Greet>
            
            <Greet name="nimal" heroname="wonder">
              <button>Action</button>
            </Greet>
            
            <Greet name="kasun" heroname="superman"/> */}

            {/* <Welcome  name="saman" heroname="Batman"/>
            <Welcome name="nimal" heroname="wonder"/>
            <Welcome name="kasun" heroname="superman"/>   
            */}
            {/* <Message/>

           <Count/> */}

           {/* <FunctionClick/>
           <ClassClick/> */}
{/* 
           <EventBind/> */}
            {/* <ParentComponent/> */}
            {/* <UserGreeting/> */}

            {/* <NameList/> */}
            {/* <Stylesheet font={true}/> */}
            <Inline/>
         </div>  
   
  );
}

export default App;

// class App extends Component{
//   render(){
//     return(
//      
//     );
//   }
// }

// export default App;


