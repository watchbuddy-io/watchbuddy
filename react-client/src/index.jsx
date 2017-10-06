import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Home from './Home.jsx';
import UserHome from './UserHome.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      view: 'Home',
      username: ''
    };
  }

  changeView(option) {
    console.log(option);
    this.setState({
      view: option
    });
    // console.log(this.state.view);
  }

  getView() {
    if (this.state.view === 'Login') {
      return <Login changeView={this.changeView.bind(this)}/>
    } else if (this.state.view === 'Signup') {
      return <Signup />
    } else if (this.state.view === 'UserHome') {
      return <UserHome loggedIn='true'/>
    } else if (this.state.view === 'Home') {
      return <Home changeView={this.changeView.bind(this)}/>
    }
  }

  componentDidMount() {
    // $.ajax({
    //   url: '/surveys', 
    //   success: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  render () {
    return (<div>
      {this.getView()}
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));