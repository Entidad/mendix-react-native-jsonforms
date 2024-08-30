## JsonformsNative
Mendix JsonForms Render for Native

## Features
Todo...

## Usage
Todo...

## Project Layout
Todo...

## Controls

The following native controls are implemented

* `src/renderer/controls/TextControl.tsx`
* `src/renderer/controls/CheckBoxControl.tsx`
* `src/renderer/controls/CheckGroupControl.tsx`
* `src/renderer/controls/IntegerControl.tsx`
* `src/renderer/controls/NumberControl.tsx`
* `src/renderer/controls/PasswordControl.tsx`
* `src/renderer/controls/RadioControl.tsx`
* `src/renderer/controls/ReadOnlyControl.tsx`
* `src/renderer/controls/TextAreaControl.tsx`
* `src/renderer/controls/TextControl.tsx`
* `src/renderer/controls/UnknownControl.tsx`

## Styling

Compile time styling can be customized by edited `src/renderer/theme/custom-variables.js`. Modeling time styling can be achieved by editing the `UI / Style JSON` field. A sample style can be found at `styles/sample.json`

Here follows some styling samples for the various components.

### TextControl Styling:

![TextControl](../main/images/TextControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
	input: {
		label: {
			numberOfLines: 1,
			color: font.colorTitle,
			fontSize: font.sizeSmall,
			textAlign: "left"
		},
		labelDisabled: {
			color: font.colorTitle
		},
		input: {
			color: font.colorTitle,
			borderColor: contrast.lower,
			backgroundColor: background.primary,
			selectionColor: contrast.lower,
			placeholderTextColor: contrast.low,
			fontSize: font.size,
			lineHeight: font.lineHeight,
			borderWidth: border.width,
			borderRadius: border.radiusLarge,
			minWidth: 48,
			minHeight: 48,
			paddingVertical: spacing.small,
			paddingHorizontal: spacing.small
		},
		inputContainer: {
			underlayColor: `rgba(${anyColorToRgbString(contrast.low)},0.4)`
		},
		inputDisabled: {
			color: font.colorDisabled,
			borderColor: border.color,
			backgroundColor: background.secondary
		},
		inputError: {
			color: brand.danger,
			borderColor: brand.danger,
			placeholderTextColor: brand.danger,
			backgroundColor: brand.dangerLight
		},
		validationMessage: {
			color: brand.danger,
			fontSize: font.size
		},
		// Only used for the DropDown & ReferenceSelector
		valueContainer: {
			rippleColor: contrast.lowest
		},
		itemContainer: {
			paddingVertical: 12,
			paddingHorizontal: spacing.regular,
			backgroundColor: background.primary
		},
		item: {
			color: font.colorTitle,
			fontSize: font.size
		},
		selectedItemContainer: {
			borderWidth: border.width,
			borderRadius: border.radiusLarge,
			borderColor: brand.primary,
			backgroundColor: "transparent"
		},
		selectedItem: {
			color: font.colorTitle,
			fontSize: font.size
		}
	}
}
```

</details>

### TextAreaControl Styling:

![TextControl](../main/images/TextAreaControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
	input: {
		label: {
			numberOfLines: 1,
			color: font.colorTitle,
			fontSize: font.sizeSmall,
			textAlign: "left"
		},
		labelDisabled: {
			color: font.colorTitle
		},
		input: {
			color: font.colorTitle,
			borderColor: contrast.lower,
			backgroundColor: background.primary,
			selectionColor: contrast.lower,
			placeholderTextColor: contrast.low,
			fontSize: font.size,
			lineHeight: font.lineHeight,
			borderWidth: border.width,
			borderRadius: border.radiusLarge,
			minWidth: 48,
			minHeight: 48,
			paddingVertical: spacing.small,
			paddingHorizontal: spacing.small
		},
		inputContainer: {
			underlayColor: `rgba(${anyColorToRgbString(contrast.low)},0.4)`
		},
		inputDisabled: {
			color: font.colorDisabled,
			borderColor: border.color,
			backgroundColor: background.secondary
		},
		inputError: {
			color: brand.danger,
			borderColor: brand.danger,
			placeholderTextColor: brand.danger,
			backgroundColor: brand.dangerLight
		},
		validationMessage: {
			color: brand.danger,
			fontSize: font.size
		},
		// Only used for the DropDown & ReferenceSelector
		valueContainer: {
			rippleColor: contrast.lowest
		},
		itemContainer: {
			paddingVertical: 12,
			paddingHorizontal: spacing.regular,
			backgroundColor: background.primary
		},
		item: {
			color: font.colorTitle,
			fontSize: font.size
		},
		selectedItemContainer: {
			borderWidth: border.width,
			borderRadius: border.radiusLarge,
			borderColor: brand.primary,
			backgroundColor: "transparent"
		},
		selectedItem: {
			color: font.colorTitle,
			fontSize: font.size
		}
	}
}
```

