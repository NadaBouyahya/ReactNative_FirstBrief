
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FlatList, Text, View, StyleSheet } from "react-native";

export default function Brief() {

    const [Brief, setBrief] = useState([]);

    useEffect(() => {
        axios.get('https://restcountries.com/v2/all')
            .then((response) => {
                // console.log(response.data);
                setBrief(response.data);
            })
            .catch(error => console.log(error));
    }, [])

    let numColums = 3;

    return (
        <View style={styles.mainContainer}>
            <FlatList
                numColumns={numColums}
                data={Brief}
                renderItem={({ item }) => (
                    <View style={styles.dataContainer}>
                        <View style={styles.dataItems}>
                            <Text style={styles.content}>{item.name}</Text>
                        </View>
                    </View>

                )}

            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        padding:15,
        marginTop:10,
        marginBottom:10
    },
    dataContainer: {
        flex:1,
                
    },
    dataItems:{
        backgroundColor:'pink',
        width:100,
        height:100,
        margin:4
    },
    content: {
        color: 'black'
    }
})