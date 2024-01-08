import { 
  JsonUISchema, 
  RJSF_UISchema,
  RJSF_Property,
  UISchemaElement } 
from "./JsonSchema";

// Control Types
export enum ControlType {
  TextControl,
  TextAreaControl,
  PasswordControl,
  NumberControl,
  NumberEnumControl,
  IntegerControl,
  IntegerRangeControl,
  CheckBoxControl,
  RadioControl,
  SelectControl,  
  DateControl,
  TimeControl,
  DateTimeControl,  
  EnumControl,
  UnknownControl
} 

export function getTypeControl(_type:string, _format:string, _enum:any, _uischema:any, _property:string){
  let rjsf:boolean=isRJSFSchema(_uischema);
  if(rjsf){
    return TypeControl_FromRJSF(_type, _format, _enum, _uischema, _property);
  }
  return TypeControl_FromJSONForms(_type, _format, _enum, _uischema, _property);
}

//Controls
function TypeControl_FromRJSF(_type:string, _format:string, _enum:any, _uischema:any, _property:string):ControlType{
  
  let props:RJSF_Property|undefined=getProperties_RJSF(_uischema, _property);    
  if(props){
    let widget=props["ui:widget"]??undefined;    
    //Text
    if(_type==="string" && widget===undefined){
      return ControlType.TextControl;      
    }
    if(_type==="string" && widget==="textarea"){
      return ControlType.TextAreaControl;      
    }
    if(_type==="string" && widget==="password"){
      return ControlType.PasswordControl;      
    }
    //Number
    if(_type==="number" && widget===undefined){
      return ControlType.NumberControl;      
    }
    if(_type==="number" && widget==="radio"){
      return ControlType.NumberEnumControl;      
    }
    //Integer
    if(_type==="integer" && widget===undefined){
      return ControlType.IntegerControl;      
    }
    if(_type==="integer" && widget==="range"){
      return ControlType.IntegerRangeControl;      
    }
    //Boolean
    if(_type==="boolean" && widget===undefined){
      return ControlType.CheckBoxControl;      
    }
    if(_type==="boolean" && widget==="radio"){
      return ControlType.RadioControl;      
    }
    if(_type==="boolean" && widget==="select"){
      return ControlType.SelectControl;      
    }
    //Date    
    if(_type==="string" && _format==="date" && widget===undefined){
      return ControlType.DateControl;
    }
    if(_type==="string" && _format==="time" && widget===undefined){
      return ControlType.TimeControl;
    }
    if(_type==="string" && _format==="date-time" && widget===undefined){
      return ControlType.DateTimeControl;      
    }
    //Enum
    if(_type==="string" && _enum!==undefined && widget===undefined){
      return ControlType.EnumControl;      
    }
  }
  return ControlType.UnknownControl;
  
}

function TypeControl_FromJSONForms(_type:string, _format:string, _enum:any, _uischema:any, _property:string):ControlType{
  let props:any=getProperties_JSONForm(_uischema, _property);
  if(props){
    let options=props.options??undefined;    
    if(options){
      //Text
      if(_type==="string" && _format==="password"){
        return ControlType.PasswordControl;      
      }
      if(_type==="string" && _format===undefined && options.multi===true){
        return ControlType.TextAreaControl;      
      }
      //IntegerRange
      if(_type==="number" && options.slider===true){
        return ControlType.IntegerRangeControl;      
      }
      //RadioButton
      if(_type==="string" && _enum!=undefined && options.format==="radio"){
        return ControlType.RadioControl;      
      }
      //Date
      if(_type==="string" && (_format==="date" || options.format==="date")){
        return ControlType.DateControl;
      }
      if(_type==="string" && (_format==="time" || options.format==="time")){
        return ControlType.TimeControl;
      }
      if(_type==="string" && (_format==="date-time" || options.format==="date-time")){
        return ControlType.DateTimeControl;      
      }
    }else{
      if(_type==="string"){
        return ControlType.TextControl;      
      }
      if(_type==="integer"){
        return ControlType.IntegerControl;
      }
      if(_type==="number"){
        return ControlType.NumberControl;      
      }
      if(_type==="boolean"){
        return ControlType.CheckBoxControl;      
      }
      if(_type==="string" && _enum!=undefined){
        return ControlType.EnumControl;      
      }
    }
  }
  return ControlType.UnknownControl;
}

// Verify if UISchema is RJSF type
export function isRJSFSchema(_uischema:any){
  let ui:JsonUISchema=_uischema;
  if(ui.type && (
    ui.type==="VerticalLayout" || 
    ui.type==="HorizontalLayout" || 
    ui.type==="Control" || 
    ui.type==="Group" || 
    ui.type==="Categorization" || 
    ui.type==="Category"  || 
    ui.type==="ListWithDetail" 
    )){
    return false;
  }
  return true;
}

// Get RJSF Properties from by property
export function getProperties_RJSF(_uischema:any, _property:string){
  let uischema:RJSF_UISchema=_uischema;
  for(let property in uischema){
    if(property==_property){
      return uischema[property];
    }
  }
  return undefined;
}

// Get Options from property
export function getProperties_JSONForm(uischema:JsonUISchema, property:string){
  let path="#/properties/"+property;
  let UI_Elements:UISchemaElement[]=uischema.elements??undefined;
  if(UI_Elements){
      for(let UI_Element of UI_Elements){  
          if(UI_Element.type==="Control" && UI_Element.scope===path){
              return UI_Element.options;
          }
      }
  }
  return undefined;
}

// Get Data from property
export function getData(JSONData:any, property:string){
  return JSONData[property]??'';
}