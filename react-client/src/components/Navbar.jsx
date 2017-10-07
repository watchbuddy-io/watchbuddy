import React, { Component } from 'react';
import { Input, Menu, Button, Icon } from 'semantic-ui-react';
import $ from 'jquery';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: 'false',
      term: ''
    }
  }

  componentWillMount() {
    if (this.props.loggedIn === 'true') {
      this.setState({
        loggedIn: 'true'
      });
    }
  }

  handleChange(event) {
    this.setState({term: event.target.value});
    console.log(this.state.term);
  }

  handleSubmit(event) {
    console.log('submitting!');
    $.ajax({
      url: '/search',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({term: this.state.term}),
      success: data => {this.props.getShowList(data)},
      error: data => console.log('err from search submit')
    });
  }

  changeViewToLogin(){
    this.props.changeView('Login');
  }

  changeViewToUserHome() {
    this.props.changeView('UserHome');
  }


  render () {
    return (

      <Menu className="ui inverted menu" inverted color='green'>

        <Menu.Item onClick={this.changeViewToUserHome.bind(this)}>
          <h2><Icon name ='film' /> <Icon name='child' /> WatchBuddy</h2>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
          
            <Input placeholder='Search...' onChange={this.handleChange.bind(this)}/>
            <Button icon color='black'>
              <Icon name='search' className='icon' onClick={this.handleSubmit.bind(this)}/>
            </Button>

          </Menu.Item>

          {this.state.loggedIn === 'true' ? 
            <Menu.Item>
              <Button>Logout</Button>
            </Menu.Item>
            : 
            <Menu.Item>
              <Button color='black' onClick={this.changeViewToLogin.bind(this)}>Log-in</Button>
            </Menu.Item>
          }
          
        </Menu.Menu>

      </Menu>);
  }
}

export default Navbar;