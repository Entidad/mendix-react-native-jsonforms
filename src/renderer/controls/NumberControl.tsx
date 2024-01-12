import { useObject } from '../context/ObjectHook';
import { createElement } from 'react'
import { StyleSheet, View, TextInput, Text } from "react-native";

const styles = StyleSheet.create({
    inputControl: {
        height: 40,
        marginLeft: 12,
        borderColor:'#000000',
        borderWidth:1,
        marginBottom:12
    },
    inputLabel:{
        marginLeft: 12
    }
});

export function NumberControl(props:any){
    const state = useObject();          
    console.log(state);
    return (
        <View>
            <Text style={styles.inputLabel}>{props.label || 'No label included'}</Text>            
            <TextInput
                style={styles.inputControl}
                keyboardType="decimal-pad"
                placeholder={props.placeholder}
            />
        </View>   
    )
}