import{useObject}from"../context/ObjectHook";
import{createElement,useState}from"react";
import{StyleSheet,TouchableWithoutFeedback,TouchableOpacity,View,Text}from"react-native";
import{isEmptyBoolean}from"../util/Util";
import*as customVariables from"../theme/custom-variables";
import{mergeDeep}from"../../util/merge";
export function RadioControl(props:any){
	const state=useObject();	
	let attr=props.props;
        let styles:any={};
        mergeDeep(styles,customVariables?.radioButtons,attr?.style?.radioButtons||{});
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
							//<View style={value===label?styles?.activeButtonStyle||{}:styles?.circularButtonStyle||{}}></View>
		return(
			<View style={styleTmp.viewRow}>
				<View style={styles?.radioButtonItemContainerStyle||{}}>
					<TouchableOpacity
						onPress={()=>{_onPress(label)}
					}>
						<View style={styles?.outerCircle||{
							height:styles?.outerCircle?.height||24,
							width:styles?.outerCircle?.width||24,
							borderRadius:styles?.outerCircle?.borderRadius||12,
							borderWidth:styles?.outerCircle?.borderWidth||12,
							borderColor:styles?.outerCircle?.borderColor||"#000",
							alignItems:styles?.outerCircle?.alignItems||"center",
							justifyContent:styles?.outerCircle?.justifyContent||"center"
						}}>
							{
								value===label?
								<View style={styles?.innerCircle||{
									height:styles?.innerCircle?.height||12,
									width:styles?.innerCircle?.width||12,
									borderRadius:styles?.innerCircle?.borderRadius||6,
									backgroundColor:styles?.innerCircle?.backgroundColor||"#000"
								}}/>
								:null
							}
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
			<Text style={styles?.label||{}}>{attr.description||(attr.label||"No label included")}</Text>			
			{opts!=undefined&&opts.map((optionValue)=>(
				renderRadioControl(optionValue)
			))}
			{(state.showError&&error)
				?<Text style={styles?.radioButtonError||{}}>{attr.errorMessage}</Text>
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
