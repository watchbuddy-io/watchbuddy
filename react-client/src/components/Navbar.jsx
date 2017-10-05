import React, { Component } from 'react';
import { Input, Menu, Button, Icon } from 'semantic-ui-react'

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
    //make ajax call here
    console.log('submitting!');
  }

  changeViewToLogin(){
    this.props.changeView('Login');
  }

  changeViewToUserHome() {
    this.props.changeView('UserHome');
  }


  render () {
    return (

      <Menu className="ui inverted menu">

        <Menu.Item>
          <Icon name ='film' /> <Icon name='child' /> WatchBuddy
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item>
            <Input placeholder='Search...' onChange={this.handleChange.bind(this)}/>
            <Button>
              <Icon name='search' className='icon' onClick={this.handleSubmit.bind(this)}/>
            </Button>
          </Menu.Item>

          
          {this.state.loggedIn === 'true' ? 
            <Menu.Item>
              <Button>Logout</Button>
            </Menu.Item>
            : <span>
                <Menu.Item>
                  <Button onClick={this.changeViewToLogin.bind(this)}>Log-in</Button>
                </Menu.Item>
                <Menu.Item>
                  <Button onClick={this.changeViewToUserHome.bind(this)}>Post-login</Button>
                </Menu.Item>
            </span>
          }
          

        </Menu.Menu>

      </Menu>);
  }
}

export default Navbar;