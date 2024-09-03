import{useObject}from"../context/ObjectHook";
import{createElement,useState}from"react"
import{View}from"react-native";
import{TouchableHighlight}from"react-native";
import{Text}from"react-native";
import*as customVariables from"../theme/widget-variables";
import Svg,{Path}from"react-native-svg"
import{mergeDeep}from"../../util/merge";
export function CheckBoxControl(props:any){
	const state=useObject();
	let attr=props.props;
	let styles:any={};
	mergeDeep(styles,customVariables?.checkboxControl,attr?.style?.checkboxControl||{});
	let stylesInput:any={};
	mergeDeep(stylesInput,customVariables?.input,attr?.style?.input||{});
	const[checked,setChecked]=useState(getDataFromBoolean(attr.data));
	const[error,setError]=useState(attr.error);
	const _onPress=()=>{
		setChecked(!checked);
		state.formData[attr.propertyName]=!checked;
		state.setFormData(state.formData);
		attr.onChange(state.formData);
		attr.error=checked;
		setError(attr.error);
	};
	const renderCheckBox=()=>{
		if(checked){
			return(
				<View style={styles?.checkboxInput||{
					width:styles?.checkboxInput?.width||40,
					height:styles?.checkboxInput?.height||40
				}}>
					<Svg width={styles?.checkboxInput?.width||40} height={styles?.checkboxInput?.height||40} viewBox="0 0 24 24">
						<Path fill={styles?.checkboxInput?.color||"#1A6251"} d="m 5.2350576,12.635087 4.8984404,4.898442 0.179711,-0.179706 2.222656,-2.222655 6.229167,-6.2291688 -2.435439,-2.4354389 -6.229167,6.2291677 -2.4630024,-2.463002 z"/>
					</Svg>
				</View>
			)
		}else{
			return(
				<View style={styles?.checkboxInput||{
					width:styles?.checkboxInput?.width||40,
					height:styles?.checkboxInput?.height||40
				}}>
					<Svg  width={styles?.checkboxInput?.width||40} height={styles?.checkboxInput?.height||40} viewBox="0 0 24 24">
					</Svg>
				</View>
			)
		}
	}
	const renderText=(text:string)=>{
		return (
			<View style={styles?.labelContainer||{
				flex:styles?.labelContainer?.flex||1,
				marginTop:styles?.labelContainer?.marginTop||4,
				marginLeft:styles?.labelContainer?.marginLeft||8
			}}>
				<Text style={[styles?.caption||{}]}>{text}</Text>
			</View>
		);
	}
	return (
		<View style={{}}>
			<Text style={stylesInput?.label||{}}>{attr.description||(attr.label||"No label included")}</Text>
			<TouchableHighlight
				onPress={()=>_onPress()}
				underlayColor="transparent"
			>
				<View style={{
					flexDirection:"row",
					alignItems:"center"
				}}>
					{renderCheckBox()}
					{renderText(attr.label)}
				</View>
			</TouchableHighlight>
			{(state.showError&&error)
				?<Text style={stylesInput?.inputError||{}}>{attr.errorMessage}</Text>
				:""
			}
		</View>
	)
}
function getDataFromBoolean(val:any){
	if(typeof val==="boolean"){
		return val;
	}	
	return false;
 }
