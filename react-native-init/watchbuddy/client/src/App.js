import axios from 'axios';
import content from './utils/content';
import dummyRequestData from './data/dummyRequestData';
import Nav from './components/Nav';
import React from 'react';
import screen from './utils/screen';
import views from './utils/views';

import FBSDK, { 
  AccessToken,
  LoginButton,
  LoginManager 
 } from 'react-native-fbsdk';

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
      screenDimensions: screen.getScreenDimensions()
    }

    this.fbToken = AccessToken.getCurrentAccessToken().then(data => {
      if (data) {
        this.fbToken = data;
      }
    })
      .catch(err => console.log('Error in App.js FB Access Token', err));

    this.changeView = this.changeView.bind(this);
  }

  changeView(view, data, favorites) {
    if (!data) {
      this.setState({ view: view });
    } else {
      this.setState({
        view: view,
        data: data
      });
    }
  }

  renderView(data) {
    var Content = views[this.state.view];

    return (
      <Content
        data={data}
        dimensions={(this.state.view !== 'WelcomeFB') ? content.getContentDimensions(this.state.screenDimensions, this.state.view) : this.state.screenDimensions}
        changeView={this.changeView}
        fbToken={this.fbToken}
      />
    );
  }

  renderNav() {
    return (
      <Nav 
        view={this.state.view}
        dimensions={content.getNavDimensions(this.state.screenDimensions, this.state.view)}
        currentView={this.state.view}
        changeView={this.changeView}
        fbToken={this.fbToken}
      />
    );
  }

  render() {
    return (
      <Container style={{ flexDirection: "column" }} bounces={false}>
        {(this.state.view !== 'WelcomeFB') ? this.renderNav() : null}
        {this.renderView(this.state.data)}
      </Container>
    );
  }
}
