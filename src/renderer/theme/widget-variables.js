//export default from "./custom-variables.js";
import{
	font,
	spacing,
	border,
	brand,
	checkbox,
	button,
}from"../../theme/theme/native/custom-variables.js";
import { StyleSheet } from "react-native";
export * from "../../theme/theme/native/custom-variables.js";
// entidad
// Radio buttons styles
export const radioButtons = {
    caption: {
        numberOfLines: 1,
        color: font.colorTitle,
        fontSize: font.sizeSmall,
        lineHeight: font.lineHeightSmall,
        marginBottom: spacing.small,
        marginLeft: spacing.small,
        marginTop: spacing.smaller
    },
    outerCircle: {
	height: 24,
	width: 24,
	borderRadius: 12,
	borderWidth: 2,
        borderColor: border.color,
	alignItems: 'center',
	justifyContent: 'center',
    },
    innerCircle: {
	height: 12,
	width: 12,
	borderRadius: 6,
        backgroundColor: brand.primary
    },
    radioButtonError: {
        color: brand.danger,
        borderColor: brand.danger,
        placeholderTextColor: brand.danger,
        backgroundColor: brand.dangerLight
    },
    radioButtonItemContainerStyle: {
        marginBottom: spacing.small,
        marginTop: spacing.small
    }
};
export const checkboxControl={...checkbox,...{
	caption:{
		numberOfLines: 1,
		color: font.colorTitle,
		fontSize: font.sizeSmall,
		lineHeight: font.lineHeightSmall,
		marginBottom: spacing.small,
		marginLeft: spacing.small,
		marginTop: spacing.smaller
	}
}};
export const jsonformsControlsContainer=StyleSheet.create({
//export const jsonformsControlsContainer={
    viewControl:{
        marginLeft: 0,
        marginTop:0,
        marginBottom:0,
        marginRight:0,
        flexDirection: 'column'
    }
//};
});
export const jsonformsControlContainer={
	marginBottom:0,
	marginTop:0,
	paddingBottom:0,
	paddingTop:0,
	borderColor:"#000000",
	borderTopWidth:0,
	borderTopHeight:0
};
export const readOnlyControl={
	label: {
		fontSize: font.sizeSmall,
		fontWeight: font.weightBold,
		color: font.colorTitle
	},
	value:{
		fontSize: font.sizeSmall,
		fontWeight: font.weightNormal,
		color: font.colorTitle
	},
	container:{
		marginBottom:spacing.small
	}
}
export const dateTimePicker={
	buttonContainer:{
		flexDirection:"row"
	},
	button:button,
	buttonCancel:{
	},
	buttonConfirm:{
	}
}
