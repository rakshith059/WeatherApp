import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {OPEN_WEATHER_API_KEY,ONE_DAY} from '../utils/Constants';
import {weatherConditions} from '../utils/WeatherConditions';

class GetWeatherReport extends Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: 'default',
    weatherDescription: 'default',
    error: null,
  };
  
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.fetchWeather(13.7117, 75.8106);
  }

  fetchWeather(lat = 12.9716, lon = 77.5946 , dateInMillis,fromScreen) {
    alert("latitude == " + this.props.lat + " longitude == " + this.props.lon + " date in millisecond " + this.props.dateInMillis);
    console.log(this.props.dateInMillis);
    fetch(
      // 'https://api.openweathermap.org/data/2.5/onecall?lat=13.7117&lon=75.8106&appid=8f13f5402a97633ff3d241bcc744efe2&units=metric',
      `https://api.openweathermap.org/data/2.5/onecall?lat=${this.props.lat}&lon=${this.props.lon}&APPID=${OPEN_WEATHER_API_KEY}&units=metric&dt=${this.props.dateInMillis}`,
    )
      .then(res => res.json())
      .then(responseJson => {
        if (this._isMounted) {
          this.setState({
            temperature: responseJson.daily[this.props.fromScreen].temp.day,
            weatherCondition: responseJson.daily[this.props.fromScreen].weather[0].main,
            weatherDescription: responseJson.daily[this.props.fromScreen].weather[0].description,
            isLoading: false,
          });
        }
      })
      .catch(error => {});
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const isLoading = this.state;
    const weatherCondition = this.state.weatherCondition;
    const weatherDescription = this.state.weatherDescription;
    const temperature = this.state.temperature;
    return (
      // <View style={styles.container}>
      //   {isLoading ? (
      //     <Text style={{alignItems: 'center', flex: 1}}>
      //       Fetching The Weather
      //     </Text>
      //   ) : (
      //     <View>
      //       <Text>{weatherCondition}</Text>
      //       <Text>{temperature}</Text>
      //     </View>
      //   )}
      // </View>
      <View
        style={[
          styles.weatherContainer,
          {backgroundColor: weatherConditions[weatherCondition].color},
        ]}>
        <View style={styles.headerContainer}>
          <Text style={styles.tempText}>{temperature}˚</Text>
        </View>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>
            {weatherCondition}
          </Text>
          <Text style={styles.description}>
            {weatherDescription}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  weatherContainer: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent:'center',
    marginTop: 50,
  },
  tempText: {
    fontSize: 48,
    color: 'midnightblue',
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'center',
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    color: 'darkred',
    alignItems : 'center'
  },description: {
    fontSize: 24,
    color: 'orange',
    alignItems : 'center'
  }
});

export default GetWeatherReport;
