import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         email:'',
         comment:'',
         language:'PHP'

      }
    }

    changeUsernameHandler = (event) => {
       
        this.setState({

            username:event.target.value
        })
    }

    
    changeEmailHandler = (event) => {

        this.setState({

            email:event.target.value
        })
    }

    
    changeCommenthandler = (event) => {

        this.setState({

            comment:event.target.value
        })
    }


    changeLanguageHandler = (event) => {

        this.setState({

            language:event.target.value
        })
    }

    HandleSubmit = (event) => {
   
         alert(`I am ${this.state.username} and ${this.state.language} Coder `);
         event.preventDefault();
    }

  render() {
    return (
      <div>
        <div>Register Form</div>
          <form onSubmit={this.HandleSubmit}>
            
          <div>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.changeUsernameHandler}/>
         </div> 

            <div>
            <label>Email</label>
            <input type='email' value={this.state.email} onChange={this.changeEmailHandler}/>
            </div>

            <div>
            <label>TextArea</label>
            <textarea value={this.state.comment} onChange={this.changeCommenthandler}/>
            </div>

            <div>
           <label>Language</label>
            <select value={this.state.language} onChange={this.changeLanguageHandler}>
               <option value='PHP'>PHP</option>
               <option value='Java'>Java</option>
               <option value='Mern'>Mern</option>
            </select>

            </div>
            <button type='submit'>Submit</button>
          </form>

      </div>
    )
  }
}

export default Form