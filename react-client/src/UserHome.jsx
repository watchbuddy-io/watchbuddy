import React, { Component } from 'react';
import ShowList from './components/ShowList.jsx';
import Navbar from './components/Navbar.jsx';
import AddShow from './components/AddShow.jsx';
import { Container, Header, Icon, Message } from 'semantic-ui-react'

class UserHome extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      username: '',
      show: '',
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0
    };
  }

  handleDay(day){
    let setObj = {};
    if (this.state[day] === 0) {
      setObj[day] = 1;
      this.setState(setObj)
    } else {
      setObj[day] = 0;
      this.setState(setObj)
    }
    console.log(this.state[day]);
  }

  render () {
    return (<div>
      <Navbar loggedIn='true'/>
        <Container>
        <Header as='h3' textAlign='center'>
          <Icon name='film'/> Welcome!
        </Header>

        <Message>
          <Message.Header>
            Get started
          </Message.Header>
          <p>
            We see you haven't added a TV show yet. Search for your favorite TV show and click the calendar icon to add it to your watch list!
          </p>
        </Message>

        <AddShow handleDay={this.handleDay.bind(this)}/>
        <ShowList />
      </Container>
    </div>);
  }
}

export default UserHome;