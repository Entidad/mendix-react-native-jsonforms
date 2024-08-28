import{useObject}from"../context/ObjectHook";
import{createElement,useState}from"react";
import{StyleSheet,TouchableWithoutFeedback,TouchableOpacity,View,Text}from"react-native";
import{isEmptyBoolean}from"../util/Util";
import{getStyle}from"../theme/custom-style";
import{mergeDeep}from"../../util/merge";
export function RadioControl(props:any){
	const state=useObject();	
	let attr=props.props;
        let styles:any={};
        mergeDeep(styles,getStyle().radioButtons,attr?.style?.radioButtons||{});
	console.info("RadioControl:");
	console.info(JSON.stringify(styles));
	const styleTmp=StyleSheet.create({...{
		viewControl:{
			marginBottom:10
		},
		viewRow:{
			flexDirection:"row",
			marginTop:5
		},
		inputDescription:{
			marginLeft:0
		},	
		inputRadio:{
			justifyContent:"center",
			alignItems:"center",	
			alignSelf:"center",
			borderColor:"#888888",
			borderWidth:3,
			width:24,
			height:24,
			borderRadius:24
		},
		inputRadioNormal:{
			justifyContent:"center",
			alignItems:"center",			
			alignSelf:"center",	
			borderColor:"#FFF",
			borderWidth:2,
			borderRadius:14,
			width:14,
			height:14
		},	
		inputRadioActive:{
			justifyContent:"center",
			alignItems:"center",			
			alignSelf:"center",	
			borderColor:"#00FF00",
			borderWidth:1,	
			borderRadius:32,
			width:14,
			height:14,
			backgroundColor:"#0000FF",
		},
		inputRadioLabel:{
			paddingLeft:15,
			lineHeight:20,
		}
	},...attr?.style?.radioButtons||{}});
	const[error,setError]=useState(attr.error);
	let opts:any[]=attr.enum||[];	
	let data=getDataFromBoolean(attr.data);
	if(opts.length==0){
		opts.push("Yes");
		opts.push("No");
	}
	const[value,setValue]=useState(data);
	const _onPress=(label:any)=>{
		setValue(label);
		state.formData[attr.propertyName]=label;
		state.setFormData(state.formData);
		attr.onChange(state.formData);
		attr.error=isEmptyBoolean(label);
		setError(attr.error);
	};
	const renderRadioControl=(label:any)=>{		
		return(
			<View style={styleTmp.viewRow}>
				<View style={styles?.radioButtonItemContainerStyle||{}}>
					<TouchableOpacity
						onPress={()=>{_onPress(label)}
					}>
						<View style={value===label?styles?.activeButtonStyle||{}:styles?.circularButtonStyle||{}}>
						</View>
					</TouchableOpacity>
				</View>
				<View style={{/*todo*/}}>
					<TouchableWithoutFeedback
						onPress={()=>{_onPress(label)}}
					>
						<View>
							<Text style={styles?.labelTextStyle||{}}>
								{label}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	}
	return(
		<View style={styleTmp.viewControl}>
			<Text style={styles?.labelTextStyle||{}}>{attr.description||(attr.label||"No label included")}</Text>			
			{opts!=undefined&&opts.map((optionValue)=>(
				renderRadioControl(optionValue)
			))}
			{(state.showError&&error)
				?<Text style={styles?.input?.inputError||{}}>{attr.errorMessage}</Text>
				:""
			}
		</View>
	)
}
function getDataFromBoolean(val:any){
	if(typeof val==="boolean"){
		if(val){return "Yes";}
		return "No";
	}	
	return val;
}
