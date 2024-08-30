## JsonformsNative
Mendix JsonForms Render for Native

## Features
JSON Forms is a declarative framework for efficiently building form-based web UIs. These UIs are targeted at entering, modifying and viewing data and are usually embedded within an application.

Implements features from the JSON Forms library in a mendix widget

## Usage
Emplace the JSON Forms widget in a dataview and configure the attributes

## Controls Implemented

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
    "input": {
        "label": {
            "numberOfLines": 1,
            "color": "#FF0000",
            "fontSize": 12,
            "textAlign": "left"
        },
        "input": {
            "color": "#FF0000",
            "borderColor": "#FF0000",
            "backgroundColor": "#FF0000",
            "selectionColor": "#FF0000",
            "placeholderTextColor": "#FF0000",
            "fontSize": 8,
            "lineHeight": 8,
            "borderWidth": 8,
            "borderRadius": 12,
            "minWidth": 48,
            "minHeight": 48,
            "paddingVertical": 4,
            "paddingHorizontal":8 
        },
        "inputError": {
            "color": "#FF0000",
            "borderColor": "#FF0000",
            "placeholderTextColor": "#FF0000",
            "backgroundColor": "#FF0000" 
        },
        "itemContainer": {
            "paddingVertical": 12,
            "paddingHorizontal": 8,
            "backgroundColor": "#FF0000" 
        }
    }
}
```

</details>

### TextAreaControl Styling

![TextAreaControl](../main/images/TextAreaControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
	input: {
		label: {
			numberOfLines: 1,
			color: "#FF0000",
			fontSize: 8,
			textAlign: "left"
		},
		labelDisabled: {
			color: "#FF0000"
		},
		input: {
			color: "#FF0000",
			borderColor: "#FF0000",
			backgroundColor: "#FF0000",
			selectionColor: "#FF0000",
			placeholderTextColor: "#FF0000",
			fontSize: 8,
			lineHeight: 8,
			borderWidth: 8,
			borderRadius: 8,
			minWidth: 48,
			minHeight: 48,
			paddingVertical: 8,
			paddingHorizontal: 8
		},
		inputError: {
			color: "#FF0000",
			borderColor: "#FF0000",
			placeholderTextColor: "#FF0000",
			backgroundColor: "#FF0000"
		}
	}
}

```

</details>

### CheckBoxControl Styling

![CheckBoxControl](../main/images/CheckBoxControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
	"checkbox":{
		"checkboxInput": {
			"color": "#FF0000",
			"size": 20,
			"backgroundColor": "#FF0000",
			"borderColor": "#FF0000",
			"borderWidth": 8,
			"borderRadius": 8,
			"width": 40,
			"height": 40
		},
		"labelContainer": {
			"flex":1,
			"marginTop":8,
			"marginLeft":8
		}
	}
	"input": {
		"label": {
			"numberOfLines": 1,
			"color": "#FF0000",
			"fontSize": 8,
			"textAlign": "left"
		},
		"inputError": {
			"color": "#FF0000",
			"borderColor": "#FF0000",
			"placeholderTextColor": "#FF0000",
			"backgroundColor": "#FF0000"
		}
	}
}
```

</details>

### CheckGroupControl Styling

![CheckGroupControl](../main/images/CheckGroupControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
	"checkbox": {
		"checkboxInput": {
			"color": "#FF0000",
			"size": 20,
			"backgroundColor": "#FF0000",
			"borderColor": "#FF0000",
			"borderWidth": 8,
			"borderRadius": 8,
			"width": 40,
			"height": 40
		},
		"labelContainer": {
			"flex":1,
			"marginTop":8,
			"marginLeft":8
		}

	},
	"input": {
		"label": {
			"numberOfLines": 1,
			"color": "#FF0000"
			"fontSize": 8,
			"textAlign": "left"
		},
		"inputError": {
			"color": "#FF0000",
			"borderColor": "#FF0000",
			"placeholderTextColor": "#FF0000",
			"backgroundColor": "#FF0000"
		}
	}
}
```

</details>

### IntegerControl Styling

![IntegerControl](../main/images/IntegerControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
	"input": {
		"label": {
			"numberOfLines": 1,
			"color": "#FF0000"
			"fontSize": 8,
			"textAlign": "left"
		},
		"input": {
			"color": "#FF0000",
			"borderColor": "#FF0000",
			"backgroundColor": "#FF0000",
			"selectionColor": "#FF0000",
			"placeholderTextColor": "#FF0000",
			"fontSize": 8,
			"lineHeight": 8,
			"borderWidth": 8,
			"borderRadius": 8,
			"minWidth": 48,
			"minHeight": 48,
			"paddingVertical": 8,
			"paddingHorizontal": 8
		},
		"inputError": {
			"color": "#FF0000",
			"borderColor": "#FF0000",
			"placeholderTextColor": "#FF0000",
			"backgroundColor": "#FF0000"
		}
	}
}
```

</details>

### RadioControl Styling

![RadioControl](../main/images/RadioControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
	"radioButtons":{
		"label": {
			"numberOfLines": 1,
			"color": "#FF0000",
			"fontSize": 8,
			"lineHeight": 8,
			"marginBottom": 8,
			"marginLeft": 8,
			"marginTop": 8
		},
		"outerCircle": {
			"height": 24,
			"width": 24,
			"borderRadius": 12,
			"borderWidth": 2,
			"borderColor": "#FF0000",
			"alignItems": 'center',
			"justifyContent": 'center',
		},
		"innerCircle": {
			"height": 12,
			"width": 12,
			"borderRadius": 6,
			"backgroundColor": "#FF0000"
		},
		"radioButtonItemContainerStyle": {
			"marginBottom": 8
		}
	},
	"input": {
		"label": {
			"numberOfLines": 1,
			"color": "#FF0000",
			"fontSize": 8,
			"textAlign": "left"
		}
	}
}
```

</details>

# Compiled Styling

For styling the components `theme/native/custom-variables.js`, `theme/native/exclusion-variables.js`, and `themesource` were copied from a stock standard Mendix project and added to the source tree with minor modifications at the following locations.

* `src/renderer/theme`
* `src/renderer/themesource`

To modify the compiled styling edit `src/renderer/theme/custom-variables.js`

## Demo project
Currently there is no demo project

## Issues, suggestions and feature requests

[GitHub](https://github.com/Entidad/mendix-react-native-jsonforms/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

Contributions welcome

## References

* [https://jsonforms.io/](https://jsonforms.io/)
* [https://jsonforms.io/docs/](https://jsonforms.io/docs/)
* [https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge](https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge)


