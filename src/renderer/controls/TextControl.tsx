import { useObject } from '../context/ObjectHook';
import { createElement, useState  } from 'react'
import { View, TextInput, Text } from "react-native";
import { isEmpty } from '../util/Util'
import { getStyle } from '../theme/custom-style';

export function TextControl(props:any){
    let styles=getStyle().input;
    const state = useObject();   
    let attr=props.props;
    const [error, setError]=useState(attr.error);

    const _onChange = (text:any) => {
        state.formData[attr.propertyName]=text;
        state.setFormData(state.formData);
        attr.error=isEmpty(text);
        setError(attr.error);
        return text;
        //return text || attr.placeholder  || attr.data || attr.value;        
    };
    return (
        <View>
            <Text style={styles.label}>{attr.label || 'No label included'}</Text>                        
            <TextInput
                style={(state.showError && error)?styles.inputError:styles.input}
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
