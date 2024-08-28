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

### NumberControl Styling:

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

### CheckGroupControl Styling:

```
{
  "brand": {
    "primary": "#1A6251",
    "primaryActive": "#57817C",
    "primaryLight": "#CAE7E0",
    "primaryDisabled": "#BDD8D4",
    "secondary": "#015D69",
    "success": "#1DB710",
    "successLight": "#D3EDD0",
    "warning": "#DFCA11",
    "warningLight": "#E8E4C3",
    "danger": "#AE1C23",
    "dangerLight": "#F1D4D5",
    "info": "#015D69",
    "infoLight": "#C0E0E4",
    "elements": "#fff",
    "elementsSecondary": "#fff",
    "border": "#d4d4d4",
    "default": "#D4D4D4",
    "text": "#0A1325",
    "textSub": "#7C7C7C",
    "textBlack": "#000"
  },
  "darkMode": false,
  "backgroundDefaults": {
    "primaryLight": "#FFF",
    "primaryDark": "#0A1325",
    "secondaryLight": "#F8F8F8",
    "secondaryDark": "#161F30"
  },
  "background": {
    "primary": "#FFF",
    "secondary": "#F8F8F8",
    "brandPrimary": "#1A6251",
    "brandSuccess": "#1DB710",
    "brandWarning": "#DFCA11",
    "brandDanger": "#AE1C23",
    "brandInfo": "#015D69"
  },
  "contrast": {
    "highest": "#0d0d0d",
    "higher": "#333333",
    "high": "#5a5a5a",
    "regular": "#808080",
    "low": "#a6a6a6",
    "lower": "#cdcdcd",
    "lowest": "#f3f3f3"
  },
  "border": {
    "color": "#d4d4d4",
    "width": 1,
    "radiusSmall": 4,
    "radiusLarge": 8,
    "radiusLargest": 9999
  },
  "fontDefaults": {
    "colorTitleDark": "#0A1325",
    "colorTitleLight": "#FDFDFD",
    "colorParagraphDark": "#0A1325",
    "colorParagraphLight": "#E7E7E9",
    "colorDisabledDark": "#9DA1A8",
    "colorDisabledLight": "#9DA1A8"
  },
  "font": {
    "size": 14,
    "sizeSmallest": 10,
    "sizeSmall": 12,
    "sizeLarge": 14,
    "sizeLargest": 14,
    "sizeH1": 24,
    "lineHeightH1": 32,
    "sizeH2": 20,
    "lineHeightH2": 28,
    "sizeH3": 14,
    "lineHeightH3": 20,
    "sizeH4": 12,
    "lineHeightH4": 16,
    "sizeH5": 10,
    "lineHeightH5": 14,
    "sizeH6": 14,
    "lineHeightH6": 20,
    "lineHeight": 24,
    "lineHeightSmallest": 19,
    "lineHeightSmall": 19,
    "lineHeightLarge": 19,
    "lineHeightLargest": 19,
    "colorTitle": "#0A1325",
    "colorParagraph": "#0A1325",
    "colorDisabled": "#7C7C7C",
    "weightLight": "100",
    "weightNormal": "normal",
    "weightSemiBold": "600",
    "weightBold": "bold",
    "family": "OpenSans-Regular"
  },
  "spacing": {
    "smallest": 2,
    "smaller": 4,
    "small": 8,
    "regular": 16,
    "large": 24,
    "larger": 32,
    "largest": 40
  },
  "button": {
    "container": {
      "rippleColor": "#f3f3f3",
      "borderRadius": 8,
      "minWidth": 48,
      "minHeight": 48,
      "paddingVertical": 8,
      "paddingHorizontal": 8
    },
    "containerDisabled": {
      "borderColor": "#d4d4d4",
      "backgroundColor": "#d4d4d4"
    },
    "icon": {
      "size": 14
    },
    "iconDisabled": {
      "color": "#7C7C7C"
    },
    "caption": {
      "fontSize": 12,
      "fontWeight": "normal"
    },
    "captionDisabled": {
      "color": "#7C7C7C"
    },
    "header": {
      "color": "#0d0d0d",
      "borderColor": "transparent",
      "backgroundColor": "transparent",
      "fontSize": 12,
      "fontSizeIcon": 12,
      "paddingLeft": 0,
      "paddingRight": 10
    },
    "primary": {
      "color": "#FFF",
      "borderColor": "#1A6251",
      "backgroundColor": "#1A6251"
    },
    "secondary": {
      "color": "#1A6251",
      "borderColor": "#1A6251",
      "backgroundColor": "transparent",
      "inversedColor": "#FFF"
    },
    "success": {
      "color": "#FFF",
      "borderColor": "#1DB710",
      "backgroundColor": "#1DB710"
    },
    "warning": {
      "color": "#FFF",
      "borderColor": "#DFCA11",
      "backgroundColor": "#DFCA11"
    },
    "danger": {
      "color": "#AE1C23",
      "borderColor": "#AE1C23",
      "backgroundColor": "#fff"
    }
  },
  "input": {
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
  },
  "radioButtons": {
    "labelTextStyle": {
      "color": "#0A1325",
      "fontSize": 12,
      "lineHeight": 19,
      "marginBottom": 8
    },
    "radioButtonItemContainerStyle": {
      "marginBottom": 8
    },
    "radioButtonItemContainerDisabledStyle": {
      "opacity": 0.5
    },
    "radioButtonItemContainerHorizontalStyle": {
      "marginEnd": 8
    },
    "circularButtonStyle": {
      "width": 32,
      "height": 32,
      "borderRadius": 32,
      "borderColor": "#d4d4d4",
      "marginEnd": 4
    },
    "activeButtonStyle": {
      "width": 8,
      "height": 8,
      "borderRadius": 4,
      "backgroundColor": "#1A6251"
    },
    "radioButtonItemTitleStyle": {
      "color": "#0A1325",
      "fontSize": 14,
      "lineHeight": 24
    },
    "validationMessage": {
      "color": "#AE1C23",
      "fontSize": 12
    }
  },
  "checkbox": {
    "checkboxInput": {
      "color": "#1A6251",
      "size": 20,
      "backgroundColor": "#FFF",
      "borderColor": "#d4d4d4",
      "borderWidth": 1,
      "borderRadius": 4,
      "width": 40,
      "height": 40
    },
    "checkboxInputDisabled": {
      "color": "#CAE7E0",
      "backgroundColor": "#F8F8F8"
    },
    "checkboxInputError": {
      "color": "#AE1C23",
      "borderColor": "#AE1C23"
    }
  },
  "image": {
    "image": {
      "small": 24,
      "medium": 40,
      "large": 56,
      "larger": 72
    },
    "imageDisabled": {
      "opacity": 0.6
    },
    "icon": 16
  },
  "navigation": {
    "statusBar": {
      "backgroundColor": "#FFF",
      "barStyle": "dark-content"
    },
    "topBar": {
      "backgroundColor": "#1A6251",
      "backButtonColor": "#FFF",
      "titleColor": "#FFF",
      "titleFontSize": 14
    },
    "bottomBar": {
      "color": "#5a5a5a",
      "selectedTextColor": "#1A6251",
      "selectedIconColor": "#1A6251",
      "backgroundColor": "#FFF",
      "fontSize": 12,
      "iconSize": 12
    },
    "progressOverlay": {
      "color": "#0A1325",
      "activityIndicatorColor": "#0A1325",
      "backgroundColor": "rgba(0, 0, 0, 0.5)",
      "containerBackgroundColor": "#F8F8F8",
      "fontSize": 14,
      "borderRadius": 4,
      "elevation": 1.5,
      "shadowColor": "#000",
      "shadowOpacity": 0.1,
      "shadowRadius": 10
    }
  },
  "container": {
    "containerDisabled": {
      "opacity": 0.6
    }
  },
  "badge": {
    "fontWeight": "normal",
    "borderRadius": 8,
    "paddingVertical": 4,
    "paddingHorizontal": 8,
    "default": {
      "color": "#333333",
      "backgroundColor": "#f3f3f3"
    },
    "primary": {
      "color": "#1A6251",
      "backgroundColor": "#CAE7E0"
    },
    "success": {
      "color": "#1DB710",
      "backgroundColor": "#D3EDD0"
    },
    "warning": {
      "color": "#000",
      "backgroundColor": "#E8E4C3"
    },
    "danger": {
      "color": "#AE1C23",
      "backgroundColor": "#F1D4D5"
    }
  },
  "tabContainer": {
    "tabBar": {
      "pressColor": "#cdcdcd",
      "backgroundColor": "transparent"
    },
    "tab": {
      "paddingVertical": 12
    },
    "indicator": {
      "backgroundColor": "#1A6251",
      "height": 5
    },
    "label": {
      "color": "#0A1325",
      "fontSize": 14,
      "fontWeight": "600",
      "textTransform": "capitalize"
    },
    "activeLabel": {
      "color": "#1A6251",
      "fontSize": 14,
      "fontWeight": "600",
      "textTransform": "capitalize"
    },
    "badgeContainer": {
      "borderRadius": 9999,
      "backgroundColor": "#f3f3f3",
      "paddingVertical": 2,
      "paddingHorizontal": 8,
      "marginLeft": 8
    },
    "badgeCaption": {
      "fontSize": 14,
      "color": "#333333",
      "fontWeight": "normal"
    }
  },
  "listView": {
    "listItemDisabled": {
      "opacity": 0.6
    },
    "border": {
      "color": "#d4d4d4",
      "width": 1
    }
  },
  "layoutGrid": {
    "gutterSize": 16
  },
  "floatingActionButton": {
    "container": {
      "margin": 30
    },
    "button": {
      "size": 50,
      "rippleColor": "#f3f3f3",
      "borderColor": "#1A6251",
      "backgroundColor": "#1A6251"
    },
    "buttonIcon": {
      "size": 14,
      "color": "#f3f3f3"
    },
    "secondaryButton": {
      "size": 30,
      "backgroundColor": "#F8F8F8"
    },
    "secondaryButtonIcon": {
      "size": 12,
      "color": "#5a5a5a"
    },
    "secondaryButtonCaption": {
      "color": "#5a5a5a",
      "fontSize": 12
    },
    "secondaryButtonCaptionContainer": {
      "backgroundColor": "#FFF"
    }
  },
  "introScreen": {
    "fullscreenContainer": {
      "backgroundColor": "#FFF"
    },
    "popupContainer": {
      "paddingVertical": 150,
      "paddingHorizontal": 50,
      "backgroundColor": "rgba(0, 0, 0, 0.5)"
    },
    "pagination": {
      "text": {
        "color": "#0A1325",
        "fontSize": 14
      },
      "dotStyle": {
        "size": 8,
        "backgroundColor": "#cdcdcd"
      },
      "activeDotStyle": {
        "size": 8,
        "backgroundColor": "#0A1325"
      }
    },
    "button": {
      "icon": {
        "color": "#0A1325",
        "size": 14
      },
      "caption": {
        "color": "#0A1325",
        "fontSize": 12,
        "fontWeight": "bold",
        "textTransform": "uppercase",
        "paddingHorizontal": 2
      }
    },
    "buttonPaginationAbove": {
      "container": {
        "paddingVertical": 16,
        "backgroundColor": "#1A6251"
      }
    }
  },
  "listViewSwipe": {
    "leftAction": {
      "panelSize": 160,
      "panelSizeSmall": 80,
      "panelSizeLarge": 240,
      "backgroundColor": "#FFF"
    },
    "rightAction": {
      "panelSize": 160,
      "panelSizeSmall": 80,
      "panelSizeLarge": 240,
      "backgroundColor": "#FFF"
    }
  },
  "progressBar": {
    "bar": {
      "height": 8,
      "heightSmall": 4,
      "heightLarge": 12,
      "backgroundColor": "#f3f3f3"
    },
    "fill": {
      "backgroundColor": "#1A6251"
    }
  },
  "progressCircle": {
    "circle": {
      "size": 64
    },
    "fill": {
      "width": 4,
      "lineCapRounded": true,
      "backgroundColor": "#1A6251"
    },
    "text": {
      "color": "#808080",
      "fontSize": 14,
      "fontWeight": "600"
    }
  },
  "rating": {
    "containerDisabled": {
      "opacity": 0.5
    },
    "icon": {
      "size": 24,
      "color": "#cdcdcd",
      "selectedColor": "#DFCA11"
    }
  },
  "slider": {
    "track": {
      "height": 4,
      "backgroundColor": "#f3f3f3"
    },
    "trackDisabled": {
      "backgroundColor": "#cdcdcd",
      "opacity": 0.4
    },
    "highlight": {
      "backgroundColor": "#1A6251"
    },
    "highlightDisabled": {
      "backgroundColor": "#1A6251"
    },
    "marker": {
      "size": 24,
      "borderColor": "#f3f3f3",
      "backgroundColor": "#F8F8F8"
    },
    "markerActive": {
      "size": 32
    },
    "markerDisabled": {
      "size": 24,
      "borderColor": "#f3f3f3",
      "backgroundColor": "#F8F8F8"
    }
  }
}
```

