import { useObject } from '../context/ObjectHook';
import { createElement, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, View, Text } from "react-native";

const styles = StyleSheet.create({
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
        borderColor: '#000',
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
        borderWidth: 3,
        borderRadius: 14,

        width: 14,
        height: 14,                
    },    
    inputRadioActive: {
        
        justifyContent: 'center',
        alignItems: 'center',            
        alignSelf: 'center',    
        
        borderColor: '#000',
        borderWidth: 1,    
        borderRadius: 14,

        width: 14,
        height: 14,        
        backgroundColor: '#000',
    },
    inputRadioLabel: {
        paddingLeft: 10,
        lineHeight: 20,
    },  
});
// Comments
export function RadioControl(props:any){
    const state = useObject();          
    console.log(state);

    let attr=props.props;
    let opts:any[]=attr.enum || [];    
    let data=getDataFromBoolean(attr.data);
    
    if(opts.length==0){
        opts.push('Yes');
        opts.push('No');
    }

    const [value, setValue] = useState(data);

    const _onPress = (label:any) => {
        setValue(label);
    };

    const renderRadioControl=(label:any) => {        
        return(
            <View style={styles.viewRow}>
                <View style={styles.inputRadio}>
                    <TouchableOpacity
                        onPress={() => { _onPress(label)}
                    }>
                        <View style={value===label?styles.inputRadioActive:styles.inputRadioNormal}>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableWithoutFeedback
                        onPress={() => { _onPress(label)}}
                    >
                        <View>
                            <Text style={styles.inputRadioLabel}>
                                {label}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
    
    return (
        <View style={styles.viewControl}>
            <Text style={styles.inputDescription}>{attr.description || (attr.label || 'No label included')}</Text>            
            {opts!=undefined && opts.map((optionValue) => (
                renderRadioControl(optionValue)
            ))}
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