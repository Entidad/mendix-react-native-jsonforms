import { useObject } from '../context/ObjectHook';
import { createElement, useState } from 'react'
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import { getStyle } from '../theme/custom-style';
import Svg, {Path} from 'react-native-svg'

const styleTmp = StyleSheet.create({
    viewControl:{
        marginBottom:10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconCheck:{        
        width: 40,
        height: 40
    },
    iconUncheck:{        
        width: 40,
        height: 40
    },
    iconLabel:{
        flex: 1,
        marginBottom:15
    }
});
export function CheckBoxControl(props:any){
    let styles=getStyle();
    const state = useObject();          
    let attr=props.props;
    const [checked, setChecked] = useState(getDataFromBoolean(attr.data));
    const [error, setError]=useState(attr.error);
 
    const _onPress = () => {
        setChecked(!checked);
        state.formData[attr.propertyName]=!checked;
        state.setFormData(state.formData);     
        attr.onChange(state.formData);
        attr.error=checked;
        setError(attr.error);
    };

    const renderCheckBox=() => {
        if(checked){
            return (
                <View style={styleTmp.iconCheck}>
                    <Svg width="24" height="24" viewBox="0 0 24 24">
                        <Path fill="#1A6251" d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/>
                    </Svg>
                </View>
            )
        }else{
            return(
                <View style={styleTmp.iconUncheck}>
                    <Svg width="24" height="24" viewBox="0 0 24 24">
                        <Path fill="#D4D4D4" d="M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z"/>
                    </Svg>
                </View>
            )
        }
    }
    const renderText=(text:string)=>{
        return (
            <View style={styleTmp.iconLabel}>
                <Text style={[styles.input.label]}>{text}</Text>
            </View>
        );
    }

    return (
        <View style={styleTmp.viewControl}>
            <Text style={styles.input.label}>{attr.description || (attr.label || 'No label included')}</Text>
            <TouchableHighlight
                onPress={() => _onPress()}
                underlayColor='transparent'
            >
                <View style={styleTmp.container}>
                    {renderCheckBox()}
                    {renderText(attr.label)}
                </View>
            </TouchableHighlight>
            {(state.showError && error)
                ? <Text style={styles.input.inputError}>{attr.errorMessage}</Text>
                : ""
            }
        </View>   
    )
}
function getDataFromBoolean(val:any){
    if(typeof val === 'boolean'){
        return val;
    }    
    return false;
 }