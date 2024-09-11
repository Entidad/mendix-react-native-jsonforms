import{createElement}from'react'
import{View}from"react-native";
import{Text}from"react-native";
import*as customVariables from'../theme/widget-variables';
import{mergeDeep}from"../../util/merge";
export function ReadOnlyControl(props:any){
	let attr=props.props;
        let styles:any={};
        mergeDeep(styles,customVariables?.readOnlyControl,attr?.style?.readOnlyControl||{});
/*
			marginBottom:10
*/
/*

				fontWeight:"bold",
				color:"black",
				fontSize:16
*/
/*
				marginLeft:5
*/
	return (
		<View style={styles?.container||{}}>
			<Text style={styles?.label||{}}>{attr.label}</Text>
			<Text style={styles?.value||{}}>{attr.data}</Text>			
		</View>
	);
}
