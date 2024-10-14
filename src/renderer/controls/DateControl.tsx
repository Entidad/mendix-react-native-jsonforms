import { useObject } from "../context/ObjectHook";
import { createElement, useState } from "react"
import {/*StyleSheet,*/View, TextInput, Text, Pressable, TouchableOpacity, Platform } from "react-native";
import { isEmpty } from "../util/Util"
import *as customVariables from "../theme/widget-variables";
import { mergeDeep } from "../../util/merge";
import DateTimePicker from "@react-native-community/datetimepicker";
export function DateControl(props: any) {
	const state = useObject();
	let attr = props.props;
	let styles: any = {};
	mergeDeep(styles, customVariables?.input, attr?.style?.input || {});
	const [error, setError] = useState(attr.error);
	const [date, setDate] = useState(getDateFromString(attr.data));
	const [showPicker, setShowPicker] = useState(false);
	const toggleDatePicker = () => {
		setShowPicker(!showPicker);
	};
	const formatDate = (rawDate: Date) => {
		let date = new Date(rawDate);
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		return `${year}-${month}-${day}`;
	};
	const _onChange = ({ type }, selectedDate: Date) => {
		if (type === "set") {
			const currentDate = selectedDate;
			console.info(">>> 1 type: " + type + "  platform os: " + Platform.OS + " selectedDate: "+ selectedDate);
			setDate(currentDate);
			if (Platform.OS === 'android') {
				toggleDatePicker();
				let strDate = formatDate(currentDate);
				console.info(">>> 2 type: " + type + "  platform os: " + Platform.OS + " strDate: "+ strDate);
				state.formData[attr.propertyName] = strDate;
				state.setFormData(state.formData);
				attr.onChange(state.formData);
				attr.error = isEmpty(strDate);
				setError(attr.error);
				console.info(">>> 3 type: " + type + "  platform os: " + Platform.OS + " date: "+ currentDate);
			}
			else {
				toggleDatePicker();
				console.info(">>> 4 type: " + type + "  platform os: " + Platform.OS + " date: "+ currentDate);
			}
		}
		else {
			toggleDatePicker();
			console.info(">>> 5 type: " + type + "  platform os: " + Platform.OS + " date: "+ date);
		}
	};
	const confirmIOSDate = () => {
		state.formData[attr.propertyName] = formatDate(date);
		toggleDatePicker();
		console.info(">>> 6 platform os: " + Platform.OS + " date: "+ date);
	};
	return (
		<View style={{}}>
			<Text style={styles?.label}>{attr.label || "No label included"}</Text>
			{showPicker ? (
				<DateTimePicker
					mode="date"
					value={date}
					display="spinner"
					onChange={_onChange}
					style={(state.showError && error) ? styles?.inputError || {} : styles?.input || {}}
				/>
			) : null}
			{(showPicker && Platform.OS === "ios") ? (
				<View style={{ flexDirection: "row", justifyContent: "space-around" }}>
					<TouchableOpacity style={[]} onPress={toggleDatePicker}>
						<Text>Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity style={[]} onPress={confirmIOSDate}>
						<Text>Confirm</Text>
					</TouchableOpacity>
				</View>
			) : null}
			<Pressable onPress={toggleDatePicker}>
				<TextInput
					style={(state.showError && error) ? styles?.inputError || {} : styles?.input || {}}
					placeholder={attr.placeholder}
					placeholderTextColor="lightgray"
					defaultValue={attr.data || attr.value}
					editable={false}
					onPressIn={toggleDatePicker}
				/>
			</Pressable>
			{(state.showError && error) ? (
				<Text style={styles?.inputError || {}}>{attr.errorMessage}</Text>
			) : null}
		</View>
	)
}
function getDateFromString(val:string){
	if(!isEmpty(val)){
		let parts = val.split('-');
		if(parts.length==3){
			let parsedDate = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])); 
			return parsedDate;
		} else return new Date();
	}
	else return new Date();
};
