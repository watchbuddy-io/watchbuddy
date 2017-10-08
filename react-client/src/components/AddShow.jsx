import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Form, Button, Checkbox, Dropdown, Header } from 'semantic-ui-react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import  _ from 'lodash';

class AddShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showId: '',
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
      selectedEpisode: '',
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0,
      saturday: 0,
      sunday: 0,
      username: ''
    };
  }

  componentWillReceiveProps(episodes) {
    console.log(episodes);

    //handle username
    this.setState({username: episodes.username});

    //handle showId
    this.setState({showId: episodes.showId});

    //handle show info
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

  handleSubmit() {
    //make ajax call to add with all info
    $.ajax({
      method: 'POST',
      url: '/addshow',
      contentType: 'application/json',
      data: JSON.stringify({
        username: this.state.username,
        show: this.state.showId,
        season: this.state.selectedSeason,
        episode: this.state.selectedEpisode,
        startDate: this.state.startDatejs,
        endDate: this.state.endDatejs,
        monday: this.state.monday,
        tuesday: this.state.tuesday,
        wednesday: this.state.wednesday,
        thursday: this.state.thursday,
        friday: this.state.friday,
        saturday: this.state.saturday,
        sunday: this.state.sunday
      })
    });

    // console.log({
    //     username: this.state.username,
    //     show: this.state.showId,
    //     season: this.state.selectedSeason,
    //     episode: this.state.selectedEpisode,
    //     startDate: this.state.startDatejs,
    //     endDate: this.state.endDatejs,
    //     monday: this.state.monday,
    //     tuesday: this.state.tuesday,
    //     wednesday: this.state.wednesday,
    //     thursday: this.state.thursday,
    //     friday: this.state.friday,
    //     saturday: this.state.saturday,
    //     sunday: this.state.sunday
    //   });

  }

  handleDay(day){
    let setObj = {};
    if (this.state[day] === 0) {
      setObj[day] = 1;
      this.setState(setObj, () => console.log(this.state[day]));
    } else {
      setObj[day] = 0;
      this.setState(setObj, () => console.log(this.state[day]));
    }
  }

  handleSelectedSeason(event, { value }) {
    let valueNum = parseInt(value);
    this.setState({ selectedSeason: valueNum }, () => console.log('selectedSeason:', this.state.selectedSeason));

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
        <style>{`
          Button,
          Header,
          Form {
            padding-top: 20px;
          }
        `}
        </style>
        <Form>
          <Header as='h4' textAlign='left' inverted color='red'>
            Where did you leave off?
          </Header>

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

          <Form.Group widths='equal'>
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
          </Form.Group>

          <Header as='h4' textAlign='left' inverted color='red'>
            Which days are you free?
          </Header>

          <Form.Group widths='equal'>
            <Form.Field>
              <Checkbox label='Monday' onClick={() => this.handleDay('monday')}/>
            </Form.Field>
            <Form.Field>
              <Checkbox label='Tuesday' onClick={() => this.handleDay('tuesday')}/>
            </Form.Field>
            <Form.Field>
              <Checkbox label='Wednesday' onClick={() => this.handleDay('wednesday')}/>
            </Form.Field>
            <Form.Field>
              <Checkbox label='Thursday' onClick={() => this.handleDay('thursday')}/>
            </Form.Field>
            <Form.Field>
              <Checkbox label='Friday' onClick={() => this.handleDay('friday')}/>
            </Form.Field>
            <Form.Field>
              <Checkbox label='Saturday' onClick={() => this.handleDay('saturday')}/>
            </Form.Field>
            <Form.Field>
              <Checkbox label='Sunday' onClick={() => this.handleDay('sunday')}/>
          </Form.Field>
          </Form.Group>

          <Button fluid color='red' type='submit' onClick={this.handleSubmit.bind(this)}>Submit</Button>
        </Form>
      </Container>
  );
  }
}

export default AddShow;