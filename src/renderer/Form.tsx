import { createElement } from "react";
import { View } from "react-native";
import { validateSchema, validationStatus } from './util/Validation'
import { ErrorList, ErrorItem } from "./util/Error";


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
    return (
        <View>
            <ErrorItem  message={"Everything goes Well!!"}/>
        </View>
    );
}
