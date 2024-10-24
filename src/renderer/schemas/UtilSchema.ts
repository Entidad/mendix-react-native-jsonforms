import { isRJSFSchema, getControl_FromRJSF, setProps_FromRJSF } from './SchemaFromRJSF'
import { getControl_FromJSONForms, setProps_FromJSONForms } from './SchemaFromJSONForms'
import { ControlProps } from "./ControlType"

export function getControlType(_props:any, _uischema:any, _property:string){
  let rjsf:boolean=isRJSFSchema(_uischema);
  if(rjsf){
    return getControl_FromRJSF(_props, _uischema, _property);
  }
  return getControl_FromJSONForms(_props, _uischema, _property);
}

export function getControlProps(schema:any, uischema:any, property:string){
  let props=initControlProps();
  props=setControlProps(schema, property, props)
  let rjsf:boolean=isRJSFSchema(uischema);
  if(rjsf){
      props=setProps_FromRJSF(uischema, property, props);
  }else{
      props=setProps_FromJSONForms(uischema, property, props);
  }
  let label = props.label??(props.title??props.propertyName);
  let value = props.value??(props.default??props.emptyValue);
  props.label=label;
  props.value=value;
  return props;
}

// Initialize Props;
export function initControlProps(){
  let props:ControlProps= {
      label:undefined, 
      value:undefined, 
      default:undefined,
      description:undefined,
      hint:undefined,
      readonly:false,
      disabled:false,
      placeholder:undefined,
      enum:[],
      items:[],
      error:false,
      errorMessage:"This field is required",
      onChange:undefined,
      debugon:true//ockert
  }
  return props;  
}

// Set Basic Props
export function setControlProps(_schema:any, _property:string, _props:ControlProps){
  let props=getBasicProperties(_schema, _property);
  if(isPropertyRequired(_schema, _property)){
      _props.error=true;
  }
  if(props){
      if(props.label){
          _props.label=props.label;
      }
      if(props.title){
          _props.title=props.title;
      }
      if(props.description){
          _props.description=props.description;
      }
      if(props.minLength){
          _props.minLength=props.minLength;
      }
      if(props.maxLength){
          _props.maxLength=props.maxLength;
      }
      if(props.minimum){
          _props.minimum=props.minimum;
      }
      if(props.maximum){
          _props.maximum=props.maximum;
      }
      if(props.enum){
        _props.enum=props.enum;
    }
      if(props.items){
        _props.enum=props.items.enum;
      }      
      if(props.default){
          _props.default=props.default;
      }
  }
  return _props;
}

export function getBasicProperties(_schema:any, _property:string){
  let properties=_schema.properties??undefined;
  if(properties){        
      for(let property in properties){     
          if(property===_property){
              return properties[property];
          }
      }
  }
  return undefined;
}

// Validate if a property is required
export function isPropertyRequired(_schema:any, _property:string){
  let items=_schema.required??undefined;
  if(items){        
      for(let item of items){     
          if(item===_property){
              return true;
          }
      }
  }
  return false;
}

