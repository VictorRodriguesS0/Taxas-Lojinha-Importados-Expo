import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';


import MercadoPago from '../screens/MercadoPago'
import SumUp from '../screens/SumUp'
import MovilePay from  '../screens/MovilePay'

import MPicon from '../TabNavStyles/MPicon'
import SUicon from '../TabNavStyles/SUicon'
import MovilePayIcon from '../TabNavStyles/MovilePayIcon'


const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'SumUp',
  tabBarIcon: ({ focused }) => (
    <SUicon />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Mercado Pago',
  tabBarIcon: ({ focused }) => (
    <MPicon />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
  SumUp: SumUp,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Extras',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-share'}
    />
  ),
};

const MovilePayStack = createStackNavigator({
  MovilePay: MovilePay,
})

MovilePayStack.navigationOptions = {
  tabBarLabel: 'MovilePay',
  tabBarIcon: ({ focused }) => (
    <MovilePayIcon />
  ),
};

export default createBottomTabNavigator({
  MovilePayStack,
//  HomeStack,
  LinksStack,
  SettingsStack,
});
