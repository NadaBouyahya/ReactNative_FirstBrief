import React from 'react'
import { Alert, TouchableOpacity } from 'react-native'

function MyAlert() {

    Alert.alert('', 'Are you sure you want to leave', [
        {
            text: 'Yes'
        },
        {
            text: 'No'
        }
    ],
        // {cancelable:false}
    );

}

export default MyAlert