### IntegerControl Styling:

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

### RadioControl Styling:

```
{
  "brand": {
    "primary": "#1A6251",
    "primaryActive": "#57817C",
    "primaryLight": "#CAE7E0",
    "primaryDisabled": "#BDD8D4",
    "secondary": "#015D69",
    "success": "#1DB710",
    "successLight": "#D3EDD0",
    "warning": "#DFCA11",
    "warningLight": "#E8E4C3",
    "danger": "#AE1C23",
    "dangerLight": "#F1D4D5",
    "info": "#015D69",
    "infoLight": "#C0E0E4",
    "elements": "#fff",
    "elementsSecondary": "#fff",
    "border": "#d4d4d4",
    "default": "#D4D4D4",
    "text": "#0A1325",
    "textSub": "#7C7C7C",
    "textBlack": "#000"
  },
  "darkMode": false,
  "backgroundDefaults": {
    "primaryLight": "#FFF",
    "primaryDark": "#0A1325",
    "secondaryLight": "#F8F8F8",
    "secondaryDark": "#161F30"
  },
  "background": {
    "primary": "#FFF",
    "secondary": "#F8F8F8",
    "brandPrimary": "#1A6251",
    "brandSuccess": "#1DB710",
    "brandWarning": "#DFCA11",
    "brandDanger": "#AE1C23",
    "brandInfo": "#015D69"
  },
  "contrast": {
    "highest": "#0d0d0d",
    "higher": "#333333",
    "high": "#5a5a5a",
    "regular": "#808080",
    "low": "#a6a6a6",
    "lower": "#cdcdcd",
    "lowest": "#f3f3f3"
  },
  "border": {
    "color": "#d4d4d4",
    "width": 1,
    "radiusSmall": 4,
    "radiusLarge": 8,
    "radiusLargest": 9999
  },
  "fontDefaults": {
    "colorTitleDark": "#0A1325",
    "colorTitleLight": "#FDFDFD",
    "colorParagraphDark": "#0A1325",
    "colorParagraphLight": "#E7E7E9",
    "colorDisabledDark": "#9DA1A8",
    "colorDisabledLight": "#9DA1A8"
  },
  "font": {
    "size": 14,
    "sizeSmallest": 10,
    "sizeSmall": 12,
    "sizeLarge": 14,
    "sizeLargest": 14,
    "sizeH1": 24,
    "lineHeightH1": 32,
    "sizeH2": 20,
    "lineHeightH2": 28,
    "sizeH3": 14,
    "lineHeightH3": 20,
    "sizeH4": 12,
    "lineHeightH4": 16,
    "sizeH5": 10,
    "lineHeightH5": 14,
    "sizeH6": 14,
    "lineHeightH6": 20,
    "lineHeight": 24,
    "lineHeightSmallest": 19,
    "lineHeightSmall": 19,
    "lineHeightLarge": 19,
    "lineHeightLargest": 19,
    "colorTitle": "#0A1325",
    "colorParagraph": "#0A1325",
    "colorDisabled": "#7C7C7C",
    "weightLight": "100",
    "weightNormal": "normal",
    "weightSemiBold": "600",
    "weightBold": "bold",
    "family": "OpenSans-Regular"
  },
  "spacing": {
    "smallest": 2,
    "smaller": 4,
    "small": 8,
    "regular": 16,
    "large": 24,
    "larger": 32,
    "largest": 40
  },
  "button": {
    "container": {
      "rippleColor": "#f3f3f3",
      "borderRadius": 8,
      "minWidth": 48,
      "minHeight": 48,
      "paddingVertical": 8,
      "paddingHorizontal": 8
    },
    "containerDisabled": {
      "borderColor": "#d4d4d4",
      "backgroundColor": "#d4d4d4"
    },
    "icon": {
      "size": 14
    },
    "iconDisabled": {
      "color": "#7C7C7C"
    },
    "caption": {
      "fontSize": 12,
      "fontWeight": "normal"
    },
    "captionDisabled": {
      "color": "#7C7C7C"
    },
    "header": {
      "color": "#0d0d0d",
      "borderColor": "transparent",
      "backgroundColor": "transparent",
      "fontSize": 12,
      "fontSizeIcon": 12,
      "paddingLeft": 0,
      "paddingRight": 10
    },
    "primary": {
      "color": "#FFF",
      "borderColor": "#1A6251",
      "backgroundColor": "#1A6251"
    },
    "secondary": {
      "color": "#1A6251",
      "borderColor": "#1A6251",
      "backgroundColor": "transparent",
      "inversedColor": "#FFF"
    },
    "success": {
      "color": "#FFF",
      "borderColor": "#1DB710",
      "backgroundColor": "#1DB710"
    },
    "warning": {
      "color": "#FFF",
      "borderColor": "#DFCA11",
      "backgroundColor": "#DFCA11"
    },
    "danger": {
      "color": "#AE1C23",
      "borderColor": "#AE1C23",
      "backgroundColor": "#fff"
    }
  },
  "input": {
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
  },
  "radioButtons": {
    "labelTextStyle": {
      "color": "#0A1325",
      "fontSize": 12,
      "lineHeight": 19,
      "marginBottom": 8
    },
    "radioButtonItemContainerStyle": {
      "marginBottom": 8
    },
    "radioButtonItemContainerDisabledStyle": {
      "opacity": 0.5
    },
    "radioButtonItemContainerHorizontalStyle": {
      "marginEnd": 8
    },
    "circularButtonStyle": {
      "width": 32,
      "height": 32,
      "borderRadius": 32,
      "borderColor": "#d4d4d4",
      "marginEnd": 4
    },
    "activeButtonStyle": {
      "width": 8,
      "height": 8,
      "borderRadius": 4,
      "backgroundColor": "#1A6251"
    },
    "radioButtonItemTitleStyle": {
      "color": "#0A1325",
      "fontSize": 14,
      "lineHeight": 24
    },
    "validationMessage": {
      "color": "#AE1C23",
      "fontSize": 12
    }
  },
  "checkbox": {
    "checkboxInput": {
      "color": "#1A6251",
      "size": 20,
      "backgroundColor": "#FFF",
      "borderColor": "#d4d4d4",
      "borderWidth": 1,
      "borderRadius": 4,
      "width": 40,
      "height": 40
    },
    "checkboxInputDisabled": {
      "color": "#CAE7E0",
      "backgroundColor": "#F8F8F8"
    },
    "checkboxInputError": {
      "color": "#AE1C23",
      "borderColor": "#AE1C23"
    }
  },
  "image": {
    "image": {
      "small": 24,
      "medium": 40,
      "large": 56,
      "larger": 72
    },
    "imageDisabled": {
      "opacity": 0.6
    },
    "icon": 16
  },
  "navigation": {
    "statusBar": {
      "backgroundColor": "#FFF",
      "barStyle": "dark-content"
    },
    "topBar": {
      "backgroundColor": "#1A6251",
      "backButtonColor": "#FFF",
      "titleColor": "#FFF",
      "titleFontSize": 14
    },
    "bottomBar": {
      "color": "#5a5a5a",
      "selectedTextColor": "#1A6251",
      "selectedIconColor": "#1A6251",
      "backgroundColor": "#FFF",
      "fontSize": 12,
      "iconSize": 12
    },
    "progressOverlay": {
      "color": "#0A1325",
      "activityIndicatorColor": "#0A1325",
      "backgroundColor": "rgba(0, 0, 0, 0.5)",
      "containerBackgroundColor": "#F8F8F8",
      "fontSize": 14,
      "borderRadius": 4,
      "elevation": 1.5,
      "shadowColor": "#000",
      "shadowOpacity": 0.1,
      "shadowRadius": 10
    }
  },
  "container": {
    "containerDisabled": {
      "opacity": 0.6
    }
  },
  "badge": {
    "fontWeight": "normal",
    "borderRadius": 8,
    "paddingVertical": 4,
    "paddingHorizontal": 8,
    "default": {
      "color": "#333333",
      "backgroundColor": "#f3f3f3"
    },
    "primary": {
      "color": "#1A6251",
      "backgroundColor": "#CAE7E0"
    },
    "success": {
      "color": "#1DB710",
      "backgroundColor": "#D3EDD0"
    },
    "warning": {
      "color": "#000",
      "backgroundColor": "#E8E4C3"
    },
    "danger": {
      "color": "#AE1C23",
      "backgroundColor": "#F1D4D5"
    }
  },
  "tabContainer": {
    "tabBar": {
      "pressColor": "#cdcdcd",
      "backgroundColor": "transparent"
    },
    "tab": {
      "paddingVertical": 12
    },
    "indicator": {
      "backgroundColor": "#1A6251",
      "height": 5
    },
    "label": {
      "color": "#0A1325",
      "fontSize": 14,
      "fontWeight": "600",
      "textTransform": "capitalize"
    },
    "activeLabel": {
      "color": "#1A6251",
      "fontSize": 14,
      "fontWeight": "600",
      "textTransform": "capitalize"
    },
    "badgeContainer": {
      "borderRadius": 9999,
      "backgroundColor": "#f3f3f3",
      "paddingVertical": 2,
      "paddingHorizontal": 8,
      "marginLeft": 8
    },
    "badgeCaption": {
      "fontSize": 14,
      "color": "#333333",
      "fontWeight": "normal"
    }
  },
  "listView": {
    "listItemDisabled": {
      "opacity": 0.6
    },
    "border": {
      "color": "#d4d4d4",
      "width": 1
    }
  },
  "layoutGrid": {
    "gutterSize": 16
  },
  "floatingActionButton": {
    "container": {
      "margin": 30
    },
    "button": {
      "size": 50,
      "rippleColor": "#f3f3f3",
      "borderColor": "#1A6251",
      "backgroundColor": "#1A6251"
    },
    "buttonIcon": {
      "size": 14,
      "color": "#f3f3f3"
    },
    "secondaryButton": {
      "size": 30,
      "backgroundColor": "#F8F8F8"
    },
    "secondaryButtonIcon": {
      "size": 12,
      "color": "#5a5a5a"
    },
    "secondaryButtonCaption": {
      "color": "#5a5a5a",
      "fontSize": 12
    },
    "secondaryButtonCaptionContainer": {
      "backgroundColor": "#FFF"
    }
  },
  "introScreen": {
    "fullscreenContainer": {
      "backgroundColor": "#FFF"
    },
    "popupContainer": {
      "paddingVertical": 150,
      "paddingHorizontal": 50,
      "backgroundColor": "rgba(0, 0, 0, 0.5)"
    },
    "pagination": {
      "text": {
        "color": "#0A1325",
        "fontSize": 14
      },
      "dotStyle": {
        "size": 8,
        "backgroundColor": "#cdcdcd"
      },
      "activeDotStyle": {
        "size": 8,
        "backgroundColor": "#0A1325"
      }
    },
    "button": {
      "icon": {
        "color": "#0A1325",
        "size": 14
      },
      "caption": {
        "color": "#0A1325",
        "fontSize": 12,
        "fontWeight": "bold",
        "textTransform": "uppercase",
        "paddingHorizontal": 2
      }
    },
    "buttonPaginationAbove": {
      "container": {
        "paddingVertical": 16,
        "backgroundColor": "#1A6251"
      }
    }
  },
  "listViewSwipe": {
    "leftAction": {
      "panelSize": 160,
      "panelSizeSmall": 80,
      "panelSizeLarge": 240,
      "backgroundColor": "#FFF"
    },
    "rightAction": {
      "panelSize": 160,
      "panelSizeSmall": 80,
      "panelSizeLarge": 240,
      "backgroundColor": "#FFF"
    }
  },
  "progressBar": {
    "bar": {
      "height": 8,
      "heightSmall": 4,
      "heightLarge": 12,
      "backgroundColor": "#f3f3f3"
    },
    "fill": {
      "backgroundColor": "#1A6251"
    }
  },
  "progressCircle": {
    "circle": {
      "size": 64
    },
    "fill": {
      "width": 4,
      "lineCapRounded": true,
      "backgroundColor": "#1A6251"
    },
    "text": {
      "color": "#808080",
      "fontSize": 14,
      "fontWeight": "600"
    }
  },
  "rating": {
    "containerDisabled": {
      "opacity": 0.5
    },
    "icon": {
      "size": 24,
      "color": "#cdcdcd",
      "selectedColor": "#DFCA11"
    }
  },
  "slider": {
    "track": {
      "height": 4,
      "backgroundColor": "#f3f3f3"
    },
    "trackDisabled": {
      "backgroundColor": "#cdcdcd",
      "opacity": 0.4
    },
    "highlight": {
      "backgroundColor": "#1A6251"
    },
    "highlightDisabled": {
      "backgroundColor": "#1A6251"
    },
    "marker": {
      "size": 24,
      "borderColor": "#f3f3f3",
      "backgroundColor": "#F8F8F8"
    },
    "markerActive": {
      "size": 32
    },
    "markerDisabled": {
      "size": 24,
      "borderColor": "#f3f3f3",
      "backgroundColor": "#F8F8F8"
    }
  }
}
```

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



