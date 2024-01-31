import { useObject } from '../context/ObjectHook';
import { createElement, useState } from 'react'
import { StyleSheet, View, TextInput, Text } from "react-native";

const styles = StyleSheet.create({
    inputControl: {
        textAlignVertical: "top",
        marginLeft: 12,
        paddingLeft:5,
        backgroundColor: "transparent",
        borderColor:'#000000',
        borderWidth:1
    },
    inputLabel:{
        marginLeft: 12
    },
    inputContainer:{
        width: "95%",
        backgroundColor:"#fbfbf",
        textAlignVertical: "top",
    },
    inputCharCount:{
        bottom: 8,
        right: 16,
        fontSize: 14,
        position: "absolute",
        color: "#ccc"
    },
    exceedCharCountColor:{
        bottom: 8,
        right: 16,
        fontSize: 14,
        position: "absolute",
        color: "#f44336"
    },
    charCountColor:{
        bottom: 8,
        right: 16,
        fontSize: 14,
        position: "absolute",
        color: "#ccc"
    }
});

export function TextAreaControl(props:any){
    const state = useObject();   
    console.log(state);    
    
    let attr=props.props;    
    let maxCharLimit=attr.maxLength || 200;
    const [charCount, setCharCount] = useState(0);

    const _onChange = (text:any) => {
        setCharCount(text.length);
        return text || attr.placeholder  || attr.data || attr.value;
     };

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{attr.label || 'No label included'}</Text>
            <TextInput
                style={styles.inputControl}
                keyboardType="default"                
                multiline={true}
                maxLength={maxCharLimit}
                numberOfLines={7}
                defaultValue={attr.data || attr.value}
                placeholder={attr.placeholder}
                placeholderTextColor='lightgray'
                underlineColorAndroid="transparent"
                editable={!attr.readonly}
                onChangeText={(text) => _onChange(text)}
            />
            <Text style={charCount > maxCharLimit ? styles.exceedCharCountColor : styles.charCountColor}>
                {`${charCount}/${maxCharLimit}`}
            </Text>
        </View>   
    )
}
