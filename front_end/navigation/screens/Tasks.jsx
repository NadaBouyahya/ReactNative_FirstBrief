import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Task(){
    return (
        <View style={styles.TasksContainer}>
            <Text style={styles.Content}>This is the Task page</Text>
        </View>
        // <View style={styles.dashboardContainer}>
        //     <Text>This is the dashboard page</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    TasksContainer : {
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    Content : {
        color : "black"
    }
})