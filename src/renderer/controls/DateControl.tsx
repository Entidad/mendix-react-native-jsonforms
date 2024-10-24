import{useObject}from"../context/ObjectHook";
import{createElement,useState}from"react"
import{StyleSheet,View,TextInput,Text,Pressable,TouchableOpacity,Platform}from"react-native";
import{isEmpty}from"../util/Util"
import*as customVariables from"../theme/widget-variables";
import{mergeDeep}from"../../util/merge";
import DateTimePicker from"@react-native-community/datetimepicker";
import{Alert,Modal}from"react-native";
import{SafeAreaView,SafeAreaProvider}from"react-native-safe-area-context";
const stylesModal=StyleSheet.create({
	centeredView:{
		flex:1,
		justifyContent:"center",
		alignItems:"center",
	},
	modalView:{
		height:"25%",
		width:"90%",
		backgroundColor:"#25292e",
		borderTopRightRadius:18,
		borderTopLeftRadius:18,
		bottom:0,
	},
	button:{
		borderRadius:20,
		padding:10,
		elevation:2,
	},
	buttonOpen:{
		backgroundColor:"#F194FF",
	},
	buttonClose:{
		backgroundColor:"#2196F3",
	},
	textStyle:{
		color:"white",
		fontWeight:"bold",
		textAlign:"center",
	},
	modalText:{
		marginBottom:15,
		textAlign:"center",
	}
});
export function DateControl(props:any){
	const state=useObject();
	let attr=props.props;
	let styles:any={};
	mergeDeep(styles,customVariables?.input,attr?.style?.input||{});
	let stylesButton:any={};
	mergeDeep(stylesButton,customVariables?.button,attr?.style?.button||{});
	let stylesDateTimePicker:any={};
	mergeDeep(stylesDateTimePicker,customVariables?.dateTimePicker,attr?.style?.dateTimePicker||{});
	const[error,setError]=useState(attr.error);
	const[date,setDate]=useState(getDateFromString(attr.data));
	const[showPicker,setShowPicker]=useState(false);
	const[modalVisible,setModalVisible]=useState(false);//ockert
	const toggleDatePicker=()=>{
		setShowPicker(!showPicker);
		setModalVisible(!modalVisible);
	};
	const formatDate=(rawDate:Date)=>{
		let date=new Date(rawDate);
		let year=date.getFullYear();
		let month=date.getMonth()+1;
		let day=date.getDate();
		return`${year}-${month}-${day}`;
	};
	const _onChange=(type:any,selectedDate?:any)=>{
		/*
		console.info("dispatchConfig");
			console.info(JSON.stringify(type.dispatchConfig));
		//console.info("_targetInst");
		//	console.info(JSON.stringify(type._targetInst));
		console.info("nativeEvent");
			console.info(JSON.stringify(type.nativeEvent));
		console.info("_dispatchListeners");
			console.info(JSON.stringify(type._dispatchListeners));
		//console.info("_dispatchInstances");
		//	console.info(JSON.stringify(type._dispatchInstances));
		console.info("type");
			console.info(JSON.stringify(type.type));
		console.info("target");
			console.info(JSON.stringify(type.target));
		console.info("currentTarget");
			console.info(JSON.stringify(type.currentTarget));
		console.info("eventPhase");
			console.info(JSON.stringify(type.eventPhase));
		console.info("bubbles");
			console.info(JSON.stringify(type.bubbles));
		console.info("cancelable");
			console.info(JSON.stringify(type.cancelable));
		console.info("timeStamp");
			console.info(JSON.stringify(type.timeStamp));
		console.info("defaultPrevented");
			console.info(JSON.stringify(type.defaultPrevented));
		console.info("isTrusted");
			console.info(JSON.stringify(type.isTrusted));
		console.info("isDefaultPrevented");
			console.info(JSON.stringify(type.isDefaultPrevented));
		console.info("isPropagationStopped");
			console.info(JSON.stringify(type.isPropagationStopped));
		*/
		if(type?.type=="dismissed"){
			return;
		}
		if(type==="set"){
			const currentDate=selectedDate;
			setDate(currentDate);
			if(Platform.OS==="android"){
				toggleDatePicker();
				let strDate=formatDate(currentDate);
				state.formData[attr.propertyName]=strDate;
				state.setFormData(state.formData);
				attr.onChange(state.formData);
				attr.error=isEmpty(strDate);
				setError(attr.error);
				return strDate||attr.placeholder||attr.data||attr.value;;
			}else{
				toggleDatePicker();
				let strDate=formatDate(currentDate);
				state.formData[attr.propertyName]=strDate;
				state.setFormData(state.formData);
				attr.onChange(state.formData);
				attr.error=isEmpty(strDate);
				setError(attr.error);
				return strDate||attr.placeholder||attr.data||attr.value;;
			}
		}else{
			if(Platform.OS==="android"){
				toggleDatePicker();
				let currentDate=type.nativeEvent.timestamp;
				let strDate=formatDate(currentDate);
				state.formData[attr.propertyName]=strDate;
				state.setFormData(state.formData);
				attr.onChange(state.formData);
				attr.error=isEmpty(strDate);
				setError(attr.error);
				return strDate||attr.placeholder||attr.data||attr.value;;
			}else{
				//if(Object.keys(type).length>0)return;
				let currentDate=type?.nativeEvent?.timestamp??type;
				let strDate=formatDate(currentDate);
				state.formData[attr.propertyName]=strDate;
				state.setFormData(state.formData);
				attr.onChange(state.formData);
				toggleDatePicker();
				attr.error=isEmpty(strDate);
				setError(attr.error);
				return strDate||attr.placeholder||attr.data||attr.value;
			}
		}
	};
	const confirmIOSDate=()=>{
		state.formData[attr.propertyName]=formatDate(date);
		toggleDatePicker();
		_onChange(date);
	};
	return(
		<View style={{}}>
			<Text style={styles?.label}>{attr.label||"No label included"}</Text>
			{showPicker?(
				<SafeAreaProvider>
					<SafeAreaView style={stylesModal.centeredView}>
						<Modal
							animationType="slide"
							transparent={true}
							visible={modalVisible}
							onRequestClose={() => {
								setModalVisible(!modalVisible);
							}}
							style={{margin:0,justifyContent:"center",alignItems:"center"}}
						>
							<View style={stylesModal.centeredView}>
								<View style={stylesModal.modalView}>
									<DateTimePicker
										mode="date"
										value={date}
										display="inline"
										onChange={_onChange}
										style={(state.showError&&error)?styles?.inputError||{}:styles?.input||{}}
									/>
									{(showPicker&&Platform.OS==="ios")?(
										<View style={
											stylesDateTimePicker.buttonContainer
										}>
											<TouchableOpacity onPress={toggleDatePicker} style={{
												...stylesDateTimePicker.button.container,
												...stylesDateTimePicker.button.primary,
												...stylesDateTimePicker.buttonCancel,
												...{
													flex:1,
													justifyContent:"center"
												}
											}}>
												<Text style={{
													...stylesDateTimePicker.button.header,
													...{
														textAlign:"center"
													}
												}}>
													Cancel
												</Text>
											</TouchableOpacity>
											<TouchableOpacity onPress={confirmIOSDate} style={{
												...stylesDateTimePicker.button.container,
												...stylesDateTimePicker.button.primary,
												...stylesDateTimePicker.buttonConfirm,
												...{
													flex:1,
													justifyContent:"center"
												}
											}}>
												<Text style={{
													...stylesDateTimePicker.button.header,
													...{
														textAlign:"center"
													}
												}}>
													Confirm
												</Text>
											</TouchableOpacity>
										</View>
									) : null}
								</View>
							</View>
						</Modal>
					<Pressable
						style={[styles.button,styles.buttonOpen]}
						onPress={()=>setModalVisible(true)}
					>
						<Text style={styles.textStyle}>Show Modal</Text>
					</Pressable>
				</SafeAreaView>
			</SafeAreaProvider>
			):null}
			<Pressable onPress={toggleDatePicker}>
				<TextInput
					style={(state.showError&&error)?styles?.inputError||{}:styles?.input||{}}
					placeholder={attr.placeholder}
					placeholderTextColor="lightgray"
					defaultValue={attr.data||attr.value}
					editable={false}
					onPressIn={toggleDatePicker}
				/>
			</Pressable>
			{(state.showError&&error)?(
				<Text style={styles?.inputError||{}}>{attr.errorMessage}</Text>
			):null}
		</View>
	)
}
function getDateFromString(val:string){
	if(!isEmpty(val)){
		let parts=val.split("-");
		if(parts.length==3){
			let parsedDate=new Date(parseInt(parts[0]),parseInt(parts[1])-1,parseInt(parts[2]));
			return parsedDate;
		}else{
			return new Date();
		}
	}else{
		return new Date();
	}
};
