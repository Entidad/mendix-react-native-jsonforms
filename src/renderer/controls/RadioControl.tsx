import { useObject } from '../context/ObjectHook';
import { createElement, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, View, Text } from "react-native";

const styles = StyleSheet.create({
    viewControl:{
        marginLeft: 12,
        marginTop:12,
        marginBottom:12,
    },
    viewVertical:{
        flexDirection: 'column',
        paddingLeft: 10,
    },
    inputLabel:{
        marginLeft: 0
    },
    inputControl: {
        height: 40,
        marginLeft: 12,
        borderColor:'#000000',
        borderWidth:1,
        marginBottom:12
    },
    inputRadioView:{
        flexDirection: 'row',
        marginBottom: 5,
    },
    inputRadio: {
        justifyContent: 'center',
        alignItems: 'center',    
        width: 30,
        height: 30,        
        alignSelf: 'center',    
        borderColor: '#2196f3',
        borderRadius: 30,
    },    
    inputRadioNormal: {
        borderRadius: 10,
    },    
    inputRadioActive: {
        width: 20,
        height: 20,
        backgroundColor: '#2196f3',
    },
    inputRadioLabel: {
        paddingLeft: 10,
        lineHeight: 20,
    },  
});

export function RadioControl(props:any){
    const state = useObject();          
    console.log(state);

    let attr=props.props;
    let opts:[string]=attr.enum;
    const [index, setIndex] = useState(undefined);

    if(opts.length<1){
        opts.push('Yes');
        opts.push('No');
    }
    
    const _onPress = (idx:any) => {
        setIndex(idx);
    };

    const renderRadioControl=(value:any) => {
        if(value=index){
            return(
            <View style={styles.inputRadioView} >
                <TouchableOpacity
                    style={styles.inputRadioActive}
                    onPress={() => { _onPress(value) }
                }>
                    <View style={styles.inputRadioActive}/>
                </TouchableOpacity>
            </View>
            );
        }
        return (
            <View style={styles.inputRadioView} >
                <TouchableOpacity
                    style={styles.inputRadioNormal}
                    onPress={() => { _onPress(value) }
                }>
                    <View style={styles.inputRadioActive}/>
                </TouchableOpacity>
            </View>
        );
    }

    const renderRadioLabel=(label:string) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    if (!attr.readonly) {
                        _onPress(label)};
                    }
            }>
                <View>
                    <Text style={styles.inputRadioLabel}>{label}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    const renderRadioGroup=(opts:[string]) => {
        return(
        <View style={styles.viewVertical}>
                {opts!=undefined && opts.map((optionValue) => (
                <TouchableOpacity
                    style={styles.inputRadio}
                    onPress={() => { _onPress( optionValue ) }
                    }>
                        {renderRadioControl(optionValue)}
                        {renderRadioLabel(optionValue)}
                </TouchableOpacity>

                ))}
        </View>
        );
    }
    
    return (
        <View style={styles.viewControl}>
            <Text style={styles.inputLabel}>{attr.description || 'No label included'}</Text>            
            {renderRadioGroup(opts)}
        </View>   
    )
}