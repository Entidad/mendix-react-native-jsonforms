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
		padding:10
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
	const logname="DateControl.tsx";
	const log=(data:any)=>{
		if(props.props.debugon)console.info(logname+":"+data);
	}
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
		log("DateControl:toggleDatePicker:beg");
		setShowPicker(!showPicker);
		setModalVisible(!modalVisible);
		log("DateControl:toggleDatePicker:end");
	};
	const formatDate=(rawDate:Date)=>{
		log("DateControl:formatDate:beg");
		let date=new Date(rawDate);
		let year=date.getFullYear();
		let month=date.getMonth()+1;
		let day=date.getDate();
		log("DateControl:formatDate:end");
		return`${year}-${month}-${day}`;
	};
	const _onChange=(type:any,selectedDate?:any)=>{
		log("DateControl:_onChange:beg");
		let ret;
		/*
		log("dispatchConfig");
			log(JSON.stringify(type.dispatchConfig));
		//log("_targetInst");
		//	log(JSON.stringify(type._targetInst));
		log("nativeEvent");
			log(JSON.stringify(type.nativeEvent));
		log("_dispatchListeners");
			log(JSON.stringify(type._dispatchListeners));
		//log("_dispatchInstances");
		//	log(JSON.stringify(type._dispatchInstances));
		log("type");
			log(JSON.stringify(type.type));
		log("target");
			log(JSON.stringify(type.target));
		log("currentTarget");
			log(JSON.stringify(type.currentTarget));
		log("eventPhase");
			log(JSON.stringify(type.eventPhase));
		log("bubbles");
			log(JSON.stringify(type.bubbles));
		log("cancelable");
			log(JSON.stringify(type.cancelable));
		log("timeStamp");
			log(JSON.stringify(type.timeStamp));
		log("defaultPrevented");
			log(JSON.stringify(type.defaultPrevented));
		log("isTrusted");
			log(JSON.stringify(type.isTrusted));
		log("isDefaultPrevented");
			log(JSON.stringify(type.isDefaultPrevented));
		log("isPropagationStopped");
			log(JSON.stringify(type.isPropagationStopped));
		*/
		if(type?.type=="dismissed"){
		}else if(type==="set"){
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
				ret=strDate||attr.placeholder||attr.data||attr.value;;
			}else{
				toggleDatePicker();
				let strDate=formatDate(currentDate);
				state.formData[attr.propertyName]=strDate;
				state.setFormData(state.formData);
				attr.onChange(state.formData);
				attr.error=isEmpty(strDate);
				setError(attr.error);
				ret=strDate||attr.placeholder||attr.data||attr.value;;
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
				ret=strDate||attr.placeholder||attr.data||attr.value;;
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
				ret=strDate||attr.placeholder||attr.data||attr.value;
			}
		}
		log("DateControl:_onChange:end");
		return(ret);
	};
	const confirmIOSDate=()=>{
		log("DateControl:confirmIOSDate:beg");
		state.formData[attr.propertyName]=formatDate(date);
		toggleDatePicker();
		_onChange(date);
		log("DateControl:confirmIOSDate:end");
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
						onPress={()=>{
							log("DateControl:modalVisible:true");
							setModalVisible(true)
						}}
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
	//log("DateControl:getDateFromString:beg");
	let ret;
	if(!isEmpty(val)){
		let parts=val.split("-");
		if(parts.length==3){
			let parsedDate=new Date(parseInt(parts[0]),parseInt(parts[1])-1,parseInt(parts[2]));
			ret=parsedDate;
		}else{
			ret=new Date();
		}
	}else{
		ret=new Date();
	}
	//log("DateControl:getDateFromString:end");
	return(ret);
};
