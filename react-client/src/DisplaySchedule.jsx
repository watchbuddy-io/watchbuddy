import React, { Component } from 'react';
import $ from 'jquery';
import ShowList from './components/ShowList.jsx';
import Navbar from './components/Navbar.jsx';
import AddShow from './components/AddShow.jsx';
import { Container, Header, Icon, Message } from 'semantic-ui-react'

class DisplaySchedule extends Component {
  constructor(props) {
  	super(props);
    this.state = {
    };
  }

  render () {
    return (<div>
      <Navbar
      loggedIn='true' 
      changeView = { this.props.changeView } 
      getShowList = { this.props.getShowList } />
      </div>);
    }
}

export default DisplaySchedule;