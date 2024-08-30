import{createElement}from'react'
import{View}from"react-native";
import{Text}from"react-native";
import*as customVariables from'../theme/widget-variables';
import{mergeDeep}from"../../util/merge";
export function ReadOnlyControl(props:any){
	let attr=props.props;
        let styles:any={};
        mergeDeep(styles,customVariables?.input,attr?.style?.input||{});
	return (
		<View style={{
			marginBottom:10
		}}>
			<Text style={styles.label && {
				fontWeight:"bold",
				color:"black",
				fontSize:16
			}}>{attr.label}</Text>
			<Text style={styles.labelDisabled && {
				marginLeft:5
			}}>{attr.data}</Text>			
		</View>
	);
}
