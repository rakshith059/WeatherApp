import * as React from 'react';
import {ScrollView, View, StatusBar, Text, StyleSheet} from 'react-native';
import TodayScreen from './src/screens/TodayScreen';

import GetWeatherReport from './src/utils/GetWeatherReport';
import {BottomNavigation} from 'react-native-paper';
// import GetLocation from 'react-native-get-location';

// const getGeoLocation = () => {
//   GetLocation.getCurrentPosition({
//     enableHighAccuracy: false,
//     timeout: 100000,
//     maximumAge: 10000
//   })
//     .then(location => {
//       alert(" latitude ===  " + location.latitude +" longitude ===" + location.longitude);
//       // console.log('current location is' + location);
//     })
//     .catch(error => {
//       // const {code, message} = error;
//       console.error(error.code, error.message);
//     });
// };

const TomorrowScreen = () => {
  return <Text>{'getWeatherFromApi'}</Text>;
};

const Last5DaysScreen = () => {
  return <Text>{'name'}</Text>;
};

const MyTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'today', title: 'Today', icon: 'weather-sunny'},
    {key: 'tomorrow', title: 'Tomorrow', icon: 'cloud'},
    {key: 'last5days', title: 'Last5Days', icon: 'cloud'},
  ]);

  const renderTabs = BottomNavigation.SceneMap({
    today: TodayScreen,
    tomorrow: TomorrowScreen,
    last5days: Last5DaysScreen,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderTabs}
    />
  );
};

export default MyTabs;