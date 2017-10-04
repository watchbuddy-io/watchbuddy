import React, { Component } from 'react';
import ShowList from './components/ShowList.jsx';
import Navbar from './components/Navbar.jsx';
import { Container, Header, Icon } from 'semantic-ui-react'


class Home extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (<Container fluid>

      <Navbar />
      <Header as='h1' textAlign='center'>
        <Icon name='film'/> Recommended
      </Header>
      <ShowList />

    </Container>);
  }
}

export default Home;