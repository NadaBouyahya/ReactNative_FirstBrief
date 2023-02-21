import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home(){
    return (
        <View style={styles.HomeContainer}>
            <Text style={styles.Content}>This is the dashboard page</Text>
        </View>
        // <View style={styles.dashboardContainer}>
        //     <Text>This is the dashboard page</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    HomeContainer : {
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },

    Content : {
        color : "black"
    }
})