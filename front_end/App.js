import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainContainer from "./navigation/MainContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='home' component={MainContainer}
        options ={{
          headerRight: () => (
            <Icon
              name='caret-down'
              color = 'gray'
              size = {25}
            />
            // <Button
            //   onPress={() => alert('This is a button!')}
            //   title="Info"
            //   // color="#fff"
            // />
          ),
        }}
        />
      </stack.Navigator>
      {/* <MainContainer /> */}
    </NavigationContainer>

  )
}