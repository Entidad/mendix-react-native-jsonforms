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
    return (
        <View>
            <Text style={styles.inputLabel}>{props.label || 'No label included'}</Text>            
            <TextInput
                style={styles.inputControl}
                keyboardType="default"
                placeholder={"Hola ..."}
                maxLength={10}
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

*/
