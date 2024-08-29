import{useObject}from'../context/ObjectHook';
import{createElement,useState}from'react'
import{StyleSheet,View,TouchableHighlight,Text}from"react-native";
import{isEmptyArray}from'../util/Util'
import*as customVariables from'../theme/custom-variables';
import Svg,{Path}from'react-native-svg'
import{mergeDeep}from"../../util/merge";
const styleTmp=StyleSheet.create({
	viewControl:{
		marginBottom:10
	},
	container:{
		flexDirection:'row',
		alignItems:'center',
		height:35,
		marginTop:5
	},	
	iconCheck:{		
		width:40,
		height:40
	},
	iconUncheck:{		
		width:40,
		height:40		
	},
	iconLabel:{
		flex:1,
		marginBottom:15
	}
});
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
				<View style={styleTmp.iconUncheck}>
					<Svg width="24" height="24" viewBox="0 0 24 24">
						<Path fill={styles?.checkboxInput?.color||"#D4D4D4"} d="M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z"/>
					</Svg>
				</View>
			)
		}else{
			return(
				<View style={styleTmp.iconCheck}>
					<Svg width="24" height="24" viewBox="0 0 24 24">
						<Path fill={styles?.checkboxInput?.color||"#1A6251"} d="M19 0h-14c-2.762 0-5 2.239-5 5v14c0 2.761 2.238 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-8.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z"/>
					</Svg>
				</View>
			)
		}
	}		 
	const renderText=(text:string)=>{
		return(
			<View style={styleTmp.iconLabel}>
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
				<View style={styleTmp.container}>
					{renderCheckBox(label)}
					{renderText(label)}
				</View>
			</TouchableHighlight>
		);
	}
	return(
		<View style={styleTmp.viewControl}>
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
