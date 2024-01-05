import { JsonUISchema, UISchemaElement } from "./JsonSchema";

export function getOptions(uischema:JsonUISchema, property:string){
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

export function getData(initData:any, property:string){
  return initData[property]??'';
}