import { createElement } from "react";
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
    UnknownControl 
} from "./controls";

export const Form = ({schema, uischema, initData}:any) => {
        
    const validation:validationStatus = validateSchema(schema, initData);
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

    const INITIAL_STATE: ObjectState = {
        _schema: schema,
        _uischema: uischema,
        _initData: initData
    }    
    let elements=elementList(schema, uischema);
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

export const elementList = (schema:any, uischema:any):JSX.Element[] =>{
    let properties=schema.properties??undefined;
    let elements:JSX.Element[]=[];
    if(properties){        
        for(let property in properties){
            let initProps=properties[property];
            let control=getTypeControl(initProps.type, initProps.format, initProps.enum, uischema, property);
            let props=getControlProps(schema, uischema, property);
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
