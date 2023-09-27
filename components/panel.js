import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const Panel = (props) => {
    const [isActive, setIsActive] = useState(false);
    
    return (
        <View style={styleActive.container}>
            <Text>{props.name}</Text>
        </View>
    );

    
};

const styleActive = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
    },
});



export default Panel;
