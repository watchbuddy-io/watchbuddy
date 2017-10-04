import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Home from './Home.jsx';


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
      <Home />
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));