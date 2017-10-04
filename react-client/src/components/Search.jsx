import React, { Component} from 'react';
import $ from 'jquery';
import { Button, Icon } from 'semantic-ui-react'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  getText(event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //send text to server via a POST request
    console.log(this.state.text);
    
    // $.ajax({
    //   url: '/submit',
    //   method: 'POST',
    //   contentType: 'application/json',
    //   data: JSON.stringify({topic: this.state.text}),
    //   success: data => console.log(data),
    //   error: data => console.log('error in submit post')
    // });

    this.setState({text: ''});
  }

  render() {
    return (

      <form className="ui form">
        <div className="field">
          <input type="text" name="first-name" placeholder={this.state.text} onChange={this.getText.bind(this)}/>
        </div>
      
        <Button animated='fade' onClick={this.handleSubmit.bind(this)}>
          <Button.Content visible>
            <Icon name='search' />
          </Button.Content>
          <Button.Content hidden>
            Search
          </Button.Content>
        </Button>

      </form>

    );
  }
}

export default Search;