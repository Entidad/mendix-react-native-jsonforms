import { useObject } from '../context/ObjectHook';
import { createElement } from 'react'
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
    Unknown: {
        color: '#f44336',
        marginLeft: 12,
        paddingTop:10,
        paddingBottom:10
      },
});

export function UnknownControl(props:any){
    const state = useObject();      
    let label="No applicable control found for "+(props.label??'undefined');
    console.log(state);
    return (
        <View>
            <Text style={styles.Unknown}>{label || ''}</Text>
        </View>   
    )
}