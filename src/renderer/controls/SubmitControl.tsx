import { useObject } from '../context/ObjectHook';
import { createElement } from 'react'
import { StyleSheet, View, Pressable, Text } from "react-native";
import { getStyle } from '../theme/custom-style';

const styles = StyleSheet.create({
    button:{
        rippleColor         :getStyle().button.container.rippleColor,
        minWidth            :getStyle().button.container.minWidth,
        maxHeight           :getStyle().button.container.minHeight,
        borderColor         :getStyle().button.primary.borderColor,
        backgroundColor     :getStyle().button.primary.backgroundColor,
        borderRadius        :getStyle().button.container.borderRadius,
        justifyContent      : 'center',
        alignItems          : 'center',
        margin              : 20,     
        padding             : 10
    },
    text: {
        fontSize:getStyle().button.caption.fontSize,
        fontWeight: 'normal',
        color: getStyle().button.primary.color      
    },
  });

export function SubmitControl(props:any){    
    const state = useObject();   
    const _onPress = () => {
        let required=isDataRequired(state.formData, state.schema.required);
        state.setShowError(required);
        if(!required){
            props.onPress();
        }
    };  
    return (
        <View>
            <Pressable style={styles.button}  onPress={() => _onPress()}>
                <Text style={styles.text}>{"Submit"}</Text>
            </Pressable>
        </View>   
    )
}

// Evaluate if required fields has completed
export function isDataRequired(_formData:any, _formRequired:any){
    if(_formData && _formRequired){  
      for(let item of _formRequired){
        let valor=_formData[item];
        if(valor=="" || valor.length==0 || valor=="[]" || valor=="{}"){
          return true;
        }
      }
    }
    return false;
}