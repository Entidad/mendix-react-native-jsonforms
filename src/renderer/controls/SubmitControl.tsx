import { useObject } from '../context/ObjectHook';
import { createElement } from 'react'
import { StyleSheet, View, Button } from "react-native";

const styles = StyleSheet.create({
    SubmitContainer: {
        marginLeft: 12,
        marginRight: 12,
        justifyContent: 'center',
        marginHorizontal: 16
    }
});

export function SubmitControl(props:any){    
    const state = useObject().state;   

    const _onPress = () => {
        let required=isDataRequired(state._formData, state._schema.required);
        console.log("Required:"+required);
        if(required){
            console.log("Act");
            state._isRequired=true;            
        }else{
            state._isRequired=false;
            props.onPress();
        }
    };  

    return (
        <View style={styles.SubmitContainer}>
            <Button
                color="#000"
                title="Submit"
                onPress={() => _onPress()}
            />
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