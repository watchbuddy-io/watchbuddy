import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import ShowList from './components/ShowList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      view: 'home'
    };
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  componentDidMount() {
    $.ajax({
      url: '/surveys', 
      success: (data) => {
        console.log(data);
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
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

ReactDOM.render(<App />, document.getElementById('app'));