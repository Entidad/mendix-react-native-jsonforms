import{useState}from"react";
//React 19 removed the global JSX namespace; it is imported from react instead.
import type{JSX}from"react";
import{View}from"react-native";
import{ScrollView}from"react-native";
//import{validateSchema}from"./util/Validation"
//import{validationStatus}from"./util/Validation"
//import{ErrorList}from"./util/Error";
import{ErrorItem}from"./util/Error";
import{ObjectProvider}from"./context/ObjectProvider"
import{ObjectState}from"./context/ObjectState";
import{getControlType}from"./schemas/UtilSchema"
import{getControlProps}from"./schemas/UtilSchema"
import{ControlType}from"./schemas/ControlType"
import{TextControl}from"./controls";
import{DateControl}from"./controls";
import{TextAreaControl}from"./controls";
import{PasswordControl}from"./controls";
import{NumberControl}from"./controls";
import{IntegerControl}from"./controls";
import{CheckBoxControl}from"./controls";
import{CheckGroupControl}from"./controls";
import{RadioControl}from"./controls";
import{UnknownControl}from"./controls";
import{ReadOnlyControl}from"./controls/ReadOnlyControl";
import{jsonformsControlsContainer}from"./theme/widget-variables";
import{jsonformsControlContainer}from"./theme/widget-variables";
import{mergeDeep}from"../util/merge";
export const Form=({schema,uischema,i18nData,language,formData,onChange,readOnly,style,debugon}:any)=>{
	const[data,setData]=useState(formData);
	const[show,setShow]=useState(false);
	let stylesJsonFormsControlContainer:any={};
	mergeDeep(stylesJsonFormsControlContainer,jsonformsControlContainer||{});
	mergeDeep(stylesJsonFormsControlContainer,style?.jsonFormsControlContainer||{});
	let stylesJsonFormsControlsContainer:any={};
	mergeDeep(stylesJsonFormsControlsContainer,jsonformsControlsContainer||{});
	mergeDeep(stylesJsonFormsControlsContainer,style?.jsonFormsControlsContainer||{});
	/*
	if(false){
		if(validation.errors.length!=0){
			return(
				<View>
					<ErrorList errors={validation.errors}/>
				</View>
			);
		}else{
			return(
				<View>
					<ErrorItem message={"The form data is empty"}/>
				</View>
			);
		}
	}
	*/
	const START_STATE:ObjectState={
		schema:schema,
		uischema:uischema,
		i18nData:i18nData,
		language:language,
		formData:data,
		setFormData:setData,
		showError:show,
		setShowError:setShow,
		debugon:debugon
	};
	let elements=elementList(schema,uischema,i18nData,language,onChange,readOnly,style,formData,debugon);
	return(			
		<ObjectProvider
			objectState={START_STATE}
		>
			<View style={stylesJsonFormsControlsContainer.viewControl}>
				<ScrollView>
					{
						elements.map((element:JSX.Element)=>(
							<View style={stylesJsonFormsControlContainer}>
								{element}
							</View>
						))
					}
				</ScrollView>
			</View>
		</ObjectProvider>
	)
}
export const elementList=(schema:any,uischema:any,i18nData:any,language:string,onChange:any,readOnly:boolean,style:any,formData:any,debugon:boolean):JSX.Element[]=>{
	let properties=schema.properties??undefined;
	let elements:JSX.Element[]=[];
	if(properties){		
		for(let property in properties){
			let allProps=properties[property];
			let control=getControlType(allProps,uischema,property);
			let props=getControlProps(schema,uischema,property);
			props.data=formData[property];
			props.propertyName=property;
			props.onChange=onChange;
			props.style=style;
			props.debugon=debugon;//ockert
			props.enumLabels={};//ockert
			let translate=getObjectTranslate(i18nData,language,property);
			if(translate){
				props.label=translate.label;
				//Ockert - Mon Jan 20 08:10:07 SAST 2025 - beg
				if(
					control==ControlType.RadioControl||
					control==ControlType.CheckGroupControl
				){
					if(props.enum)
					props.enum.forEach((v,i)=>{
						if(
							props.enum&&
							props.enum[i]&&
							translate[props.enum[i]]&&
							props.enumLabels
						){
							props.enumLabels[props.enum[i]]=translate[props.enum[i]];
							//props.enum[i]=translate[props.enum[i]];
						}
					});
				}
				//Ockert - Mon Jan 20 08:10:07 SAST 2025 - end
				props.description=translate.description;
			}
			if(readOnly){
				props.label=(props.label||"No label").toString();
				let defaultValue=props.data||"---";
				if(defaultValue!==undefined){					
					if(control==ControlType.CheckGroupControl){
						let tmp=[...defaultValue];
						defaultValue=tmp.toString();
					}
					if(control==ControlType.CheckBoxControl){
						defaultValue=props.data?"Yes":"No";
					}else{
						defaultValue=defaultValue.toString();
					}
				}else{
					defaultValue="---"
				}
				props.data=defaultValue;
				elements.push(<ReadOnlyControl props={props}/>);
			}else{
				switch(control){
					case ControlType.TextControl:
						elements.push(<TextControl props={props}/>);
						break;
					case ControlType.DateControl:
						elements.push(<DateControl props={props}/>);
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
					case ControlType.RadioControl:
						elements.push(<RadioControl props={props}/>);
						break;
					case ControlType.PasswordControl:
						elements.push(<PasswordControl props={props}/>);
						break;
					default:
						let aux=property+",Type:"+allProps.type+", Ctrl:"+ControlType[control];
						elements.push(<UnknownControl label={aux}/>)
						break;
				}		
			}
		}
	}else{
		elements.push(
			<View>
				<ErrorItem message={"No properties"}/>
			</View>
		);
	}
	return(elements);
}
export function getObjectTranslate(i18nData:any,language:string,propertyName:string){
	if(language!==""){
		let arr=i18nData[language];
		return(arr[propertyName]);
	}
	return(undefined);
}
