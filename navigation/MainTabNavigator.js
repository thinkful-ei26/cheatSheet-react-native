import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PropsScreen from '../screens/PropScreen';
import FlexboxScreen from '../screens/Flexbox'
import StateScreen from '../screens/StateScreen'
import StyleScreen from '../screens/StyleScreen'
import HeightWidthScreen from '../screens/HeightWidth'

const HeightWidthStack = createStackNavigator({
  HeightWidth: HeightWidthScreen
})
HeightWidthStack.navigationOptions = {
  tabBarLabel: 'Height & Width',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};
const StyleStack = createStackNavigator({
  Style: StyleScreen
})
StyleStack.navigationOptions = {
  tabBarLabel: 'Styles',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};

const FlexboxStack = createStackNavigator({
  Flex: FlexboxScreen
})
FlexboxStack.navigationOptions = {
  tabBarLabel: 'Flexbox',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};
const StateStack =createStackNavigator({
  State: StateScreen,
})
StateStack.navigationOptions = {
  tabBarLabel: 'State',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};



const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

const PropStack = createStackNavigator({
  Props: PropsScreen,
});

PropStack.navigationOptions = {
  tabBarLabel: 'Props',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  PropStack,
  FlexboxStack,
  StateStack,
  StyleStack,
  HeightWidthStack,
});
