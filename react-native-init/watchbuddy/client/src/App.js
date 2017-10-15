import axios from 'axios';
import content from './utils/content';
import dummyData from './data/dummyData';
import dummyRequestData from './data/dummyRequestData';
import Nav from './components/Nav';
import React from 'react';
import screen from './utils/screen';
import views from './utils/views';

import FBSDK, { LoginManager, LoginButton, AccessToken } from 'react-native-fbsdk';

import { 
  Spinner
} from 'nachos-ui';

import { 
  Container, 
} from 'native-base';

import {
  Component
} from 'react';

import {
  Dimensions,
  View
} from 'react-native';

export default class App extends Component<{}> {
  constructor() {
    super();

    this.state = {
      view: 'WelcomeFB',
      data: dummyRequestData.data,
      screenDimensions: screen.getScreenDimensions(),
      loginInfoLoaded: false
    }

    this.userLoggedin = false;

    AccessToken.getCurrentAccessToken().then(data => {
      this.loggedIn = data ? true : false;
      this.setState({
        loginInfoLoaded: true
      });
    }).catch(err => console.log('err', err));
  }

  changeView(view, data) {
    this.setState({ view: view });
    if (data) {
      this.setState({data: data});
    }
  }

  renderView(data) {
    var Content = views[this.state.view];

    return (
      <Content
        data={data}
        dimensions={(this.state.view !== 'WelcomeFB') ? content.getContentDimensions(this.state.screenDimensions) : this.state.screenDimensions}
        changeView={this.changeView.bind(this)}
      />
    );
  }

  renderNav() {
    return (
      <Nav dimensions={content.getNavDimensions(this.state.screenDimensions)} />
    );
  }

  render() {
    if (this.state.view !== 'WelcomeFB') {
      return (
        <Container style={{ flexDirection: "column" }}>
          {this.renderNav()}
          {this.renderView(this.state.data)}
        </Container>
      );
    } else if (this.state.loginInfoLoaded && !this.userLoggedIn) {
      return (
        <Container style={{ flexDirection: "column" }}>
          {this.renderView(this.state.data)}
        </Container>
      );
    } else {
      return (
        null
      );
    }
  }
}
