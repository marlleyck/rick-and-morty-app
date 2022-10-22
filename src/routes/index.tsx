import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";  

import { Home } from "../screens/Home";
import { LocationPageOne } from "../screens/LocationPageOne";

import { Entypo } from '@expo/vector-icons';

import { THEME } from "../THEME";

const Tab = createBottomTabNavigator()

export default function Routes() {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarStyle: {
                backgroundColor: `${THEME.COLORS.BACKGROUND}`,
                height: 65
            },
            tabBarActiveTintColor: `${THEME.COLORS.GREEN_RICK}`,
            tabBarLabelStyle: {
                paddingBottom: 10
            },
            tabBarHideOnKeyboard: true,
            
            headerShown: false
        }}>
            <Tab.Screen
            name="Home" 
            component={Home}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name='home' size={size} color={color} />
                )
            }} />

            <Tab.Screen 
            name="Locais" 
            component={LocationPageOne}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <Entypo name='globe' size={size} color={color} />
                )
            }} />
        </Tab.Navigator>
    );
}