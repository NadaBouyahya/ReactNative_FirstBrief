import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/FontAwesome5'


//screens
import Brief from "../components/Brief";
import Home from "./screens/Home";
import Task from "./screens/Tasks";

//screens names
const homeName = 'Dashboard'
const taskName = 'My tasks'
const briefName = 'My briefs'


const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
            <Tab.Navigator
              screenOptions={{
                headerShown:false,
                tabBarShowLabel:false,
                tabBarStyle: {
                     position:"absolute",
                    //  bottom:1,
                    //  left:1,
                    //  right:1,
                     borderTopLeftRadius:20,
                     borderTopRightRadius:20,
                     height:65,
                     paddingBottom:10,
                     paddingTop: 5
                    },
                    tabBarLabelStyle: {
                        fontSize:14,
                    }
              }}
                
            >
                <Tab.Screen
                    name={taskName}
                    component={Task}
                    options={{
                        tabBarLabel: 'task',

                        tabBarIcon: ({focused, size }) => {
                            const iconColor = focused ? 'tomato' : 'gray'
                            return <Icon2 name='list-alt' color={iconColor} size={size} />
                        }
                    }}
                />

                <Tab.Screen
                    name={homeName}
                    component={Home}
                    options={{
                        tabBarLabel: 'home',
                        tabBarIcon: ({ focused, size }) => {
                            const iconColor = focused ? 'tomato' : 'gray'
                            return <Icon name='home-sharp' color={iconColor} size={size} />
                        }
                    }}
                />
                <Tab.Screen
                    name={briefName}
                    component={Brief}
                    options={{
                        tabBarLabel: 'brief',
                        tabBarIcon: ({ focused, size }) => {
                            const iconColor = focused ? 'tomato' : 'gray'
                            return <Icon name='briefcase' color={iconColor} size={size} />
                        },
                        
                    }}
                />

            </Tab.Navigator>
    )
}

const styles = StyleSheet.create({

})