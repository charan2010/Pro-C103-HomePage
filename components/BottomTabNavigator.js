import React, { Component } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import ClockScreen from "../screens/Clock";
import TimerScreen from "../screens/Timer";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Clock") {
                iconName = "time";
              } else if (route.name === "Timer") {
                iconName = "timer";
              }

              // You can return any component that you like here!
              return (
                <Ionicons
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          })}
          tabBarOptions={{
            activeTintColor: "cyan",
            inactiveTintColor: "black",
            style: {
              height: 100,
              borderTopWidth: 0,
              backgroundColor: "#F88379",
            },
            labelStyle: {
              fontSize: 20
            },
            labelPosition: "below-icon",
            tabStyle: {
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10
            }
          }}
        >
          <Tab.Screen name="Clock" component={ClockScreen} />
          <Tab.Screen name="Timer" component={TimerScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
