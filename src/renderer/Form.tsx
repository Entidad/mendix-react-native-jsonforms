import { createElement } from "react";
import { View, Text, StyleSheet } from "react-native";
import { validateSchema, validationStatus } from './util/Validation'
import { ErrorList, ErrorItem } from "./util/Error";
import { ObjectProvider } from "./context/ObjectProvider"
import { ObjectState } from "./context/ObjectState";
import { TextControl, UnknownControl } from "./controls";

const styles = StyleSheet.create({
    textError: {
        color: '#000080',
        padding: 5,
      },
});

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
        _initData: initData,
        _name:"",
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
                elements.push(<TextControl/>)
            }
            else{
                elements.push(<UnknownControl/>)
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


export const ObjectProperty = (schema:any, uischema:any, initData:any): any  => {
    if(schema.type==="object"){
        let properties=schema.properties??undefined;
        if(properties){
            for(let property in properties){         

                const PROP_STATE: ObjectState = {
                    _schema: properties[property],
                    _uischema: uischema,
                    _initData: initData,
                    _name:property,
                }
                return (
                    <ObjectProvider 
                        objectState={PROP_STATE}
                    > 
                            <Text style={styles.textError}>{"Holap"}</Text>
                    </ObjectProvider>
                )
                
            }
        }
    }
    else{
        return getSchemaControl(schema);
    }
}

export function getSchemaControl(schema:any): JSX.Element {
    let { type } = schema;
    if (type==="string") {
      return (
        <TextControl/>
      )
    }
    return (<UnknownControl/>);
}
