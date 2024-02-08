import { useObject } from '../context/ObjectHook';
import { createElement, useState  } from 'react'
import { StyleSheet, View, TextInput, Text } from "react-native";
import { isEmpty } from '../util/Util'

const styles = StyleSheet.create({
    inputControl: {
        height: 40,
        marginLeft: 12,
        borderColor:'#000000',
        borderWidth:1,
        marginBottom:12
    },
    requiredControl: {
        height: 40,
        marginLeft: 12,
        borderColor:'#FF0000',
        borderWidth:1,
        marginBottom:12
    },
    inputLabel:{
        marginLeft: 12
    },
    inputError:{
        marginLeft: 12,
        color:'#FF0000',
        fontSize: 10
    }
});

export function TextControl(props:any){
    const state = useObject();   
    let attr=props.props;
    const [error, setError]=useState(attr.error);

    const _onChange = (text:any) => {
        state.formData[attr.propertyName]=text;
        state.setFormData(state.formData);
        attr.error=isEmpty(text);
        setError(attr.error);
        return text;
        //return text || attr.placeholder || attr.data || attr.value;        
    };
    return (
        <View>
            <Text style={styles.inputLabel}>{attr.label || 'No label included'}</Text>                        
            <TextInput
                style={(state.showError && error)?styles.requiredControl:styles.inputControl}
                keyboardType="default"
                maxLength={attr.maxLength}
                placeholder={attr.placeholder}
                placeholderTextColor='lightgray'
                defaultValue={attr.data || attr.value}
                editable={!attr.readonly}
                onChangeText={(text) => _onChange(text)}
            />
            {(state.showError && error)
                ? <Text style={styles.inputError}>{attr.errorMessage}</Text>
                : ""
            }
        </View>   
    )
}
