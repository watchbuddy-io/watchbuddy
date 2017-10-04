import React, { Component} from 'react';
import $ from 'jquery';

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
    //send text to server via a POST request
    console.log(this.state.text);
    
    $.ajax({
      url: '/submit',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({topic: this.state.text}),
      success: data => console.log(data),
      error: data => console.log('error in submit post')
    });



    this.setState({text: ''});
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.text} onChange={this.getText.bind(this)}/>
        <button type="button" onClick={this.handleSubmit.bind(this)}>Search shows</button>
      </form>
    );
  }
}

export default Search;