import React, { Component } from 'react';
import ShowList from './components/ShowList.jsx';
import Navbar from './components/Navbar.jsx';
import { Container, Header, Icon, Button, Image } from 'semantic-ui-react'


class Home extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (<Container fluid>

      <Navbar changeView={this.props.changeView}/>
      
        <Header as='h3' icon textAlign='center' inverted color='green'>
          <Header.Content>
            No time to catch up on your favorite TV show?
            <Header icon textAlign='center'>
              WatchBuddy's got you covered
            </Header>
          </Header.Content>
        </Header>

        <Header as='h3' icon textAlign='center' inverted color='green'>
          <Icon name='add' circular />
          <Header.Content>
            Add a TV show
          </Header.Content>
        </Header>

        <Header as='h3' icon textAlign='center' inverted color='green'>
          <Icon name='checked calendar' circular />
          <Header.Content>
            WatchBuddy will find time in your busy schedule to get caught up
          </Header.Content>
        </Header>

      <ShowList />

    </Container>);
  }
}

export default Home;