</details>

### NumberControl Styling:

![NumberControl](../main/images/NumberControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
	input: {
		label: {
			numberOfLines: 1,
			color: font.colorTitle,
			fontSize: font.sizeSmall,
			textAlign: "left"
		},
		labelDisabled: {
			color: font.colorTitle
		},
		input: {
			color: font.colorTitle,
			borderColor: contrast.lower,
			backgroundColor: background.primary,
			selectionColor: contrast.lower,
			placeholderTextColor: contrast.low,
			fontSize: font.size,
			lineHeight: font.lineHeight,
			borderWidth: border.width,
			borderRadius: border.radiusLarge,
			minWidth: 48,
			minHeight: 48,
			paddingVertical: spacing.small,
			paddingHorizontal: spacing.small
		},
		inputContainer: {
			underlayColor: `rgba(${anyColorToRgbString(contrast.low)},0.4)`
		},
		inputDisabled: {
			color: font.colorDisabled,
			borderColor: border.color,
			backgroundColor: background.secondary
		},
		inputError: {
			color: brand.danger,
			borderColor: brand.danger,
			placeholderTextColor: brand.danger,
			backgroundColor: brand.dangerLight
		},
		validationMessage: {
			color: brand.danger,
			fontSize: font.size
		},
		// Only used for the DropDown & ReferenceSelector
		valueContainer: {
			rippleColor: contrast.lowest
		},
		itemContainer: {
			paddingVertical: 12,
			paddingHorizontal: spacing.regular,
			backgroundColor: background.primary
		},
		item: {
			color: font.colorTitle,
			fontSize: font.size
		},
		selectedItemContainer: {
			borderWidth: border.width,
			borderRadius: border.radiusLarge,
			borderColor: brand.primary,
			backgroundColor: "transparent"
		},
		selectedItem: {
			color: font.colorTitle,
			fontSize: font.size
		}
	}
}

```

</details>

### CheckBoxControl Styling:

![CheckBoxControl](../main/images/CheckBoxControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
	checkbox:{
		checkboxInput: {
			color: brand.primary,
			size: 20,
			backgroundColor: background.primary,
			borderColor: border.color,
			borderWidth: border.width,
			borderRadius: border.radiusSmall,
			width: 40,
			height: 40
		},
		checkboxInputDisabled: {
			color: brand.primaryLight,
			backgroundColor: background.secondary
		},
		checkboxInputError: {
			color: brand.danger,
			borderColor: brand.danger
		},
		labelContainer: {
			flex:1,
			marginTop:spacing.small,
			marginLeft:spacing.small
		}
	}
	input: {
		label: {
			numberOfLines: 1,
			color: font.colorTitle,
			fontSize: font.sizeSmall,
			textAlign: "left"
		},
		inputError: {
			color: brand.danger,
			borderColor: brand.danger,
			placeholderTextColor: brand.danger,
			backgroundColor: brand.dangerLight
		}
	}
}
```

