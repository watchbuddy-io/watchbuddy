import React, { Component } from 'react';
import Search from './components/Search.jsx';
import ShowList from './components/ShowList.jsx';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (<div>
      <h1>WatchBuddy</h1>
      <a href="#">Login</a>
      <Search />
      <ShowList />
    </div>);
  }
}

export default Home;