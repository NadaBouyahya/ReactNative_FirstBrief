import React from 'react'
import { Alert, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

function MyAlert() {

    Alert.alert('', 'Choose what you want', [
        {
            text: 'cancel'
        },
        {
            text: 'log out'
        }
    ],
        // {cancelable:false}
    );

}

export default MyAlert
