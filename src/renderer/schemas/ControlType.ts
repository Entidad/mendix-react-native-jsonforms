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
    CheckGroupControl,
    RadioControl,
    SelectControl,  
    EnumControl,
    UnknownControl
} 

export interface ControlProps{
    label?:string;
    title?:string;
    propertyName?:string;
    description?:string;
    value?:string;
    emptyValue?:string;
    default?:any;
    data?:any;
    style?:any;//ockert
    inputMode?:string //stephan
    
    minLength?:number;
    maxLength?:number;
    minimum?:number;
    maximum?:number;
    
    hint?:string;
    readonly?:boolean;
    disabled?:boolean;    
    placeholder?:string;
    options?:any
    
    error?:boolean;
    errorMessage?:string;
    
    multi?:boolean;
    slider?:boolean;
    trim?:boolean;
    toogle?:boolean;
    format?:string;
    enum?:string[];
    enumLabels?:{[key:string]:string;};//ockert
    items?:string[];

    onChange:any;
    debugon:boolean;//ockert
}
