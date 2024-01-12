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

export function TextAreaControl(props:any){
    const state = useObject();         
    
    const _onChange = (text:any) => {
       return text || props.default || props.value;
    };

    console.log(state);
    return (
        <View>
            <Text style={styles.inputLabel}>{props.label || 'No label included'}</Text>            
            <TextInput
                style={styles.inputControl}
                keyboardType="default"                
                multiline={true}
                maxLength={props.maxLength}
                numberOfLines={10}
                placeholder={props.placeholder}
                placeholderTextColor='lightgray'
                underlineColorAndroid="transparent"
                defaultValue={props.default??props.value}
                editable={props.readonly!}
                onChangeText={(text) => _onChange(text)}
            />
        </View>   
    )
}
