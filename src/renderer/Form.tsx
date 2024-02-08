import { createElement, useState } from "react";
import { View } from "react-native";
import { validateSchema, validationStatus } from './util/Validation'
import { ErrorList, ErrorItem } from "./util/Error";
import { ObjectProvider } from "./context/ObjectProvider"
import { ObjectState } from "./context/ObjectState";
import { getControlProps } from "./controls/Util"
import { getTypeControl, ControlType } from './schemas/UtilSchema'
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

export const Form = ({schema, uischema, initData, formData, onSubmit}:any) => {
    
    const [data, setData] = useState(formData);
    const [show, setShow] = useState(false);
    

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
        formData: data,
        setFormData: setData,
        showError: show,
        setShowError:setShow
    }   
    let elements=elementList(schema, uischema, initData, START_STATE.formData);  
    return (            
        <ObjectProvider 
            objectState={START_STATE}
        >
            <View>
                {
                    elements.map((element:JSX.Element) => (
                        element
                    ))
                }    
                <SubmitControl                    
                    onPress={() => {
                            onSubmit(START_STATE.formData);
                    }} />            
            </View>
        </ObjectProvider>
    )
   
}

//Comments
export const elementList = (schema:any, uischema:any, initData:any, formData:any):JSX.Element[] =>{
    let properties=schema.properties??undefined;
    let elements:JSX.Element[]=[];
    if(properties){        
        for(let property in properties){
            let initProps=properties[property];
            let control=getTypeControl(initProps.type, initProps.format, initProps.enum, uischema, property);
            let props=getControlProps(schema, uischema, property);
            props.data=initData[property];
            props.propertyName=property;
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
                    let aux=property+",Type:"+initProps.type+", Ctrl:"+ControlType[control];
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