import React, { Component } from 'react'
import axios from 'axios'
// import { Table, Container } from "react-bootstrap";

export class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorMsg:''
      }
    }

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)

            this.setState({
               
                posts:response.data
            })
        })
        .catch(error => {
            console.log(error)

            this.setState({

                errorMsg:'Not Retriving Data'
            })
        })
    }

  render() {

    const {posts,errorMsg} = this.state
    return (
      <div>
        
        
       
        {
            posts.length ?
            posts.map((post) =><div key={post.id}>{post.title}</div>):null
        }

        {
            errorMsg ? <div>{errorMsg}</div> :null
        }


  {/* <ul>
        {
          this.state.posts.map(post =>(<li key={post.id}>{post.title}</li>)
              
            )
        }
      </ul> */}

{/* 
<Container>
                            <h2> ALL Get LIST</h2>
                            <Table striped bordered hover variant="dark" size="sm">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.posts.length === 0 ?
                                            <tr>
                                                <td>Data Not Available!</td>
                                            </tr>
                                            :
                                            this.state.posts.map((i) => (
                                                <tr key={i.id}>
                                                    <td>{i.id}</td>
                                                    <td>{i.title}</td>
                                                    
                                                </tr>
                                            ))
                                    }
                                </tbody>
                            </Table>
                        </Container> */}

      </div>
    )
  }
}

export default PostList



