import { useObject } from '../context/ObjectHook';
import { createElement, useEffect  } from 'react'
import { StyleSheet, View, TextInput, Text } from "react-native";

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
    }
});
// Comments
export function TextControl(props:any){
    const state = useObject().state;   
    let styleCtrl=styles.inputControl;
             
    console.log("StyleCntrl"+styleCtrl);
    let attr=props.props;
    const _onChange = (text:any) => {
        state._formData[attr.propertyName]=text;
        return text || attr.placeholder || attr.data || attr.value;        
    };
    
    useEffect(() => {
        console.log("Entra aqui");
        if(state._isRequired){
            styleCtrl=styles.requiredControl;
        }else{
            styleCtrl=styles.inputControl;
        }
    });

    return (
        <View>
            <Text style={styles.inputLabel}>{attr.label || 'No label included'}</Text>                        
            <TextInput
                style={styleCtrl}
                keyboardType="default"
                maxLength={attr.maxLength}
                placeholder={attr.placeholder}
                placeholderTextColor='lightgray'
                defaultValue={attr.data || attr.value}
                editable={!attr.readonly}
                onChangeText={(text) => _onChange(text)}
            />
        </View>   
    )
}

/*
<Text>{JSON.stringify(props)}</Text>
*/