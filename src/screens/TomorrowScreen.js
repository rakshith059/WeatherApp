import React, {Component} from 'react';
import GetWeatherReport from '../utils/GetWeatherReport';
import {ONE_DAY} from '../utils/Constants';

export default class TomorrowScreen extends Component {
  today = Date.parse(new Date());
  tomorrow = this.today + ONE_DAY;

  render() {
    return (
      <GetWeatherReport
        lat="13.7117"
        lon="75.8106"
        dateInMillis={this.tomorrow}
        fromScreen={1}
      />
    );
  }
}
