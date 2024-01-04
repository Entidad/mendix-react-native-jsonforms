import { createElement } from "react";
import { View } from "react-native";
import { validateSchema, validationStatus } from './util/Validation'
import { ErrorList, ErrorItem } from "./util/Error";
import { ObjectProvider } from "./context/ObjectProvider"
import { ObjectState } from "./context/ObjectState";
import { TextControl, UnknownControl } from "./controls";

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
    let elements=elementList(schema);
    return (            
        <ObjectProvider 
            objectState={INITIAL_STATE}
        >
            {
                elements.map((element:JSX.Element) => (
                    element
                ))
            }
        </ObjectProvider>
    )
   
}

export const elementList = (schema:any):JSX.Element[] =>{
    let properties=schema.properties??undefined;
    let elements:JSX.Element[]=[];
    if(properties){        
        for(let property in properties){       
            if(properties[property].type==="string"){                
                elements.push(<TextControl label={property}/>)
            }
            else{
                elements.push(<UnknownControl label={property}/>)
            }
        }
    }else{
        elements.push(
            <View>
                <ErrorItem  message={"No properties"}/>
            </View>
        );
    }
    return elements;
}
