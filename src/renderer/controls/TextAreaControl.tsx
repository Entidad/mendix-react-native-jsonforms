import{useObject}from'../context/ObjectHook';
import{useState}from'react'
import{View}from"react-native";
import{TextInput}from"react-native";
import{Text}from"react-native";
import*as customVariables from'../theme/widget-variables';
import{mergeDeep}from"../../util/merge";
export function TextAreaControl(props:any){
	const state=useObject();
	let attr=props.props;		
        let styles:any={};
        mergeDeep(styles,customVariables?.input,attr?.style?.input||{});
	let maxCharLimit=attr.maxLength||200;
	const[charCount,setCharCount]=useState(0);
	const _onChange=(text:any)=>{
		setCharCount(text.length);
		state.formData[attr.propertyName]=text;
		state.setFormData(state.formData);
		attr.onChange(state.formData);		
		return text||attr.placeholder||attr.data||attr.value;
	};
	return(
		<View style={{
			marginBottom:10
		}}>
			<Text style={styles.label}>{attr.label||'No label included'}</Text>
			<TextInput
				style={styles.input}
				keyboardType="default"				
				multiline={true}
				maxLength={maxCharLimit}
				numberOfLines={7}
				defaultValue={attr.data||attr.value}
				placeholder={attr.placeholder}
				placeholderTextColor='lightgray'
				underlineColorAndroid="transparent"
				textAlignVertical="top"
				editable={!attr.readonly}
				onChangeText={(text)=>_onChange(text)}
			/>
			<Text style={styles.labelDisabled}>
				{`${charCount}/${maxCharLimit}`}
			</Text>
		</View>
	)
}
