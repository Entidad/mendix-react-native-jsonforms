import { useObject } from '../context/ObjectHook';
import { createElement, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, View, TextInput, Text } from "react-native";

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
    const [index, setIndex] = useState(undefined);

    const _onPress = (idx:any) => {
        setIndex(idx);
    };

    const renderRadioControl=(idx:any) => {
        if(idx=index){
            return(
            <View style={styles.inputRadioView} >
                <TouchableOpacity
                    style={styles.inputRadioActive}
                    onPress={() => { _onPress(idx) }
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
                    onPress={() => { _onPress(idx) }
                }>
                    <View style={styles.inputRadioActive}/>
                </TouchableOpacity>
            </View>
        );
    }

    const renderRadioLabel=(label:string, indice:any) => {
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    if (!attr.readonly) {
                        _onPress(indice)};
                    }
            }>
                <View>
                    <Text style={styles.inputRadioLabel}>{label}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    const renderRadioGroup=(val:any, idx:any) => {
        return(
        <View style={styles.viewVertical}>
            <TouchableOpacity
                style={styles.inputRadio}
                onPress={() => { _onPress( idx) }
                }>
                    {renderRadioControl(idx)}
                    {renderRadioLabel(val, idx)}
            </TouchableOpacity>
        </View>
        );
    }
    
    return (
        <View style={styles.viewControl}>
            <Text style={styles.inputLabel}>{attr.description || 'No label included'}</Text>            
            {renderRadioGroup("Hola", 1)}
        </View>   
    )
}