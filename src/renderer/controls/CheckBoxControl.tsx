import { useObject } from '../context/ObjectHook';
import { createElement, useState } from 'react'
import { StyleSheet, View, TouchableHighlight, Text, Image  } from "react-native";
/*
import exampleImage from './img/ic_check_box.png'
const exampleImageUri = Image.resolveAssetSource(exampleImage).uri
*/

const styles = StyleSheet.create({
    inputControl: {
        height: 40,
        marginLeft: 12,
        borderColor:'#000000',
        borderWidth:1,
        marginBottom:12
    },
    inputLabel:{
        marginLeft: 12
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
    icono:{
        tintColor:'#000',
        width: 35,
        height: 35,
    },
});


const data = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAAcElEQVR4Ac3LzwnAIBSD8UD3K7pQcZj+2ccp+lzCepNA8LWHgsn1+2HeRRjq4AWBgczpxqD6fw/yN7BjQfIA51DAzyXIg1yArQWXzjVIQItOkUvQySFyCTrhXAMinGtAhHMN+D+A4uY3gwBz8hWz7gFdnBvHhko3SQAAAABJRU5ErkJggg==';
export function CheckBoxControl(props:any){
    const state = useObject();          
    console.log(state);
    let attr=props.props;
    const [checked, setChecked] = useState(false);
    
 

    const _onPress = () => {
        setChecked(!checked);
    };



    return (
        <View>
            <Text style={styles.inputLabel}>{attr.label+".."+checked || 'No label included'}</Text>            
            <TouchableHighlight
                onPress={() => _onPress()}
                underlayColor='transparent'
            >
                <View style={styles.container}>
                    <Image source={{uri:data}} style={styles.icono}/>
                </View>
            </TouchableHighlight>
        </View>   
    )
}

/*

    const icnChecked = {
        name: "icn_checked",
        image: require('../controls/img/ic_check_box.png')
    }

const renderRight=(text:string)=>{
        return (
            <Text style={[styles.rightText]}>{text}</Text>
        );
    }

                    {renderRight(attr.label)}

   const icnChecked = {
        name: "icn_checked",
        image: require('/img/ic_check_box.png')
    }
    
 const icnUnchecked = {
        name: "icn_unchecked",
        image: require('./img/ic_check_box_outline_blank.png')
        ././img/ic_check_box.png
    }
const renderCheckBox=() => {
        var source = checked ? icnChecked.image.default : icnUnchecked.image;
        return (
            <Image source={source} style={styles.icono}/>
        );
    }*/
