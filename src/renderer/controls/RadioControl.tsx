import { useObject } from '../context/ObjectHook';
import { createElement, useState } from 'react'
import { StyleSheet, TouchableWithoutFeedback, TouchableOpacity, View, Text } from "react-native";
import { isEmptyBoolean } from '../util/Util'
import { getStyle } from '../theme/custom-style';

// Comments
export function RadioControl(props:any){

    const state = useObject();    
    let attr=props.props;
	const styles={...getStyle(),...attr?.style||{}};
	const styleTmp = StyleSheet.create({...{
	    viewControl:{
		marginBottom:styles.radioButtons.radioButtonItemContainerStyle.marginBottom//10
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
		borderColor: styles.radioButtons.circularButtonStyle.borderColor,//'#FF0000',
		borderWidth: 3,//here
		width: styles.radioButtons.circularButtonStyle.width,//24
		height: styles.radioButtons.circularButtonStyle.height,//24
		borderRadius: styles.radioButtons.circularButtonStyle.borderRadius,//24
	    }, 
	    inputRadioNormal: {
		justifyContent: 'center',
		alignItems: 'center',            
		alignSelf: 'center',    
		borderColor: styles.radioButtons.circularButtonStyle.borderColor,//"#FFF"
		//borderWidth: 2,
		borderRadius: styles.radioButtons.circularButtonStyle.borderRadius,//14
		width: styles.radioButtons.circularButtonStyle.width,//14
		height: styles.radioButtons.circularButtonStyle.height,//14
	    },    
	    inputRadioActive: {
		justifyContent: 'center',
		alignItems: 'center',            
		alignSelf: 'center',     
		borderColor: styles.radioButtons.activeButtonStyle.backgroundColor,//'#00FF00',
		//borderWidth: 1,    
		borderRadius: styles.radioButtons.activeButtonStyle.borderRadius,//'#00FF00',
		width: styles.radioButtons.activeButtonStyle.width,//14
		height: styles.radioButtons.activeButtonStyle.height,//14
		backgroundColor: styles.radioButtons.activeButtonStyle.backgroundColor,//'#0000FF',
	    },
	    inputRadioLabel: {
		paddingLeft: 15,
		lineHeight: 20,
	    }
	},...attr?.style?.radioButtons||{}});

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
        attr.onChange(state.formData);
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
