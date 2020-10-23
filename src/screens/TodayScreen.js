import React, {Component} from 'react';
import GetWeatherReport from '../utils/GetWeatherReport';

export default class TodayScreen extends Component {
  today = Date.parse(new Date());
  //  tomorrow = today + ONE_DAY;
  // alert(tomorrow);
  render() {
    return (
      <GetWeatherReport
        lat="13.7117"
        lon="75.8106"
        dateInMillis={this.today}
        fromScreen={0}
      />
    );
  }
}
