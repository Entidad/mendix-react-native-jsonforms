import { useObject } from '../context/ObjectHook';
import { createElement, useState } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image  } from "react-native";

const styles = StyleSheet.create({
    viewControl:{
        marginLeft: 12,
        marginTop:12,
        marginBottom:12
    },
    inputControl: {
        height: 40,
        marginLeft: 12,
        borderColor:'#000000',
        borderWidth:1,
        marginBottom:12
    },
    inputLabel:{
        marginLeft: 0
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftText: {
        flex: 1,
    },
    rightText: {
        flex: 1,
        marginLeft: 10
    },
    checkIcon:{
        tintColor:'#000',
        width: 24,
        height: 24,
    },
});

//Based on img folder
const icn_checked = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAcElEQVR4Ac3LzwnAIBSD8UD3K7pQcZj+2ccp+lzCepNA8LWHgsn1+2HeRRjq4AWBgczpxqD6fw/yN7BjQfIA51DAzyXIg1yArQWXzjVIQItOkUvQySFyCTrhXAMinGtAhHMN+D+A4uY3gwBz8hWz7gFdnBvHhko3SQAAAABJRU5ErkJggg==';
const icn_unchecked='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAO0lEQVR4AWMYvCCQ4SXDfzzwFYM/inqQcgLwJYp6sBAmwJQfeA2jGkY1vCKYvF+gavBneElAue+gzfwA1h18EUJriLAAAAAASUVORK5CYII=';
//const icn_indeterminate='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAPUlEQVR4AWMYvCCQ4SXDfzzwFYM/inqQcgLwJaqG/0RAGBjVgAVQTQNhOKrhFUHlL1A1+DO8JKDcd9BmfgBB0itwLBGOFgAAAABJRU5ErkJggg=='

export function CheckBoxControl(props:any){
    const state = useObject().state;          
    let attr=props.props;
    const [checked, setChecked] = useState(getDataFromBoolean(attr.data));
 
    const _onPress = () => {
        setChecked(!checked);
        state._formData[attr.propertyName]=checked;
    };

    const renderCheckBox=() => {
        var _uri = checked ? icn_checked : icn_unchecked;
        return (
            <Image source={{uri:_uri}} style={styles.checkIcon}/>
        );
    }
    const renderText=(text:string)=>{
        return (
            <Text style={[styles.rightText]}>{text}</Text>
        );
    }

    return (
        <View style={styles.viewControl}>
            <Text style={styles.inputLabel}>{attr.description || (attr.label || 'No label included')}</Text>
            <TouchableHighlight
                onPress={() => _onPress()}
                underlayColor='transparent'
            >
                <View style={styles.container}>
                    {renderCheckBox()}
                    {renderText(attr.label)}
                </View>
            </TouchableHighlight>
        </View>   
    )
}

function getDataFromBoolean(val:any){
    if(typeof val === 'boolean'){
        return val;
    }    
    return false;
 }