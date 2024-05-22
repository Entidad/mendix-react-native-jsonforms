import { createElement} from 'react'
import { StyleSheet, View, Text } from "react-native";
import { getStyle } from '../theme/custom-style';

const styleTmp = StyleSheet.create({
    viewControl:{
        marginBottom:10
    },
    label:{
        fontWeight:  "bold",
        color: "black",
        fontSize:16
    },
    value:{
        marginLeft:5
    }
});

export function ReadOnlyControl(props:any){
    let styles=getStyle().input;    
    let attr=props.props;
    return (
        <View style={styleTmp.viewControl}>
            <Text style={styles.label && styleTmp.label}>{attr.label}</Text>
            <Text style={styles.labelDisabled && styleTmp.value}>{attr.data}</Text>            
        </View>       
    )   
}
