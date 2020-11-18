import React from 'react'
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Tab1 from '../screens/tab1'
import Tab2 from '../screens/tab2'
import Tab3 from '../screens/tab3'


const TabNavigator = createBottomTabNavigator({
    Spring: {
        screen: Tab1,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return ( <FontAwesome name="spinner" size={22} color="#3797a4" />);
            }
        }
    },
    Sequence: {
        screen: Tab2,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return ( <Entypo name="line-graph" size={22} color="#3797a4" />);
            }
        }
    },
    Parallel: {
        screen: Tab3,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return ( <Entypo name="flow-parallel" size={22} color="#3797a4" />);
            }
        }
    },
})

export default createAppContainer(TabNavigator)