</details>

### CheckGroupControl Styling:

![CheckGroupControl](../main/images/CheckGroupControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
	checkbox: {
		checkboxInput: {
			color: brand.primary,
			size: 20,
			backgroundColor: background.primary,
			borderColor: border.color,
			borderWidth: border.width,
			borderRadius: border.radiusSmall,
			width: 40,
			height: 40
		},
		labelContainer: {
			flex:1,
			marginTop:spacing.small,
			marginLeft:spacing.small
		}

	},
	input: {
		label: {
			numberOfLines: 1,
			color: font.colorTitle,
			fontSize: font.sizeSmall,
			textAlign: "left"
		},
		inputError: {
			color: brand.danger,
			borderColor: brand.danger,
			placeholderTextColor: brand.danger,
			backgroundColor: brand.dangerLight
		}
	}
}
```

</details>

### IntegerControl Styling:

![RadioControl](../main/images/IntegerControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
	input: {
		label: {
			numberOfLines: 1,
			color: font.colorTitle,
			fontSize: font.sizeSmall,
			textAlign: "left"
		},
		labelDisabled: {
			color: font.colorTitle
		},
		input: {
			color: font.colorTitle,
			borderColor: contrast.lower,
			backgroundColor: background.primary,
			selectionColor: contrast.lower,
			placeholderTextColor: contrast.low,
			fontSize: font.size,
			lineHeight: font.lineHeight,
			borderWidth: border.width,
			borderRadius: border.radiusLarge,
			minWidth: 48,
			minHeight: 48,
			paddingVertical: spacing.small,
			paddingHorizontal: spacing.small
		},
		inputContainer: {
			underlayColor: `rgba(${anyColorToRgbString(contrast.low)},0.4)`
		},
		inputDisabled: {
			color: font.colorDisabled,
			borderColor: border.color,
			backgroundColor: background.secondary
		},
		inputError: {
			color: brand.danger,
			borderColor: brand.danger,
			placeholderTextColor: brand.danger,
			backgroundColor: brand.dangerLight
		},
		validationMessage: {
			color: brand.danger,
			fontSize: font.size
		},
		// Only used for the DropDown & ReferenceSelector
		valueContainer: {
			rippleColor: contrast.lowest
		},
		itemContainer: {
			paddingVertical: 12,
			paddingHorizontal: spacing.regular,
			backgroundColor: background.primary
		},
		item: {
			color: font.colorTitle,
			fontSize: font.size
		},
		selectedItemContainer: {
			borderWidth: border.width,
			borderRadius: border.radiusLarge,
			borderColor: brand.primary,
			backgroundColor: "transparent"
		},
		selectedItem: {
			color: font.colorTitle,
			fontSize: font.size
		}
	}
}
```

</details>

### RadioControl Styling:

![RadioControl](../main/images/RadioControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
    label: {
        numberOfLines: 1,
        color: font.colorTitle,
        fontSize: font.sizeSmall,
        textAlign: "left"
    },
    labelTextStyle: {
        color: font.colorTitle,
        fontSize: font.sizeSmall,
        lineHeight: font.lineHeightSmall,
        marginBottom: spacing.small
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
}
```

</details>

# Compiled Styling

For styling the components `theme/native/custom-variables.js`, `theme/native/exclusion-variables.js`, and `themesource` were copied from a stock standard Mendix project and added to the source tree with minor modifications at the following locations.

* `src/renderer/theme`
* `src/renderer/themesource`

To modify the compiled styling edit `src/renderer/theme/custom-variables.js`

## Demo project
N/A

## Issues, suggestions and feature requests
Todo...

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]

## References

* [https://jsonforms.io/](https://jsonforms.io/)
* [https://jsonforms.io/docs/](https://jsonforms.io/docs/)
* [https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge](https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge)


