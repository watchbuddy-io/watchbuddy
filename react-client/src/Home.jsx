import React, { Component } from 'react';
import ShowList from './components/ShowList.jsx';
import Navbar from './components/Navbar.jsx';
import { Container, Header, Icon, Button, Image } from 'semantic-ui-react'


class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextprops', nextProps);
    
  }

  render () {
    return (<Container fluid>

      <Navbar changeView={this.props.changeView} getShowList={this.props.getShowList}/>
      
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
            WatchBuddy will find time in your busy schedule so you can get caught up
          </Header.Content>
        </Header>

      <ShowList showList={this.props.showList}/>

    </Container>);
  }
}

export default Home;