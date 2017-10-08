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
      username: '',
      showList: [{
        firstAirDate: '2000-01-01',
        genres: ['Daniel'],
        image: '',
        summary: 'Default summary'
      }],
      showSelected: 'false'
    };
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  getUsername(username) {
    this.setState({username}, () => console.log('username: ', this.state.username));
  }

  getShowList(data){
    this.setState({showList: data}, () => console.log(this.state.showList))
  }

  addShow() {
    this.setState({showSelected: 'true'});
  }

  getView() {
    if (this.state.view === 'Login') {
      return <Login 
      changeView={this.changeView.bind(this)} 
      getUsername={this.getUsername.bind(this)}
      />
    } else if (this.state.view === 'Signup') {
      return <Signup 
      changeView={this.changeView.bind(this)} 
      getUsername={this.getUsername.bind(this)
      }/>
    } else if (this.state.view === 'UserHome') {
      return <UserHome 
      loggedIn='true' 
      username={this.state.username} 
      getShowList={this.getShowList.bind(this)} 
      showList={this.state.showList}
      addShow={this.addShow.bind(this)}
      showSelected={this.state.showSelected}
      />
    } else if (this.state.view === 'Home') {
      return <Home 
      changeView={this.changeView.bind(this)} 
      getShowList={this.getShowList.bind(this)} 
      showList={this.state.showList}
      />
    }
  }

  render () {
    return (<div>
      {this.getView()}
    </div>);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));