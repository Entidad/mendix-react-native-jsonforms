## JsonformsNative
Mendix JsonForms Render for Native

## Features
JSON Forms is a declarative framework for efficiently building form-based web UIs. These UIs are targeted at entering, modifying and viewing data and are usually embedded within an application.

Implements features from the JSON Forms library in a mendix widget

## Requirements
Studio Pro **11.12** or higher.

Version `2.0.0` is built against Mendix Pluggable Widgets Tools 11.12 (React 19, React
Native 0.84) and is **not backward compatible**. Stay on the `1.x` release for Studio Pro 10.

## Version history

**2.0.0** — rebuilt for Studio Pro 11.12. The vendored theme was trimmed to the files the
widget actually uses and converted to TypeScript; unused dependencies were removed.

The widget id also changed, from `io.entidad.widget.native.jsonforms.JsonForms` to
`entidad.io.native.jsonforms.JsonForms`, bringing it in line with the other Entidad native
widgets. Studio Pro treats a changed id as a different widget, so **a page using the previous
version will not pick this one up**: remove the old widget from the page, add this one, and map
the attributes again.

**1.0.18** — last release for Studio Pro 10.

## Usage
Download one of the [releases](https://github.com/Entidad/mendix-react-native-jsonforms/releases)
or build from source as follows

```
git clone https://github.com/Entidad/mendix-react-native-jsonforms.git
cd ./mendix-react-native-jsonforms
npm install
npm run build
```

Deploy `entidad.io.native.JsonForms.mpk` to `$PROJ/widgets`, then run
`Synchronize App Directory` in Studio Pro (`F4`, or `Menu / App / Synchronize App Directory`).

Place the widget in a **Data view** and map the attributes below.

### Properties

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| `mxSchema` | String attribute | yes | The JSON Schema describing the form's data. |
| `mxUiSchema` | String attribute | yes | The UI Schema describing the form's layout. |
| `mxFormData` | String attribute | yes | Holds the form data. Written as the user edits. |
| `mxI18nData` | String attribute | yes | Translatable strings for the form, per language. |
| `mxLanguage` | String attribute | yes | Code of the language to display the form in. |
| `mxReadOnly` | Boolean attribute | yes | Render values without allowing edits. |
| `mxStyleData` | Expression | no (default `'{}'`) | Style JSON, described under Styling below. |
| `onChangeAction` | Action | no | Runs when the form data changes. |
| `debugon` | Boolean | yes (default `false`) | Write messages to the console. |

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
* `src/renderer/controls/UnknownControl.tsx`

## Styling

Compile time styling can be customized by editing `src/theme/theme/native/custom-variables.ts`. Modeling time styling can be achieved by editing the `UI / Style JSON` field. A sample style can be found at `styles/sample.json`

### Main Container

The main container around the widget can be styled as follows

<details>
  <summary>JSON</summary>

```
{
    "jsonformsControlsContainer": {
        "viewControl":{
            "marginLeft": 0,
            "marginTop": 0,
            "marginBottom": 0,
            "marginRight": 0,
            "flexDirection": "column"
        }
    }
   }
```
</details>

## Component Wrapper Styling

Each component has a wrapper that can be styled as follows

<details>
  <summary>JSON</summary>

```
{
    "jsonformsControlContainer": {
        "marginTop": 0,
        "marginBottom": 0,
        "paddingTop": 0,
        "paddingBottom": 0,
        "borderColor": "#FF0000"
        "borderTopWidth": 0,
        "borderBottomWidth": 0
    }
}
```
</details>



Here follows some styling samples for the various components.

### TextControl Styling

![TextControl](../main/images/TextControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
    "input": {
        "label": {
            "numberOfLines": 1,
            "color": "#FF0000",
            "fontSize": 14,
            "textAlign": "left",
            "fontFamily": "Lato-Bold",
            "marginTop": 24,
            "marginBottom": 8
        },
        "input": {
            "color": "#FF0000",
            "borderColor": "#FF0000",
            "backgroundColor": "#FF0000",
            "selectionColor": "#FF0000",
            "placeholderTextColor": "#FF0000",
            "fontSize": 14,
            "fontFamily": "Lato-Regular",
            "lineHeight": 14,
            "borderWidth": 1,
            "borderRadius": 12,
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
        },
        "itemContainer": {
            "paddingVertical": 12,
            "paddingHorizontal": 8,
            "backgroundColor": "#FFFFFF" 
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
  "input": {
        "label": {
            "numberOfLines": 1,
            "color": "#201313",
            "fontSize": 14,
            "textAlign": "left",
            "fontFamily": "Lato-Bold",
            "marginTop": 24,
            "marginBottom": 8
        },
        "labelDisabled": {
            "color": "#0A1325"
        },
        "input": {
            "color": "#201313",
            "borderColor": "#cdcdcd",
            "backgroundColor": "#FFFFFF",
            "selectionColor": "#cdcdcd",
            "placeholderTextColor": "#a6a6a6",
            "fontSize": 14,
            "fontFamily": "Lato-Regular",
            "lineHeight": 14,
            "borderWidth": 1,
            "borderRadius": 12,
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

### CheckBoxControl Styling

![CheckBoxControl](../main/images/CheckBoxControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
    "checkboxControl":{
        "caption":{
            "color":"#FF0000",
            "fontSize": 14,
            "fontFamily": "Lato-Regular",
            "textAlign": "left"
        },
        "checkboxInput": {
            "color": "#FF0000",
            "size": 20,
            "backgroundColor": "#FF0000",
            "borderColor": "#FF0000",
            "borderWidth": 1,
            "borderRadius": 8,
            "width": 40,
            "height": 40
        },
        "labelContainer": {
            "flex":1,
            "marginTop":0,
            "marginLeft":8
        }
    }
    "input": {
        "label": {
            "numberOfLines": 1,
            "color": "#FF0000",
            "fontSize": 14,
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
    "checkboxControl": {
        "caption":{
            "color":"#FF0000",
            "fontSize": 14,
            "fontFamily": "Lato-Regular",
            "textAlign": "left"
        },
        "container": {
            "flexDirection": "row",
            "alignItems": "center",
            "height": 35,
            "marginTop": 20,
            "marginBottom": 20
        },
        "checkboxInput": {
            "color": "#FF0000",
            "size": 20,
            "backgroundColor": "#FF0000",
            "borderColor": "#FF0000",
            "borderWidth": 1,
            "borderRadius": 8,
            "width": 40,
            "height": 40
        },
        "labelContainer": {
            "flex":1,
            "marginTop":0,
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

A radio control is styled through `radioButtons` for the buttons themselves and `input` for the
surrounding label, which are the two keys the control merges.

<details>
  <summary>JSON</summary>

```
{
    "radioButtons": {
        "caption": {
            "numberOfLines": 1,
            "color": "#201313",
            "fontSize": 14,
            "fontFamily": "Lato-Regular",
            "lineHeight": 20,
            "marginBottom": 8,
            "marginLeft": 8,
            "marginTop": 8
        },
        "outerCircle": {
            "height": 40,
            "width": 40,
            "borderRadius": 20,
            "borderWidth": 1,
            "borderColor": "#CCCCCC",
            "alignItems": "center",
            "justifyContent": "center"
        },
        "innerCircle": {
            "height": 32,
            "width": 32,
            "borderRadius": 16,
            "backgroundColor": "#622C6D"
        },
        "radioButtonItemContainerStyle": {
            "marginBottom": 8
        }
    }
}
```

</details>

`radioButtons` also accepts a `radioButtonError` key, applied when the value fails validation.
It is not set above, so an invalid radio falls back to the built-in danger colours rather than
your own palette.


### ReadOnlyControl Styling

![ReadOnlyControl](../main/images/ReadOnlyControl.png?raw=true)

<details>
  <summary>JSON</summary>

```
{
  "readOnlyControl": {
    "label": {
      "fontSize": 12,
      "fontWeight": "bold",
      "color": "#FFFFFF88"
    },
    "value": {
      "fontSize": 16,
      "fontWeight": "normal",
      "color": "#FFFFFF",
      "marginBottom": 8
    },
    "container": {
      "borderBottomColor": "#FFFFFF44",
      "borderBottomWidth": 2
    }
  }
}
```

</details>

# Compiled Styling

Some styling is baked in at build time rather than set through the Style JSON. It comes from
a small copy of a stock Mendix theme kept in the source tree:

* `src/theme/theme/native/custom-variables.ts` — the design tokens the controls read
* `src/theme/theme/native/exclusion-variables.ts`
* `src/theme/themesource/atlas_core/native/api.ts` and the three helper functions it uses

To change the compiled styling, edit `src/theme/theme/native/custom-variables.ts` and rebuild.

These files are vendored from a stock Mendix project and are marked `@ts-nocheck`, since they
are not maintained here. Only the files above are kept: the rest of the copied theme was
unreachable from the widget and was removed in `2.0.0`, along with the web assets — stylesheets,
fonts and images — that came with it.

Widget-specific styles such as `radioButtons`, `checkboxControl`, `readOnlyControl`,
`jsonformsControlsContainer` and `jsonformsControlContainer` are defined in
`src/renderer/theme/widget-variables.ts`.

## Demo project
Currently there is no demo project

## Issues, suggestions and feature requests

[GitHub](https://github.com/Entidad/mendix-react-native-jsonforms/issues)

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. Node 20.19.4 or higher is required.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

Contributions welcome

## References

* [https://jsonforms.io/](https://jsonforms.io/)
* [https://jsonforms.io/docs/](https://jsonforms.io/docs/)
* [https://jsonforms.io/api/react/index.html](https://jsonforms.io/api/react/index.html)
* [https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge](https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge)
* [https://jsonforms.io/api/react/index.html](https://jsonforms.io/api/react/index.html)


