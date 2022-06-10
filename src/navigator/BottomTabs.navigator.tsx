import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from '../screens/History';
import RootStackNavigation from './RootStackNavigation';
import Tabs from '../screens/Tabs';
import HistorySwiper from '../screens/HistorySwiper';


const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" options={{
        headerShown: false
      }} component={RootStackNavigation} />
      <BottomTabs.Screen options={{
        title: "Rock & Roll"
      }} name="History" component={History} />
      <BottomTabs.Screen options={{
        title: "Rock & Roll",
      }} name="HistorySwiper" component={HistorySwiper} />
      <BottomTabs.Screen options={{
        title: "Rock & Roll",
      }} name="tabs" component={Tabs} />
    </BottomTabs.Navigator>
  );
};

export default BottomTabsNavigator