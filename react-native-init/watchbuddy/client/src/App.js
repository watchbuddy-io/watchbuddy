import axios from 'axios';
import content from './utils/content';
import dummyData from './data/dummyData';
import dummyRequestData from './data/dummyRequestData';
import Nav from './components/Nav';
import React from 'react';
import screen from './utils/screen';
import views from './utils/views';

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
      view: 'MovieSwipeDeck',
      data: dummyRequestData.data,
      screenDimensions: screen.getScreenDimensions()
    }
  }

  changeView(view) {
    this.setState({ view: view });
  }

  renderView(data) {
    var Content = views[this.state.view];

    return (
      <Content
        data={data}
        dimensions={content.getContentDimensions(this.state.screenDimensions)}
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
    return (
      <Container style={{ flexDirection: "column" }}>
        {this.renderNav()}
        {this.renderView(this.state.data)}
      </Container>
    );
  }
}
