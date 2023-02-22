import React from 'react';
import { Image, StyleSheet} from 'react-native';

function Logo() {
    return (
        <Image 
            source={require("../assets/logoImg.png")} />
    )
}

export default Logo

const styles = StyleSheet.create({
    ImageStyle : {
        width : 60,
    }
})