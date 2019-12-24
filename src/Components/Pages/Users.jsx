import React, { Component } from 'react'
import axios from 'axios'
import UserGrid from '../Organisms/UserGrid'


class Users extends Component {
  constructor(props){
    super(props)

    this.state = {
      users: []
    }
  }
/* utilizando el metodo fecth */
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users', {method: 'get'})
  //   .then( response => response.json())
  //   .then(response2 => {
  //     this.setState({
  //       users: response2
  //     })
  //   })
  // }

/* utilizando el axios lo cual debe de instalar */
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
      this.setState({
        users: resp.data
      })
    })
  }

  render(){
    const { users } = this.state
    return <UserGrid users={users}/>
  }
}

export default Users