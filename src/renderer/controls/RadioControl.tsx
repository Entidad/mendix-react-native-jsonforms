import{useObject}from"../context/ObjectHook";
import{createElement,useState}from"react";
import{TouchableWithoutFeedback}from"react-native";
import{TouchableOpacity}from"react-native";
import{View}from"react-native";
import{Text}from"react-native";
import{isEmptyBoolean}from"../util/Util";
import*as customVariables from"../theme/custom-variables";
import{mergeDeep}from"../../util/merge";
export function RadioControl(props:any){
	const state=useObject();	
	let attr=props.props;
        let styles:any={};
        mergeDeep(styles,customVariables?.radioButtons,attr?.style?.radioButtons||{});
        let stylesInput:any={};
        mergeDeep(stylesInput,customVariables?.input,attr?.style?.input||{});
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
			<View style={{
				flexDirection:"row",
				marginTop:5
			}}>
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
						<View style={{flex:1}}>
							<Text style={
								styles?.label||{
									numberOfLines: styles?.label?.numberOfLines||1,
									color: styles?.label?.color||"#000000",
									fontSize: styles?.label?.fontSize||16,
									textAlign: styles?.label?.textAlign||"left",
									marginLeft: styles?.label?.marginLeft||0,
									marginTop: styles?.label?.marginTop||0
								}
							}>
								{label}
							</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	}
	return(
		<View style={{
			marginBottom:10
		}}>
			<Text style={stylesInput?.label||{}}>{attr.description||(attr.label||"No label included")}</Text>			
			{opts!=undefined&&opts.map((optionValue)=>(
				renderRadioControl(optionValue)
			))}
			{(state.showError&&error)
				?<Text style={stylesInput?.inputError||{}}>{attr.errorMessage}</Text>
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
