
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import Modal_ from "../../components/Modal";


export default function Brief() {

    const [Brief, setBrief] = useState([]);
    const [modalVisibility, setModalVisibility] = useState(false)

    const changeVisibility = (bool) => {
        setModalVisibility(bool)
    }

    useEffect(() => {
        axios.get('http://192.168.1.7/api/brief')
            .then((response) => {
                // console.log(response.data);
                setBrief(response.data);
            })
            .catch(error => console.log(error));
    }, [])

    let numColums = 2;

    return (
        <View style={styles.mainContainer}>

            <Modal_
                closeModal={()=>{changeVisibility(false)}}
                transparent={true}
                isModalVisible={modalVisibility}
                onRequestClose={ ()=> changeVisibility(false)}
            />

            <FlatList
                numColumns={numColums}
                data={Brief}

                renderItem={({ item }) => (
                    <View style={styles.dataContainer}>
                        <TouchableOpacity style={styles.dataItems} onPress={() => { changeVisibility(true) }}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.date}>from : {item.date_start} to : {item.date_end} </Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        // justifyContent:"space-around",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10
    },

    dataContainer: {
    },

    dataItems: {
        backgroundColor: 'rgba(159,197,232, 0.2)',
        width: 150,
        height: 100,
        margin: 4,
        padding: 15,
        marginTop: 10,
        borderRadius: 5
    },

    title: {
        color: 'black',
        fontSize: 16
    },

    date: {
        marginTop: 9,
        color: "gray"
    }
})