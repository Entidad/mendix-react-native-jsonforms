import { createElement } from "react";
import { View, Text } from "react-native";
import { validateSchema, validationStatus } from './util/Validation'
import { ErrorList, ErrorItem } from "./util/Error";
import { ObjectProvider } from "./context/ObjectProvider"
import { ObjectState } from "./context/ObjectState";

export const Form = ({schema, uischema, initData}:any) => {
    const validation:validationStatus = validateSchema(schema, initData);
    console.log(uischema);
    if(!validation.validation){
        if(validation.errors.length!=0){
            return(
                <View>
                    <ErrorList  errors={validation.errors}/>
                </View>
            );
        }else{
            return(
                <View>
                    <ErrorItem  message={"The form data is empty"}/>
                </View>
            );
        }        
    }

    const INITIAL_STATE: ObjectState = {
        _schema: schema,
        _uischema: uischema,
        _initData: initData
    }

    return (
        <ObjectProvider 
            objectState={INITIAL_STATE}
        > 
           <Text>As</Text>
        </ObjectProvider>
    );
}
