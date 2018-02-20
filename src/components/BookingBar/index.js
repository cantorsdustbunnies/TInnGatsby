import React, { Component } from 'react';
import styled from 'styled-components';
import Selector from '../Selector';
import styles from './index.module.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

const AdultSelections = ['', '1', '2', '3', '4', '5'];
const RoomSelections = ['', '1', '2', '3', '4'];

export default class BookingBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      departureDate: moment(new Date()).add(1, 'days'),
      adults: '1',
      rooms: '1',
    };
    this.handleDepDateChange = this.handleDepDateChange.bind(this);
    this.handleArrDateChange = this.handleArrDateChange.bind(this);
    this.handleRoomChange = this.handleRoomChange.bind(this);
    this.handleAdultChange = this.handleAdultChange.bind(this);
  }

  handleRoomChange(e) {
    this.setState({
      rooms: e.target.value,
    });
  }

  handleAdultChange(e) {
    this.setState({
      adults: e.target.value,
    });
  }

  handleArrDateChange(date) {
    this.setState({
      startDate: date,
    });
  }

  handleDepDateChange(date) {
    this.setState({
      departureDate: date,
    });
  }

  componentWillMount() {
    //Generate the dates here and put them in the list
  }

  render() {
    return (
      <div className={styles.bookingBarWrapper}>
        <Selector
          value={this.state.adults}
          selections={AdultSelections}
          id={'AdultSelector'}
          label={'Adults'}
          onChange={this.handleAdultChange}
        />
        <Selector
          value={this.state.rooms}
          selections={RoomSelections}
          id={'RoomSelector'}
          label={'Rooms'}
          onChange={this.handleRoomChange}
        />
        <label for={'startDate'}>
          Arrive
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleArrDateChange}
            id={'startDate'}
            popperPlacement="top-end"
            popperModifiers={{
              offset: {
                enabled: true,
                offset: '7vw, 10px',
              },
            }}
          />
        </label>
        <label for={'departureDate'}>
          Depart
          <DatePicker
            selected={this.state.departureDate}
            onChange={this.handleDepDateChange}
            id={'departureDate'}
            popperPlacement="top-end"
            popperModifiers={{
              offset: {
                enabled: true,
                offset: '7vw, 10px',
              },
            }}
          />
        </label>
        <BookingButton alt={'Check Availability'}>Book It!</BookingButton>
      </div>
    );
  }
}

const BookingButton = styled.button`
  border: 1px solid #eceff1;
  color: #eceff1;
  background-color: transparent;
  width: 200px;
  height: 28px;
  outline: none;
  cursor: pointer;
  margin-top: 28px;
`;
