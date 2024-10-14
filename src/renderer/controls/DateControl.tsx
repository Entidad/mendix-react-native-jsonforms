import{useObject}from"../context/ObjectHook";
import{createElement,useState}from"react"
import{/*StyleSheet,*/View,TextInput,Text,Pressable,TouchableOpacity,Platform}from"react-native";
import*as customVariables from"../theme/widget-variables";
import{mergeDeep}from"../../util/merge";
import DateTimePicker from "@react-native-community/datetimepicker";
export function DateControl(props:any){
	const state=useObject();
	const [date, setDate] = useState(new Date());
	const [showPicker, setShowPicker] = useState(false);
	let attr=props.props;
        let styles:any={};
        mergeDeep(styles,customVariables?.input,attr?.style?.input||{});
	const [error,setError]=useState(attr.error);
	const toggleDatePicker = () => {
		setShowPicker(!showPicker);
		};
	// const _onChange=(text:any)=>{
	// 	state.formData[attr.propertyName]=text;
	// 	state.setFormData(state.formData);
	// 	attr.onChange(state.formData);		
	// 	attr.error=isEmpty(text);
	// 	setError(attr.error);
	// 	//return text;
	// 	return text||attr.placeholder||attr.data||attr.value;
	// }
	const formatDate = (rawDate:Date) => {
		let date = new Date(rawDate);

		let year = date.getFullYear();
		let month = date.getMonth() + 1; 
		let day = date.getDate;
		return `${year}-${month}-${day}`;
	}
	const _onChange = ({ type }, selectedDate:Date) => {
		if (type === "set"){
			const currentDate = selectedDate;
			setDate(currentDate);
			if(Platform.OS === 'android'){
				toggleDatePicker();
				state.formData[attr.propertyName]=formatDate(date);
			} else {
				toggleDatePicker();
			}	
		}
	}
	const confirmIOSDate = () => {
		state.formData[attr.propertyName]=formatDate(date);
		toggleDatePicker();
	}
	return(
		<View style={/*styles?.itemContainer||{}*/{}}>
			<Text style={styles?.label}>{attr.label||"No label included"}</Text>
			{showPicker && (
				<DateTimePicker
					mode="date"
					value={date}
					display="spinner"
					onChange={_onChange}
					style={(state.showError&&error)?styles?.inputError||{}:styles?.input||{}}
				/>
			)}
			{showPicker && Platform.OS === "ios" && (
				<View style={{flexDirection: "row", justifyContent: "space-around"}}>
					<TouchableOpacity style={[]} onPress={toggleDatePicker}>
						<Text>Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[]} onPress={confirmIOSDate}>
						<Text>Confirm</Text>
					</TouchableOpacity>
				</View>
			)}
			{!showPicker &&(<Pressable onPress={toggleDatePicker}>
				<TextInput
					style={(state.showError&&error)?styles?.inputError||{}:styles?.input||{}}
					placeholder={attr.placeholder}
					placeholderTextColor="lightgray"
					defaultValue={attr.data||attr.value}
					editable={false}
					onPressIn={toggleDatePicker}
				/>
			</Pressable>)}
			{(state.showError&&error)
				?<Text style={styles?.inputError||{}}>{attr.errorMessage}</Text>
				:""
			}
		</View>
	)
}
