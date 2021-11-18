import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.id = props.timer.id;
      this.clockName = props.timer.clockName;
      this.timeZone = props.timer.timeZone;
      this.onRemove = props.onRemove;
      this.state = { hours: 0, minutes: 0, seconds: 0 };
      this.interval = undefined;
    }
  
    getTime(zone) {
      const hours = moment
        .utc()
        .hours(moment.utc().hours() + +zone)
        .hours();
      const minutes = moment.utc().minutes();
      const seconds = moment.utc().seconds();
      return { hours, minutes, seconds };
    }
  
    componentDidMount() {
      this.setState(this.getTime(this.timeZone));
      this.interval = setInterval(() => this.changeTime(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    changeTime() {
      this.setState(this.getTime(this.timeZone));
    }
  
    render() {
      return (
        <div className="time-div" id={this.id}>
          <div>{this.clockName}</div>
          <div>
            {this.state.hours +
              ':' +
              this.state.minutes +
              ':' +
              this.state.seconds}
          </div>
          <button onClick={() => this.onRemove(this.id)}>X</button>
        </div>
      );
    }
}

Clock.propTypes = {
    timer: PropTypes.object.isRequired,
    onRemove: PropTypes.func,
  }
  
Clock.defaultProps = {
    onRemove: () => console.log('Тут должна быть функция кнопки удаления часов'),
}