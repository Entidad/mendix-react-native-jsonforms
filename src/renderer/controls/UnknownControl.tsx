import { useObject } from '../context/ObjectHook';
import { createElement } from 'react'
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    Unknown: {
        color: '#f44336'
      },
});

export const UnknownControl = () => {
    const { state } = useObject();
    let label="No applicable control found.";
    console.log(state);
    return (
        <View>
            <Text style={styles.Unknown}>{label || ''}</Text>
        </View>   
    )
}