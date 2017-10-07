import React, { Component } from 'react';
import { Container, Form, Button, Checkbox, Dropdown } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import  _ from 'lodash';

class AddShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
      startDate: moment(),
      endDate: moment(),
      startDatejs: '',
      endDatejs: '',
      seasonOptions: [
        {
          text: 'Season 1',
          value: 'Default value'
          // image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
        }
      ],
      episodeOptions: [
        {
          text: 'Episode 1',
          value: 'Default value'
          // image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
        }
      ],
      originalSeasonObj: {},
      selectedSeason: '',
      selectedEpisode: ''
    };
  }

  componentWillReceiveProps(episodes) {
    let seasonsObj = episodes.addedShowEpisodes.seasons;
    this.setState({originalSeasonObj: seasonsObj});
    let seasonArr = [];
    let episodeArr = [];
    console.log(seasonsObj);
    _.each(seasonsObj, (value, key, index) => {
      seasonArr.push({value: key, text: key});
      episodeArr.push({key: key, value: value, text: value});
    });
    this.setState({seasonOptions: seasonArr});
    this.setState({episodeOptions: episodeArr});
  }

  handleSelectedSeason(event, { value }) {
    this.setState({ selectedSeason: value }, () => console.log('selectedSeason:', this.state.selectedSeason));

    //grab selected season
    let selectedValue = value;
    let episodeNum = 0;

    //get the corresponding num of episodes for the selected season
    _.each(this.state.originalSeasonObj, (value, key) => {
        if (key === selectedValue) {
          episodeNum = value;
        }
    });

    //populate episodeOptions with array of episodes
    let newEpisodeArr = [];
    _.times(episodeNum, (index) => {
      let epObj = {};
      epObj.text = index;
      epObj.value = index;
      newEpisodeArr.push(epObj);
    });
    this.setState({episodeOptions: newEpisodeArr}, console.log(this.state.episodeOptions));
  }

  handleSelectedEpisode(event, { value }) {
    this.setState({ selectedEpisode: value }, () => console.log(this.state.selectedEpisode))
  }

  handleStartDateChange(date) {
    this.setState({
      startDate: date
    }, () => {
      let datejs = this.state.startDate.toDate()
      this.setState({startDatejs: datejs}, () => console.log(this.state.startDatejs))
    });
  }

  handleEndDateChange(date) {
    this.setState({
      endDate: date
    }, () => {
      let datejs = this.state.endDate.toDate()
      this.setState({endDatejs: datejs}, () => console.log(this.state.endDatejs))
    });
  }

  render () {
    const { currentValues } = this.state
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
            <Dropdown placeholder='Select season' fluid selection 
            options={this.state.seasonOptions} 
            onChange={this.handleSelectedSeason.bind(this)} 
            value={currentValues}
            />
          </Form.Field>
          <Form.Field>
            <label>Episode</label>
            <Dropdown placeholder='Select episode' fluid selection 
            options={this.state.episodeOptions} 
            onChange={this.handleSelectedEpisode.bind(this)} 
            value={currentValues}
            />
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
            <Checkbox label='Monday' onClick={() => this.props.handleDay('monday')}/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Tuesday' onClick={() => this.props.handleDay('tuesday')}/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Wednesday' onClick={() => this.props.handleDay('wednesday')}/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Thursday' onClick={() => this.props.handleDay('thursday')}/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Friday' onClick={() => this.props.handleDay('friday')}/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Saturday' onClick={() => this.props.handleDay('saturday')}/>
          </Form.Field>
          <Form.Field>
            <Checkbox label='Sunday' onClick={() => this.props.handleDay('sunday')}/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
  );
  }
}

export default AddShow;