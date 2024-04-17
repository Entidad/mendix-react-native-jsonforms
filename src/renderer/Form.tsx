import { createElement, useState } from "react";
import { View, ScrollView } from "react-native";
import { validateSchema, validationStatus } from './util/Validation'
import { ErrorList, ErrorItem } from "./util/Error";
import { ObjectProvider } from "./context/ObjectProvider"
import { ObjectState } from "./context/ObjectState";
import { getControlType, getControlProps } from './schemas/UtilSchema'
import { ControlType } from './schemas/ControlType'
import { 
    TextControl, 
    TextAreaControl,
    PasswordControl,
    NumberControl, 
    IntegerControl, 
    CheckBoxControl,
    CheckGroupControl,
    RadioControl,
    SubmitControl,
    UnknownControl
} from "./controls";

export const Form = ({schema, uischema, initData, i18nData, language, formData, onSubmit}:any) => {
    
    const [data, setData] = useState(formData);
    const [show, setShow] = useState(false);
    //

    const validation:validationStatus =  validateSchema(schema, initData);
    //if(!validation.validation){    
    if(false){            
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
    
    const START_STATE: ObjectState = {
        schema: schema,
        uischema: uischema,
        initData: initData,
        i18nData: i18nData,
        language: language,
        formData: data,
        setFormData: setData,
        showError: show,
        setShowError:setShow
    }   
    let elements=elementList(schema, uischema, initData, i18nData, language, START_STATE.formData);  
    return (            
        <ObjectProvider 
            objectState={START_STATE}
        >
            <View>
                <ScrollView>
                    {
                        elements.map((element:JSX.Element) => (
                            element
                        ))
                    }     
                    <SubmitControl                    
                        onPress={() => {
                                onSubmit(START_STATE.formData);
                        }} />  
                </ScrollView>          
            </View>
        </ObjectProvider>
    )
   
}

//Comments
export const elementList = (schema:any, uischema:any, initData:any, i18nData:any, language:string, formData:any):JSX.Element[] =>{
    let properties=schema.properties??undefined;
    let elements:JSX.Element[]=[];
    if(properties){        
        for(let property in properties){
            let allProps=properties[property];
            let control=getControlType(allProps, uischema, property);
            let props=getControlProps(schema, uischema, property);
            props.data=initData[property];
            props.propertyName=property;
            let translate=getObjectTranslate(i18nData, language, property);
            if(translate){
                props.label=translate.label;
                props.description=translate.description;
            }
            formData[property]=props.data||'';
            switch(control){
                case ControlType.TextControl:
                    elements.push(<TextControl props={props}/>);
                    break;
                case ControlType.TextAreaControl:                        
                    elements.push(<TextAreaControl props={props}/>);
                    break;     
                case ControlType.NumberControl:                        
                    elements.push(<NumberControl props={props}/>);
                    break;                    
                case ControlType.IntegerControl:
                    elements.push(<IntegerControl props={props}/>);
                    break;       
                case ControlType.CheckBoxControl:
                    elements.push(<CheckBoxControl props={props}/>);
                    break;                           
                case ControlType.CheckGroupControl:
                    elements.push(<CheckGroupControl props={props}/>);
                    break;
                case ControlType.RadioControl:
                    elements.push(<RadioControl props={props}/>);
                    break; 
                case ControlType.PasswordControl:
                    elements.push(<PasswordControl props={props}/>);
                    break;     
                default:
                    let aux=property+",Type:"+allProps.type+", Ctrl:"+ControlType[control];
                    elements.push(<UnknownControl label={aux}/>)
                    break;
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

export function getObjectTranslate(i18nData:any, language:string, propertyName:string){
    if(language!==""){
        let arr=i18nData[language];
        return arr[propertyName];
    }
    return undefined;
}