//export default from "./custom-variables.js";
import{
	font,
	spacing,
	border,
	brand,
	checkbox
}from"../../theme/theme/native/custom-variables.js";
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
    radioButtonItemContainerStyle: {
        marginBottom: spacing.small
    },
    radioButtonError: {
        color: brand.danger,
        borderColor: brand.danger,
        placeholderTextColor: brand.danger,
        backgroundColor: brand.dangerLight
    },
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
