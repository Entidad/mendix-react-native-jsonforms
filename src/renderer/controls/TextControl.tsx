import { useObject } from '../context/ObjectHook';
import { createElement } from 'react'
import { StyleSheet, View, TextInput, Text } from "react-native";

const styles = StyleSheet.create({
    inputText: {
        height: 40,
        margin: 12,
        padding: 10,
        borderColor:'#000000',
        borderWidth:2
      },
});

export const TextControl = () => {
    const { state } = useObject();
    let label="";
    console.log(state);
    return (
        <View>
            <Text>{label || 'No label included'}</Text>            
            <TextInput
                style={styles.inputText}
                keyboardType="default"
            />
        </View>   
    )
}