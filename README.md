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

The main keys for the controls are as follows


```
{
	"radioButtons":{...},
}
```

### TextControl Styling:

```
{
  "label": {
    "numberOfLines": 1,
    "color": "#0A1325",
    "fontSize": 12,
    "text-align": "left",
    "font-weight": "600",
    "fontFamily": "OpenSans-SemiBold"
  },
  "labelDisabled": {
    "color": "#0A1325"
  },
  "input": {
    "color": "#0A1325",
    "borderColor": "#cdcdcd",
    "backgroundColor": "#FFF",
    "selectionColor": "#cdcdcd",
    "placeholderTextColor": "#a6a6a6",
    "fontSize": 14,
    "lineHeight": 24,
    "borderWidth": 1,
    "borderRadius": 8,
    "minWidth": 48,
    "minHeight": 48,
    "paddingVertical": 8,
    "paddingHorizontal": 8
  },
  "inputContainer": {
    "underlayColor": "rgba(166,166,166,0.4)"
  },
  "inputDisabled": {
    "color": "#7C7C7C",
    "borderColor": "#d4d4d4",
    "backgroundColor": "#F8F8F8"
  },
  "inputError": {
    "color": "#AE1C23",
    "borderColor": "#AE1C23",
    "placeholderTextColor": "#AE1C23",
    "backgroundColor": "#F1D4D5"
  },
  "validationMessage": {
    "color": "#AE1C23",
    "fontSize": 14
  },
  "valueContainer": {
    "rippleColor": "#f3f3f3"
  },
  "itemContainer": {
    "paddingVertical": 12,
    "paddingHorizontal": 16,
    "backgroundColor": "#FFF"
  },
  "item": {
    "color": "#0A1325",
    "fontSize": 14
  },
  "selectedItemContainer": {
    "borderWidth": 1,
    "borderRadius": 8,
    "borderColor": "#1A6251",
    "backgroundColor": "transparent"
  },
  "selectedItem": {
    "color": "#0A1325",
    "fontSize": 14
  }
}
```

### CheckBoxControl Styling:

```
{
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
    }
}
```

### NumberControl Styling:

```
{
	...
}
```

### CheckGroupControl Styling:

```
{
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

```

### IntegerControl Styling:

```
{
	...
}
```

### RadioControl Styling:

![RadioControl](../main/images/RadioControl.png?raw=true)


```
{
	...
}
```

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


