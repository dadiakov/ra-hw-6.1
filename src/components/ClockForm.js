import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Clocks from './Clocks';

export default class ClockForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clockName: '',
        timeZone: '',
        clocks: [],
      };
      this.onFormSubmit = this.onFormSubmit.bind(this);
      this.onInputChange = this.onInputChange.bind(this);
      this.onRemove = this.onRemove.bind(this);
    }
  
    onFormSubmit(evt) {
      const newTimer = {
        clockName: this.state.clockName,
        timeZone: this.state.timeZone,
        id: uuidv4(),
      };
      const timers = [...this.state.clocks];
      timers.push(newTimer);
      this.setState({ clockName: '', timeZone: '', clocks: timers });
      evt.preventDefault();
    }
  
    onInputChange({ target: { value, name } }) {
      this.setState({ [name]: value });
    }
  
    onRemove(id) {
      const index = this.state.clocks.findIndex((e) => e.id === id);
      const arrayOfTimers = [...this.state.clocks];
      arrayOfTimers.splice(index, 1);
      this.setState({ clocks: arrayOfTimers });
    }
  
    render() {
      return (
        <React.Fragment>
          <form action="" onSubmit={this.onFormSubmit}>
            <label htmlFor="clockName">Название</label>
            <input
              id="clockName"
              value={this.state.clockName}
              name="clockName"
              type="text"
              onChange={this.onInputChange}
              required
            />
            <label htmlFor="timeZone">Временная зона</label>
            <input
              id="timeZone"
              value={this.state.timeZone}
              name="timeZone"
              type="number"
              onChange={this.onInputChange}
              required
            />
            <button>Создать</button>
          </form>
          <Clocks clocks={this.state.clocks} onRemove={this.onRemove} />
        </React.Fragment>
      );
    }
  }