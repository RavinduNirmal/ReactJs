import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext  from './userContext'


 class ComponentE extends Component {
  render() {
    return (
      <div>

        UserContext-- {this.UserContext}
        <ComponentF/>
      </div>
    )
  }
}

ComponentE.UserType = UserContext

export default ComponentE