import { 
    JsonUISchema, 
    UISchemaElement } 
from "./JsonSchema";
import { ControlType, ControlProps } from "./ControlType"

export function getControl_FromJSONForms(_props:any, _uischema:any, _property:string):ControlType{
    let _type=_props.type;
    let _format=_props.format;
    let _enum=_props.enum;    
    let options:any=getOptions_JSONForm(_uischema, _property);
    if(options){
      //Text   
      if(_type==="string" && options.multi===true){
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
      if(_type==="string" && options.format==="date"){
        console.info("render DateControl");
        return ControlType.DateControl;
      }
      if(_type==="string" && options.format==="time"){
        return ControlType.TimeControl;
      }
      if(_type==="string" && options.format==="date-time"){
        return ControlType.DateTimeControl;      
      }
      // catch other text inputs with options (e.g. inputmode)
      if(_type==="string" && options.inputMode!=undefined){
        return ControlType.TextControl;      
      }
    }else{
      //Date
      if(_type==="string" && _format==="date"){
        return ControlType.DateControl;
      }
      if(_type==="string" && _format==="time"){
        return ControlType.TimeControl;
      }
      if(_type==="string" && _format==="date-time"){
        return ControlType.DateTimeControl;      
      }
      if(_type==="string" && _format==="password"){
        return ControlType.PasswordControl;      
      }
      if(_type==="string" && _enum!=undefined){
        return ControlType.EnumControl;      
      }
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
      if(_type==="array" && _props.items!=undefined && _props.items.enum!=undefined){
        return ControlType.CheckGroupControl;      
      }
    }
    return ControlType.UnknownControl;
  }
  
// Get Options from property in UISchema
export function getOptions_JSONForm(uischema:JsonUISchema, property:string){
    return getUIElement_JSONForm(uischema, property)?.options;    
}
  
// Get UIElement from property in UISchema
export function getUIElement_JSONForm(uischema:JsonUISchema, property:string){
    let path="#/properties/"+property;
    let UI_Elements:UISchemaElement[]=uischema.elements??undefined;
    if(UI_Elements){
        for(let UI_Element of UI_Elements){  
            if(UI_Element.type==="Control" && UI_Element.scope===path){
                return UI_Element;
            }
        }
    }
    return undefined;
}

export function setProps_FromJSONForms(_uischema:any, _property:string, _props:ControlProps){
  let element=getUIElement_JSONForm(_uischema, _property);          
  if(element){
      let options=element.options;
      if(element.label){
          _props.label=element.label;
      }      
      if(options){
          if(options.readonly){
              _props.readonly=options.readonly;
          }
          if(options.multi){
              _props.multi=options.multi;
          }
          if(options.slider){
              _props.slider=options.slider;
          }
          if(options.trim){
              _props.trim=options.trim;
          }
          if(options.toogle){
              _props.toogle=options.toogle;
          }
          if(options.format){
              _props.format=options.format;
          }
          if(options.inputMode){
            _props.inputMode=options.inputMode;
        }
      }
  }
  return _props;
}
