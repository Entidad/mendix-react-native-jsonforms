import { useObject } from '../context/ObjectHook';
import { createElement } from 'react'
import { StyleSheet, View, TextInput, Text } from "react-native";

const styles = StyleSheet.create({
    inputText: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
});

export const InputTextControl = () => {
    const { state } = useObject();
    let label="";
    console.log(state);
    return (
        <View>
            <Text>{label || ''}</Text>            
            <TextInput
                style={styles.inputText}
                keyboardType="default"
            />
        </View>   
    )
}