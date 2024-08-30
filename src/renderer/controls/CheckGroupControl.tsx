import{useObject}from'../context/ObjectHook';
import{createElement,useState}from'react'
import{View}from"react-native";
import{TouchableHighlight}from"react-native";
import{Text}from"react-native";
import{isEmptyArray}from'../util/Util'
import*as customVariables from'../theme/custom-variables';
import Svg,{Path}from'react-native-svg'
import{mergeDeep}from"../../util/merge";
export function CheckGroupControl(props:any){
	const state=useObject();	
	let attr=props.props;	
        let styles:any={};
        mergeDeep(styles,customVariables?.checkbox,attr?.style?.checkbox||{});
        let stylesInput:any={};
        mergeDeep(stylesInput,customVariables?.input,attr?.style?.input||{});
	let opts:any[]=attr.enum||[];
	const[error,setError]=useState(attr.error);
	let tmp:any[]=[];
	const[checked,setChecked]=useState(attr.data||tmp);
	const _onPress=(label:any)=>{
		tmp=[...checked];
		let exist=tmp.filter(item=>item===label);
		let arr;
		if(exist.length==0){
			arr=[...tmp,label];
		}else{
			arr=tmp.filter(item=>item!==label);			
		}
		setChecked(arr);		
		attr.error=isEmptyArray(arr);
		setError(attr.error);
	};
	const renderCheckBox=(label:any)=>{
		tmp=[...checked];
		state.formData[attr.propertyName]=tmp;
		state.setFormData(state.formData);		
		attr.onChange(state.formData);
		let exist=tmp.filter(item=>item===label);
		if(exist.length===0){
			return(
				<View style={styles?.checkboxInput||{
					width:styles?.checkBoxInput?.width||40,
					height:styles?.checkBoxInput?.height||40
				}}>
					<Svg width={styles?.checkBoxInput?.width||40} height={styles?.checkBoxInput?.height||40} viewBox="0 0 24 24">
					</Svg>
				</View>
			)
		}else{
			return(
				<View style={styles?.checkboxInput||{
					width:styles?.checkBoxInput?.width||40,
					height:styles?.checkBoxInput?.height||40
				}}>
					<Svg width={styles?.checkBoxInput?.width||40} height={styles?.checkBoxInput?.height||40} viewBox="0 0 24 24">
						<Path fill={styles?.checkboxInput?.color||"#1A6251"} d="m 5.2350576,12.635087 4.8984404,4.898442 0.179711,-0.179706 2.222656,-2.222655 6.229167,-6.2291688 -2.435439,-2.4354389 -6.229167,6.2291677 -2.4630024,-2.463002 z"/>
					</Svg>
				</View>
			)
		}
	}		 
	const renderText=(text:string)=>{
		return(
			<View style={styles?.labelContainer||{
				flex:styles?.labelContainer?.flex||1,
				marginTop:styles?.labelContainer?.marginTop||4,
				marginLeft:styles?.labelContainer?.marginLeft||8
			}}>
				<Text style={[stylesInput?.label||{}]}>{text}</Text>
			</View>
		);
	}
	const renderControl=(label:any)=>{
		return(
			<TouchableHighlight
				onPress={()=>_onPress(label)}
				underlayColor='transparent'
			>
				<View style={{
					flexDirection:'row',
					alignItems:'center',
					height:35,
					marginTop:20
				}}>
					{renderCheckBox(label)}
					{renderText(label)}
				</View>
			</TouchableHighlight>
		);
	}
	return(
		<View style={{
			marginBottom:10
		}}>
			<Text style={stylesInput?.label||{}}>{attr.description||(attr.label||'No label included')}</Text>
			{opts.map((optionValue)=>(
				renderControl(optionValue)
			))}
			{(state.showError&&error)
				?<Text style={stylesInput?.inputError||{}}>{attr.errorMessage}</Text>
				:""
			}
		</View>
	)
}



