import{useObject}from"../context/ObjectHook";
import{createElement,useState}from"react"
import{/*StyleSheet,*/View,TextInput,Text}from"react-native";
import{isEmpty}from"../util/Util"
import*as customVariables from"../theme/widget-variables";
import{mergeDeep}from"../../util/merge";
export function TextControl(props:any){
	const state=useObject();
	let attr=props.props;
        let styles:any={};
        mergeDeep(styles,customVariables?.input,attr?.style?.input||{});
	const[error,setError]=useState(attr.error);
	const _onChange=(text:any)=>{
		state.formData[attr.propertyName]=text;
		state.setFormData(state.formData);
		attr.onChange(state.formData);		
		attr.error=isEmpty(text);
		setError(attr.error);
		//return text;
		return text||attr.placeholder||attr.data||attr.value;		
	};
	return(
		<View style={/*styles?.itemContainer||{}*/{}}>
			<Text style={styles?.label}>{attr.label||"No label included"}</Text>
			<TextInput
				style={(state.showError&&error)?styles?.inputError||{}:styles?.input||{}}
				inputMode={attr.inputMode}
				maxLength={attr.maxLength}
				placeholder={attr.placeholder}
				placeholderTextColor="lightgray"
				defaultValue={attr.data||attr.value}
				editable={!attr.readonly}
				onChangeText={(text)=>_onChange(text)}
			/>
			{(state.showError&&error)
				?<Text style={styles?.inputError||{}}>{attr.errorMessage}</Text>
				:""
			}
		</View>
	)
}
