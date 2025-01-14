import { 
    JsonUISchema, 
    RJSF_UISchema,
    RJSF_Property,
}  from "./JsonSchema";
import { ControlType, ControlProps } from "./ControlType"

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

export function getControl_FromRJSF(_props:any, _uischema:any, _property:string):ControlType{
  let _type=_props.type;
  let _format=_props.format;
  let _enum=_props.enum;
  let props:RJSF_Property|undefined=getProperties_FromRJSF(_uischema, _property);    
  if(props){
    let widget=props["ui:widget"]??undefined;    
    //Text    
    if(_type==="string" && widget==="textarea"){
      return ControlType.TextAreaControl;      
    }
    if(_type==="string" && widget==="password"){
      return ControlType.PasswordControl;      
    }
    //Number
    if(_type==="number" && widget==="radio"){
      return ControlType.NumberEnumControl;      
    }

    //Integer
    if(_type==="integer" && widget==="range"){
      return ControlType.IntegerRangeControl;      
    }
      
    //Boolean    
    if(_type==="boolean" && widget==="radio"){ 
      return ControlType.RadioControl;      
    }        
    if(_type==="boolean" && widget==="select"){
      return ControlType.SelectControl;      
    }
    

    //Radio and CheckBoxGroups
    if(_type==="string" && (widget==="RadioWidget" || widget==="radio")){
      return ControlType.RadioControl;      
    }        
    if(_type==="string" && (widget=="CheckboxesWidget" || widget==="checkbox")){
      return ControlType.CheckGroupControl;      
    }
  }
  if(_type==="number"){
    return ControlType.NumberControl;      
  }    
  if(_type==="integer"){
    return ControlType.IntegerControl;      
  }  
  if(_type==="boolean"){
    return ControlType.CheckBoxControl;      
  }    
  if(_type==="string" && _enum!==undefined){
    return ControlType.EnumControl;      
  }
  if(_type==="string"){
    return ControlType.TextControl;      
  }
  return ControlType.UnknownControl;  
}
  
// Get RJSF Properties from by property in UISchema
export function getProperties_FromRJSF(_uischema:any, _property:string){
  let uischema:RJSF_UISchema=_uischema;
  for(let property in uischema){
    if(property==_property){
      return uischema[property];
    }
  }
  return undefined;
}

  // Set RJSF Control Properties
export function setProps_FromRJSF(_uischema:any, _property:string, _props:ControlProps){
  let attrs=getProperties_FromRJSF(_uischema, _property);
  if(attrs){
      if(attrs["ui:readonly"]){
          _props.readonly=attrs["ui:readonly"];
      }
      if(attrs["ui:disabled"]){
          _props.disabled=attrs["ui:disabled"];
      }
      if(attrs["ui:placeholder"]){
          _props.placeholder=attrs["ui:placeholder"];
      }
      if(attrs["ui:help"]){
          _props.hint=attrs["ui:help"];
      }
      if(attrs["ui:description"]){
          _props.description=attrs["ui:description"];
      }
      if(attrs["ui:title"]){
          _props.title=attrs["ui:title"];
      }
      if(attrs["ui:emptyValue"]){
          _props.emptyValue=attrs["ui:emptyValue"];
      }
      if(attrs["ui:options"]){
          _props.options=attrs["ui:options"];
      }
  }
  return _props;
}
