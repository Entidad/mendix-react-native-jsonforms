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
    DateControl,
    TimeControl,
    DateTimeControl,  
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
    items?:string[];

    onChange:any;
}