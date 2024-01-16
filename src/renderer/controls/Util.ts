import {
    getProperties_RJSF, 
    getUIElement_JSONForm,
    getBasicProperties
} from '../schemas/UtilSchema'
import { isRJSFSchema } from '../schemas/UtilSchema'
export interface ControlProps{
    label?:string;
    title?:string;
    propertyName?:string;
    description?:string;
    value?:string;
    emptyValue?:string;
    default?:any;
    
    
    minLength?:number;
    maxLength?:number;
    minimum?:number;
    maximum?:number;
    
    hint?:string;
    readonly?:boolean;
    disabled?:boolean;    
    placeholder?:string;
    options?:any

    
    multi?:boolean;
    slider?:boolean;
    trim?:boolean;
    toogle?:boolean;
    format?:string;
    enum?:string[];
}

// Get Control Props;
export function getControlProps(schema:any, uischema:any, property:string){
    let props=initControlProps();
    props=setControlProps(schema, property, props)
    let rjsf:boolean=isRJSFSchema(uischema);
    if(rjsf){
        props=setControlProps_RJSF(uischema, property, props);
    }else{
        props=setControlProps_JSONForms(uischema, property, props);
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
        placeholder:undefined
    }
    return props;  
}

// Set Basic Properties
export function setControlProps(_schema:any, _property:string, _props:ControlProps){
    let props=getBasicProperties(_schema, _property);
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
        if(props.default){
            _props.default=props.default;
        }
    }
    return _props;
}

// Set RJSF Control Properties
export function setControlProps_RJSF(_uischema:any, _property:string, _props:ControlProps){
    let attrs=getProperties_RJSF(_uischema, _property);
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

// Set JSONForms Control Properties
export function setControlProps_JSONForms(_uischema:any, _property:string, _props:ControlProps){
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
        }
    }
    return _props;
}

