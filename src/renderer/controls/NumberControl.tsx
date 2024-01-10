import { useObject } from '../context/ObjectHook';
import { createElement } from 'react'
import { StyleSheet, View, TextInput, Text } from "react-native";
import { ControlProps } from './Util'

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

export function NumberControl(props:ControlProps){
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



/*
keyboardType:
default
number-pad
decimal-pad
numeric
email-address
phone-pad
url

editable={true} with value={value}
autoCapitalize={"characters"} 
characters: all characters.
words: first letter of each word.
sentences: first letter of each sentence (default).
none: don't auto capitalize anything.
autoCorrect: false or true (default value:true)

//Params:
//placeholder
//default
// minLength
// maxLength
// ui:emptyValue, ui:placeholder

//title, description, label () y 
// DEFAUYLT, MINLENGHT, MAXLENGTH


“ui:description”
“ui:help” (hint)
“ui:disabled”: true
"ui:readonly"

*/
