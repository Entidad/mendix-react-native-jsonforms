import { useObject } from '../context/ObjectHook';
import { createElement, useState } from 'react'
import { StyleSheet, View, TextInput, Text } from "react-native";
import { getStyle } from '../theme/custom-style';

const styleTmp = StyleSheet.create({
    viewControl:{
        marginBottom:10
    }
});

export function TextAreaControl(props:any){
    let styles=getStyle().input;
    const state = useObject();   
    let attr=props.props;        
    let maxCharLimit=attr.maxLength || 200;

    const [charCount, setCharCount] = useState(0);
    const _onChange = (text:any) => {
        setCharCount(text.length);
        state.formData[attr.propertyName]=text;
        state.setFormData(state.formData);
        attr.onChange(state.formData);        
        return text || attr.placeholder  || attr.data || attr.value;
    };

    return (
        <View style={styleTmp.viewControl}>
            <Text style={styles.label}>{attr.label || 'No label included'}</Text>
            <TextInput
                style={styles.input}
                keyboardType="default"                
                multiline={true}
                maxLength={maxCharLimit}
                numberOfLines={7}
                defaultValue={attr.data || attr.value}
                placeholder={attr.placeholder}
                placeholderTextColor='lightgray'
                underlineColorAndroid="transparent"
                textAlignVertical="top"
                editable={!attr.readonly}
                onChangeText={(text) => _onChange(text)}
            />
            <Text style={styles.labelDisabled}>
                {`${charCount}/${maxCharLimit}`}
            </Text>
        </View>   
    )
}
