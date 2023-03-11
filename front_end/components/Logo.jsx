import React from 'react';
import { Image, StyleSheet } from 'react-native';

function Logo() {
    return ( 
        <Image
            style={{ width: 40, height: 40, margin: 10 }}
            source = { require("../assets/lockidin.png") }
        />
    )
}

export default Logo
