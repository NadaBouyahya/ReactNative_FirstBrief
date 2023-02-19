import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FlatList, Text, View } from "react-native";

export default function Brief() {

    const [Brief, setBrief] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/brief')
            .then((response) => {
                console.log(response.data[0].name.common);
                setBrief(response.data);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <View>
            <FlatList
                data={Brief}
                renderItem={({ item }) => (
                    <Text>{item.name.common}</Text>
                )}
            />
        </View>
    )

}