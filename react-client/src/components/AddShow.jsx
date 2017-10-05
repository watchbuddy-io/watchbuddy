import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'

class AddShow extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <Form>
        <Form.Field>
          <label>Which days do you have free?</label>
          <input placeholder='Which days do you have free?' />
        </Form.Field>
        <Form.Field>
          <label>When is your deadline to catch up?</label>
          <input placeholder='When is your deadline to catch up?' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
  );
  }
}

export default AddShow;