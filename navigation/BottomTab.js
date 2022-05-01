import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import AlarmScreen from '../screens/AlarmScreen';
import SettingScreen from '../screens/SettingScreen';

import HomeIcon from '../assets/images/home.svg';
import SearchIcon from '../assets/images/search.svg';
import AlarmIcon from '../assets/images/alarm.svg';
import SettingIcon from '../assets/images/setting.svg';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color}) => <HomeIcon color={'black'} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: () => <SearchIcon />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Alarm"
        component={AlarmScreen}
        options={{
          title: '알림',
          tabBarIcon: () => <AlarmIcon />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: '설정',
          tabBarIcon: () => <SettingIcon />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
