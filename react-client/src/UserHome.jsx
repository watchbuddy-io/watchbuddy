import React, { Component } from 'react';
import ShowList from './components/ShowList.jsx';
import Navbar from './components/Navbar.jsx';
import AddShow from './components/AddShow.jsx';
import { Container, Header, Icon, Message } from 'semantic-ui-react'

class UserHome extends Component {
  constructor(props) {
  	super(props)
  }

  render () {
    return (<Container fluid>

      <Navbar loggedIn='true'/>
      <Header as='h3' textAlign='center'>
        <Icon name='film'/> Welcome back!
      </Header>

      <Message>
        <Message.Header>
          Get started
        </Message.Header>
        <p>
          We see you haven't added a TV show yet. Search for your favorite TV show and click the calendar icon to add it to your watch list!
        </p>
      </Message>

      <AddShow />
      <ShowList />

    </Container>);
  }
}

export default UserHome;