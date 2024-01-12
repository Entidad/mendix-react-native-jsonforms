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

export function TextControl(props:any){
    const state = useObject();          
    console.log(state);
    const _onChange = (text:any) => {
        return text || props.default || props.value;
     };
    return (
        <View>
            <Text style={styles.inputLabel}>{props.label || 'No label included'}</Text>            
            
            <TextInput
                style={styles.inputControl}
                keyboardType="default"
                maxLength={props.maxLength}
                placeholder={props.placeholder}
                placeholderTextColor='lightgray'
                defaultValue={props.default??props.value}
                editable={props.readonly!}
                onChangeText={(text) => _onChange(text)}
            />
        </View>   
    )
}

/*
<Text>{JSON.stringify(props)}</Text>
*/
