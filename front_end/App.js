import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainContainer from "./navigation/MainContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Image, ImageBackground, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Logo from "./components/Logo";


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
              headerTitle: (props) => <Logo {...props} />,
              headerRight: () => (
                <Icon
                  name='caret-down'
                  color='gray'
                  size={25}
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
    </>

  )
}