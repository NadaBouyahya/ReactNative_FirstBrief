import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainContainer from "./navigation/MainContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/FontAwesome'
import Logo from "./components/Logo";
import {Button, TouchableOpacity } from "react-native";
import MyAlert from "./components/MyAlert";


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name='home'
            component={MainContainer}
            options={{
              title: "Hello Nada",
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize: 20,
                fontFamily: ''
              },
              headerLeft: () => (<Logo />),
              headerRight: () => (
                <TouchableOpacity onPress={MyAlert}>
                  <Icon
                    name='caret-down'
                    color='gray'
                    size={25}
                  />
                </TouchableOpacity>
              ),
            }}

          />
        </stack.Navigator>
      </NavigationContainer>
    </>

  )
}