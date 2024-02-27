import { useObject } from '../context/ObjectHook';
import { createElement, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, View, Text } from "react-native";
import { isEmptyBoolean } from '../util/Util'
import { getStyle } from '../theme/custom-style';

const styleTmp = StyleSheet.create({
    viewControl:{
        marginLeft: 12,
        marginTop:12,
        marginBottom:12,
        flexDirection: 'column'
    },


    viewRow:{
        flexDirection: 'row',
        marginTop: 5
    },
    inputDescription:{
        marginLeft: 0
    },    
    inputRadio: {
        justifyContent: 'center',
        alignItems: 'center',    
        
        alignSelf: 'center',    
        borderColor: '#D4D4D4',
        borderWidth: 3,

        width: 24,
        height: 24,        
        borderRadius: 24,
    }, 
    inputRadioNormal: {

        justifyContent: 'center',
        alignItems: 'center',            
        alignSelf: 'center',    

        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 14,

        width: 14,
        height: 14,                
    },    
    inputRadioActive: {
        
        justifyContent: 'center',
        alignItems: 'center',            
        alignSelf: 'center',    
        
        borderColor: '#1A6251',
        borderWidth: 1,    
        borderRadius: 14,

        width: 14,
        height: 14,        
        backgroundColor: '#1A6251',
    },
    inputRadioLabel: {
        paddingLeft: 15,
        lineHeight: 20,
    }
});
// Comments
export function RadioControl(props:any){
    let styles=getStyle();
    const state = useObject();    
    let attr=props.props;
    const [error, setError]=useState(attr.error);
    let opts:any[]=attr.enum || [];    
    let data=getDataFromBoolean(attr.data);
    
    if(opts.length==0){
        opts.push('Yes');
        opts.push('No');
    }

    const [value, setValue] = useState(data);

    const _onPress = (label:any) => {
        setValue(label);
        state.formData[attr.propertyName]=label;
        state.setFormData(state.formData);

        attr.error=isEmptyBoolean(label);
        setError(attr.error);
    };

    const renderRadioControl=(label:any) => {        
        return(
            <View style={styleTmp.viewRow}>
                <View style={styleTmp.inputRadio}>
                    <TouchableOpacity
                        onPress={() => { _onPress(label)}
                    }>
                        <View style={value===label?styleTmp.inputRadioActive:styleTmp.inputRadioNormal}>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styleTmp.inputRadioLabel}>
                    <TouchableWithoutFeedback
                        onPress={() => { _onPress(label)}}
                    >
                        <View>
                            <Text style={styles.input.label}>
                                {label}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
    
    return (
        <View style={styleTmp.viewControl}>
            <Text style={styles.input.label}>{attr.description || (attr.label || 'No label included')}</Text>            
            {opts!=undefined && opts.map((optionValue) => (
                renderRadioControl(optionValue)
            ))}
             {(state.showError && error)
                ? <Text style={styles.input.inputError}>{attr.errorMessage}</Text>
                : ""
            }
        </View>   
    )
}

function getDataFromBoolean(val:any){
    if(typeof val === 'boolean'){
        if(val){return "Yes";}
        return "No";
    }    
    return val;
 }