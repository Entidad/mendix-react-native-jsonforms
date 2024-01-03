import { JsonSchema } from "./JsonSchema";
import { View, Text} from 'react-native';
import { createElement } from 'react';

const CONTROL_TYPES = {
    text: "TextControl",
    integer: "IntegerControl",
    number: "NumberControl",
    select: "SelectControl",
    toggle: "ToggleControl",
    radio: "RadioControl",
    checkbox: "CheckboxControl",
    unknown: "UnknownControl",  
  };

export function getSchemaControl(schema:JsonSchema) {
    let { type } = schema;
    if (type==="String") {
      return CONTROL_TYPES.text
    }
    return CONTROL_TYPES.unknown;
}

export const ObjectProperty = (schema:JsonSchema): JSX.Element  => {
  //let name=schema.title??''  
  
  if(schema.type==="object"){
      let properties=schema.properties??"No properties";
      console.log(properties);
      return (
        <View>
          <Text>{'Aqui'}</Text>            
        </View>
      );
  }else{
    return (
      <View>
        <Text>{'NoName'}</Text>            
      </View>
    ); 
  }
}

export const ObjectPropertys = (schema:JsonSchema): JSX.Element  => {
//  let name=schema.title??''  
  if(schema.type==="object"){
      let properties=schema.properties??"No properties";
      console.log(properties);
      return (
        <View>
          <Text>{'Aqui'}</Text>            
        </View>
      );
  }else{
    return (
      <View>
        <Text>{ 'NoName'}</Text>            
      </View>
    ); 
  }
}

