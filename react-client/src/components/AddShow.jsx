import React, { Component } from 'react';
import { Container, Form, Button, Checkbox } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class AddShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: moment()
    };
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date
    });
  }

  render () {
    return (
      <Container>
        <Form>
          <Form.Field>
            <label>Username</label>
            <input placeholder='Username' />
          </Form.Field>
          <Form.Field>
            <label>Show</label>
            <input placeholder='Show' />
          </Form.Field>
          <Form.Field>
            <label>Season</label>
            <input placeholder='Season' />
          </Form.Field>
          <Form.Field>
            <label>Episode</label>
            <input placeholder='Episode' />
          </Form.Field>
          <Form.Field>
            <label>Start date</label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleStartDateChange.bind(this)}
            />
          </Form.Field>
          <Form.Field>
            <label>End date</label>
            <DatePicker
              selected={this.state.endDate}
              onChange={this.handleEndDateChange.bind(this)}
            />
          </Form.Field>
          
          <p>Which days do you have free?</p>

          <Form.Field>
            <Checkbox label='Monday'/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Tuesday'/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Wednesday'/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Thursday'/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Friday'/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Saturday'/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Sunday'/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
  );
  }
}

export default AddShow;