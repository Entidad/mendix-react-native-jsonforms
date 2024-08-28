import{useObject}from'../context/ObjectHook';
import{createElement}from'react'
import{StyleSheet,View,TextInput,Text}from"react-native";
const styles=StyleSheet.create({
	inputControl:{
		height:40,
		marginLeft:12,
		borderColor:'#000000',
		borderWidth:1,
		marginBottom:12
	},
	inputLabel:{
		marginLeft:12
	}
});
export function PasswordControl(props:any){
	const state=useObject();
	const _onChange=(text:any)=>{
		state.setFormData(state.formData);
		return text||attr.placeholder||attr.value;
	};
	let attr=props.props;
	return(
		<View>
			<Text style={styles.inputLabel}>{attr.label || 'No label included'}</Text>	 
			<TextInput
				style={styles.inputControl}
				keyboardType="default"
				maxLength={attr.maxLength}
				onChangeText={(text)=>_onChange(text)}
			/>
		</View>
	)
}
