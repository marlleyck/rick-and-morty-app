import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";  
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from "../screens/Home";
import { LocationPageOne } from "../screens/LocationPageOne";
import { LocationDetails } from "../components/LocationList/LocationDetails";

import { Entypo } from '@expo/vector-icons';

import { THEME } from "../THEME";

const Stack = createNativeStackNavigator<PropsNavigationStack>()
const Tab = createBottomTabNavigator()

import { PropsNavigationStack } from "./Models";

function Tabs() {
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

export default function Routes() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen 
            name="StackHome"
            component={Tabs} />

            <Stack.Screen
            name="Locais"
            component={LocationPageOne} />

            <Stack.Screen
            name="LocationDetails"
            component={LocationDetails} />
        </Stack.Navigator>
    );
}