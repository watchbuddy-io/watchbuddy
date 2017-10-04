import React, { Component } from 'react';
import ShowList from './components/ShowList.jsx';
import Navbar from './components/Navbar.jsx';
import { Container, Header, Icon } from 'semantic-ui-react'

class UserHome extends Component {
  constructor(props) {
  	super(props)
  }

  render () {
    return (<Container fluid>

      <Navbar loggedIn='true'/>
      <Header as='h1' textAlign='center'>
        <Icon name='film'/> Welcome back, name!
      </Header>


    </Container>);
  }
}

export default UserHome;