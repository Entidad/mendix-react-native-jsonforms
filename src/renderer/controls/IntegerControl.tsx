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

export function IntegerControl(props:any){
    const state = useObject();          
    console.log(state);
    let attr=props.props;
    const _onChange = (text:any) => {
        return text || attr.placeholder || attr.value;
    };
    return (
        <View>
            <Text style={styles.inputLabel}>{attr.label || 'No label included'}</Text>            
            <TextInput
                style={styles.inputControl}
                keyboardType="numeric"
                placeholder={attr.placeholder}
                placeholderTextColor='lightgray'
                defaultValue={attr.value}
                editable={!attr.readonly}
                onChangeText={(text) => _onChange(text)}
            />
        </View>   
    )
}