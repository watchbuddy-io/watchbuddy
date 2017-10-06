import React, { Component } from 'react';
import ShowList from './components/ShowList.jsx';
import Navbar from './components/Navbar.jsx';
import AddShow from './components/AddShow.jsx';
import { Container, Header, Icon, Message } from 'semantic-ui-react'

class UserHome extends Component {
  constructor(props) {
  	super(props);
    this.state = {
      username: this.props.username,
      show: '',
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0,
      showAdded: 'false'
    };
  }

  handleDay(day){
    let setObj = {};
    if (this.state[day] === 0) {
      setObj[day] = 1;
      this.setState(setObj, () => console.log(this.state[day]));
    } else {
      setObj[day] = 0;
      this.setState(setObj, () => console.log(this.state[day]));
    }
  }

  getShow(show){
    this.setState({show}, () => console.log(this.state.show));
  }

  render () {
    return (<div>

      <Navbar loggedIn='true' changeView={this.props.changeView} getShowList={this.props.getShowList}/>
        <Container>

        {this.state.showAdded === 'true' 
        ? <div>
        <Header as='h3' textAlign='center'>
            You are catching up on The Big Bang Theory
          </Header>

          <Header as='h4' textAlign='center'>
            13 days left!
          </Header>
        </div>

        : <div>
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
        <ShowList getShow={this.getShow.bind(this)} showList={this.props.showList} />}
        </div>
        }
      </Container>
    </div>);
  }
}

export default UserHome;