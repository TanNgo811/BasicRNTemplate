import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../../screens/HomePage/HomePage';
import SettingPage from '../../screens/SettingPage/SettingPage';

const {Navigator, Screen} = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomePage} />
        <Screen name="Settings" component={SettingPage} />
      </Navigator>
    </NavigationContainer>
  );
};
