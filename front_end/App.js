import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainContainer from "./navigation/MainContainer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/FontAwesome'
import Logo from "./components/Logo";
import Menu from "./components/Menu";


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <Menu/>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
            name='home'
            component={MainContainer}
            options={{
              title: "Hello Nada",
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontSize : 20,
                fontFamily : ''
              },
              headerLeft: () => ( <Logo/> ),
              headerRight: () => (
                <Icon
                    onPress={() => alert('This is a button!')}

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
      </NavigationContainer>
    </>

  )
}