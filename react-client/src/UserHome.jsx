import React, { Component } from 'react';
import ShowList from './components/ShowList.jsx';
import Navbar from './components/Navbar.jsx';
import AddShow from './components/AddShow.jsx';
import { Container, Header, Icon, Message } from 'semantic-ui-react'

class UserHome extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      showSelected: 'false',
      addedShowEpisodes: [],
    };
  }

  render () {
    return (<div>
      <Navbar
      loggedIn='true' 
      changeView = { this.props.changeView } 
      getShowList = { this.props.getShowList } />

        <Container>
          <div>
            <Header as='h3' textAlign='center'>
              <Icon name='film'/> Welcome!
            </Header>

            <Message>
              <Message.Header>
                Get started
              </Message.Header>
              <p>We see you haven't added a TV show yet. Search for your favorite TV show and click the calendar icon to add it to your watch list!</p>
            </Message>

            <ShowList 
              getShow = { this.props.getShow } 
              showList = { this.props.showList }
              addedShowEpisodes = { this.state.addedShowEpisodes }
              showName = { this.props.showName }
              loggedIn = 'true'
              addShow = { this.props.addShow }
              showSelected = { this.props.showSelected }
            />

            <AddShow
              showId = { this.props.showId } 
              showName = { this.props.showName }
              addedShowEpisodes = { this.state.addedShowEpisodes }
              username = { this.props.username } 
            />
            </div>
          </Container>
        </div>);
  }
}

export default UserHome;