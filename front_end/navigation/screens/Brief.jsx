import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Brief(){
    return (
        <View style={styles.BriefsContainer}>
            <Text>This is the Briefs page</Text>
        </View>
        // <View style={styles.dashboardContainer}>
        //     <Text>This is the dashboard page</Text>
        // </View>
    )
}

const styles = StyleSheet.create({
    BriefsContainer : {
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
})