import { useObject } from '../context/ObjectHook';
import { createElement, useState } from 'react'
import { StyleSheet, View, TextInput, Text } from "react-native";
import { isEmpty } from '../util/Util'
import { getStyle } from '../theme/custom-style';

const styleTmp = StyleSheet.create({
    viewControl:{
        marginBottom:10
    }
});

export function IntegerControl(props:any){
    let styles=getStyle().input;
    const state = useObject();          
    let attr=props.props;
    const [error, setError]=useState(attr.error);

    const _onChange = (text:any) => {
        
        state.formData[attr.propertyName]=text;
        state.setFormData(state.formData);
        attr.error=isEmpty(text);
        setError(attr.error);

        return text || attr.placeholder || attr.value;
    };
    return (
        <View style={styleTmp.viewControl}>
            <Text style={styles.label}>{attr.label || 'No label included'}</Text>
            <TextInput
                style={(state.showError && error)?styles.inputError:styles.input}
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