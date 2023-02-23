import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FlatList, Text, View} from "react-native";

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

    return (
        <View>
            <FlatList
                data={Brief}
                renderItem={({ item }) => (
                    <Text>{item.name}</Text>
                )}

                />
        </View>

    
    )

}