import { createElement, createContext, useContext, useState, Component } from 'react';
import { StyleSheet, View, Text, Dimensions, PixelRatio, Appearance, Platform, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const styles$2 = StyleSheet.create({
    textError: {
        color: '#f44336',
        padding: 5,
    },
});
/**
 * Returns the Error Message for React Native.
 * @param {string} message Error Message.
 */
function ErrorItem(props) {
    const { message } = props;
    return (createElement(View, { style: { flexDirection: "column" } },
        createElement(Text, null, "Error"),
        createElement(Text, { style: styles$2.textError }, message)));
}

const ObjectContext = createContext({});

const ObjectProvider = ({ objectState, children }) => {
    return (createElement(ObjectContext.Provider, { value: { objectState } }, children));
};

// Control Types
var ControlType;
(function (ControlType) {
    ControlType[ControlType["TextControl"] = 0] = "TextControl";
    ControlType[ControlType["TextAreaControl"] = 1] = "TextAreaControl";
    ControlType[ControlType["PasswordControl"] = 2] = "PasswordControl";
    ControlType[ControlType["NumberControl"] = 3] = "NumberControl";
    ControlType[ControlType["NumberEnumControl"] = 4] = "NumberEnumControl";
    ControlType[ControlType["IntegerControl"] = 5] = "IntegerControl";
    ControlType[ControlType["IntegerRangeControl"] = 6] = "IntegerRangeControl";
    ControlType[ControlType["CheckBoxControl"] = 7] = "CheckBoxControl";
    ControlType[ControlType["CheckGroupControl"] = 8] = "CheckGroupControl";
    ControlType[ControlType["RadioControl"] = 9] = "RadioControl";
    ControlType[ControlType["SelectControl"] = 10] = "SelectControl";
    ControlType[ControlType["EnumControl"] = 11] = "EnumControl";
    ControlType[ControlType["UnknownControl"] = 12] = "UnknownControl";
})(ControlType || (ControlType = {}));

// Verify if UISchema is RJSF type
function isRJSFSchema(_uischema) {
    let ui = _uischema;
    if (ui.type && (ui.type === "VerticalLayout" ||
        ui.type === "HorizontalLayout" ||
        ui.type === "Control" ||
        ui.type === "Group" ||
        ui.type === "Categorization" ||
        ui.type === "Category" ||
        ui.type === "ListWithDetail")) {
        return false;
    }
    return true;
}
function getControl_FromRJSF(_props, _uischema, _property) {
    var _a;
    let _type = _props.type;
    _props.format;
    let _enum = _props.enum;
    let props = getProperties_FromRJSF(_uischema, _property);
    if (props) {
        let widget = (_a = props["ui:widget"]) !== null && _a !== void 0 ? _a : undefined;
        //Text    
        if (_type === "string" && widget === "textarea") {
            return ControlType.TextAreaControl;
        }
        if (_type === "string" && widget === "password") {
            return ControlType.PasswordControl;
        }
        //Number
        if (_type === "number" && widget === "radio") {
            return ControlType.NumberEnumControl;
        }
        //Integer
        if (_type === "integer" && widget === "range") {
            return ControlType.IntegerRangeControl;
        }
        //Boolean    
        if (_type === "boolean" && widget === "radio") {
            return ControlType.RadioControl;
        }
        if (_type === "boolean" && widget === "select") {
            return ControlType.SelectControl;
        }
        //Radio and CheckBoxGroups
        if (_type === "string" && (widget === "RadioWidget" || widget === "radio")) {
            return ControlType.RadioControl;
        }
        if (_type === "string" && (widget == "CheckboxesWidget" || widget === "checkbox")) {
            return ControlType.CheckGroupControl;
        }
    }
    if (_type === "number") {
        return ControlType.NumberControl;
    }
    if (_type === "integer") {
        return ControlType.IntegerControl;
    }
    if (_type === "boolean") {
        return ControlType.CheckBoxControl;
    }
    if (_type === "string" && _enum !== undefined) {
        return ControlType.EnumControl;
    }
    if (_type === "string") {
        return ControlType.TextControl;
    }
    return ControlType.UnknownControl;
}
// Get RJSF Properties from by property in UISchema
function getProperties_FromRJSF(_uischema, _property) {
    let uischema = _uischema;
    for (let property in uischema) {
        if (property == _property) {
            return uischema[property];
        }
    }
    return undefined;
}
// Set RJSF Control Properties
function setProps_FromRJSF(_uischema, _property, _props) {
    let attrs = getProperties_FromRJSF(_uischema, _property);
    if (attrs) {
        if (attrs["ui:readonly"]) {
            _props.readonly = attrs["ui:readonly"];
        }
        if (attrs["ui:disabled"]) {
            _props.disabled = attrs["ui:disabled"];
        }
        if (attrs["ui:placeholder"]) {
            _props.placeholder = attrs["ui:placeholder"];
        }
        if (attrs["ui:help"]) {
            _props.hint = attrs["ui:help"];
        }
        if (attrs["ui:description"]) {
            _props.description = attrs["ui:description"];
        }
        if (attrs["ui:title"]) {
            _props.title = attrs["ui:title"];
        }
        if (attrs["ui:emptyValue"]) {
            _props.emptyValue = attrs["ui:emptyValue"];
        }
        if (attrs["ui:options"]) {
            _props.options = attrs["ui:options"];
        }
    }
    return _props;
}

function getControl_FromJSONForms(_props, _uischema, _property) {
    let _type = _props.type;
    let _format = _props.format;
    let _enum = _props.enum;
    let options = getOptions_JSONForm(_uischema, _property);
    if (options) {
        //Text   
        if (_type === "string" && options.multi === true) {
            return ControlType.TextAreaControl;
        }
        //IntegerRange
        if (_type === "number" && options.slider === true) {
            return ControlType.IntegerRangeControl;
        }
        //RadioButton
        if (_type === "string" && _enum != undefined && options.format === "radio") {
            return ControlType.RadioControl;
        }
        // catch other text inputs with options (e.g. inputmode)
        if (_type === "string" && options.inputMode != undefined) {
            return ControlType.TextControl;
        }
    }
    else {
        //Date
        if (_type === "string" && _format === "password") {
            return ControlType.PasswordControl;
        }
        if (_type === "string" && _enum != undefined) {
            return ControlType.EnumControl;
        }
        if (_type === "string") {
            return ControlType.TextControl;
        }
        if (_type === "integer") {
            return ControlType.IntegerControl;
        }
        if (_type === "number") {
            return ControlType.NumberControl;
        }
        if (_type === "boolean") {
            return ControlType.CheckBoxControl;
        }
        if (_type === "array" && _props.items != undefined && _props.items.enum != undefined) {
            return ControlType.CheckGroupControl;
        }
    }
    return ControlType.UnknownControl;
}
// Get Options from property in UISchema
function getOptions_JSONForm(uischema, property) {
    var _a;
    return (_a = getUIElement_JSONForm(uischema, property)) === null || _a === void 0 ? void 0 : _a.options;
}
// Get UIElement from property in UISchema
function getUIElement_JSONForm(uischema, property) {
    var _a;
    let path = "#/properties/" + property;
    let UI_Elements = (_a = uischema.elements) !== null && _a !== void 0 ? _a : undefined;
    if (UI_Elements) {
        for (let UI_Element of UI_Elements) {
            if (UI_Element.type === "Control" && UI_Element.scope === path) {
                return UI_Element;
            }
        }
    }
    return undefined;
}
function setProps_FromJSONForms(_uischema, _property, _props) {
    let element = getUIElement_JSONForm(_uischema, _property);
    if (element) {
        let options = element.options;
        if (element.label) {
            _props.label = element.label;
        }
        if (options) {
            if (options.readonly) {
                _props.readonly = options.readonly;
            }
            if (options.multi) {
                _props.multi = options.multi;
            }
            if (options.slider) {
                _props.slider = options.slider;
            }
            if (options.trim) {
                _props.trim = options.trim;
            }
            if (options.toogle) {
                _props.toogle = options.toogle;
            }
            if (options.format) {
                _props.format = options.format;
            }
            if (options.inputMode) {
                _props.inputMode = options.inputMode;
            }
        }
    }
    return _props;
}

function getControlType(_props, _uischema, _property) {
    let rjsf = isRJSFSchema(_uischema);
    if (rjsf) {
        return getControl_FromRJSF(_props, _uischema, _property);
    }
    return getControl_FromJSONForms(_props, _uischema, _property);
}
function getControlProps(schema, uischema, property) {
    var _a, _b, _c, _d;
    let props = initControlProps();
    props = setControlProps(schema, property, props);
    let rjsf = isRJSFSchema(uischema);
    if (rjsf) {
        props = setProps_FromRJSF(uischema, property, props);
    }
    else {
        props = setProps_FromJSONForms(uischema, property, props);
    }
    let label = (_a = props.label) !== null && _a !== void 0 ? _a : ((_b = props.title) !== null && _b !== void 0 ? _b : props.propertyName);
    let value = (_c = props.value) !== null && _c !== void 0 ? _c : ((_d = props.default) !== null && _d !== void 0 ? _d : props.emptyValue);
    props.label = label;
    props.value = value;
    props.enumLabels = {}; //ockert
    return props;
}
// Initialize Props;
function initControlProps() {
    let props = {
        label: undefined,
        value: undefined,
        default: undefined,
        description: undefined,
        hint: undefined,
        readonly: false,
        disabled: false,
        placeholder: undefined,
        enum: [],
        items: [],
        error: false,
        errorMessage: "This field is required",
        onChange: undefined,
        debugon: true //ockert
    };
    return props;
}
// Set Basic Props
function setControlProps(_schema, _property, _props) {
    let props = getBasicProperties(_schema, _property);
    if (isPropertyRequired(_schema, _property)) {
        _props.error = true;
    }
    if (props) {
        if (props.label) {
            _props.label = props.label;
        }
        if (props.title) {
            _props.title = props.title;
        }
        if (props.description) {
            _props.description = props.description;
        }
        if (props.minLength) {
            _props.minLength = props.minLength;
        }
        if (props.maxLength) {
            _props.maxLength = props.maxLength;
        }
        if (props.minimum) {
            _props.minimum = props.minimum;
        }
        if (props.maximum) {
            _props.maximum = props.maximum;
        }
        if (props.enum) {
            _props.enum = props.enum;
        }
        if (props.items) {
            _props.enum = props.items.enum;
        }
        if (props.default) {
            _props.default = props.default;
        }
    }
    return _props;
}
function getBasicProperties(_schema, _property) {
    var _a;
    let properties = (_a = _schema.properties) !== null && _a !== void 0 ? _a : undefined;
    if (properties) {
        for (let property in properties) {
            if (property === _property) {
                return properties[property];
            }
        }
    }
    return undefined;
}
// Validate if a property is required
function isPropertyRequired(_schema, _property) {
    var _a;
    let items = (_a = _schema.required) !== null && _a !== void 0 ? _a : undefined;
    if (items) {
        for (let item of items) {
            if (item === _property) {
                return true;
            }
        }
    }
    return false;
}

const useObject = () => {
    const { objectState } = useContext(ObjectContext);
    return objectState;
};

/**
 * Resolve if a param is an object.
 * @param {any} thing the param to identify.
 * @returns {boolean} the boolean result of object evaluation.
 */
function isEmpty(value) {
    if (value && value.trim() != "" && value.length > 0) {
        return false;
    }
    return true;
}
function isEmptyArray(arr) {
    if (arr == undefined || arr.length == 0) {
        return true;
    }
    return false;
}
function isEmptyBoolean(val) {
    if (typeof val === 'boolean') {
        return !val;
    }
    if (val == undefined || val == "" || val == "No") {
        return true;
    }
    return false;
}

const {
  height,
  width
} = Dimensions.get("window");
const pixelRatio = PixelRatio.get();
/**
 *
 * Adjust the font size based on the screen size
 *
 * @param   {number}    size   Font size
 *
 * @return  {number} Returns adjusted font size
 */
function adjustFont(size) {
  if (pixelRatio === 2) {
    // iphone 5s and older Androids
    if (width < 360) {
      return size * 0.95;
    }
    // iphone 5
    if (height < 667) {
      return size;
    }
    // iphone 6-6s
    else if (height >= 667 && height <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }
  if (pixelRatio === 3) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (width <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    if (height < 667) {
      return size * 1.15;
    }
    // catch in-between size Androids and scale font up
    if (height >= 667 && height <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note
    return size * 1.27;
  }
  if (pixelRatio === 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (width <= 360) {
      return size;
    }
    // Catch other smaller android height sizings
    if (height < 667) {
      return size * 1.2;
    }
    // catch in-between size Androids and scale font up
    if (height >= 667 && height <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  // if older device ie pixelRatio !== 2 || 3 || 3.5
  return size;
}

//
const colors = {
  aliceblue: {
    r: 240,
    g: 248,
    b: 255
  },
  antiquewhite: {
    r: 250,
    g: 235,
    b: 215
  },
  aqua: {
    r: 0,
    g: 255,
    b: 255
  },
  aquamarine: {
    r: 127,
    g: 255,
    b: 212
  },
  azure: {
    r: 240,
    g: 255,
    b: 255
  },
  beige: {
    r: 245,
    g: 245,
    b: 220
  },
  bisque: {
    r: 255,
    g: 228,
    b: 196
  },
  black: {
    r: 0,
    g: 0,
    b: 0
  },
  blanchedalmond: {
    r: 255,
    g: 235,
    b: 205
  },
  blue: {
    r: 0,
    g: 0,
    b: 255
  },
  blueviolet: {
    r: 138,
    g: 43,
    b: 226
  },
  brown: {
    r: 165,
    g: 42,
    b: 42
  },
  burlywood: {
    r: 222,
    g: 184,
    b: 135
  },
  cadetblue: {
    r: 95,
    g: 158,
    b: 160
  },
  chartreuse: {
    r: 127,
    g: 255,
    b: 0
  },
  chocolate: {
    r: 210,
    g: 105,
    b: 30
  },
  coral: {
    r: 255,
    g: 127,
    b: 80
  },
  cornflowerblue: {
    r: 100,
    g: 149,
    b: 237
  },
  cornsilk: {
    r: 255,
    g: 248,
    b: 220
  },
  crimson: {
    r: 220,
    g: 20,
    b: 60
  },
  cyan: {
    r: 0,
    g: 255,
    b: 255
  },
  darkblue: {
    r: 0,
    g: 0,
    b: 139
  },
  darkcyan: {
    r: 0,
    g: 139,
    b: 139
  },
  darkgoldenrod: {
    r: 184,
    g: 134,
    b: 11
  },
  darkgray: {
    r: 169,
    g: 169,
    b: 169
  },
  darkgreen: {
    r: 0,
    g: 100,
    b: 0
  },
  darkgrey: {
    r: 169,
    g: 169,
    b: 169
  },
  darkkhaki: {
    r: 189,
    g: 183,
    b: 107
  },
  darkmagenta: {
    r: 139,
    g: 0,
    b: 139
  },
  darkolivegreen: {
    r: 85,
    g: 107,
    b: 47
  },
  darkorange: {
    r: 255,
    g: 140,
    b: 0
  },
  darkorchid: {
    r: 153,
    g: 50,
    b: 204
  },
  darkred: {
    r: 139,
    g: 0,
    b: 0
  },
  darksalmon: {
    r: 233,
    g: 150,
    b: 122
  },
  darkseagreen: {
    r: 143,
    g: 188,
    b: 143
  },
  darkslateblue: {
    r: 72,
    g: 61,
    b: 139
  },
  darkslategray: {
    r: 47,
    g: 79,
    b: 79
  },
  darkslategrey: {
    r: 47,
    g: 79,
    b: 79
  },
  darkturquoise: {
    r: 0,
    g: 206,
    b: 209
  },
  darkviolet: {
    r: 148,
    g: 0,
    b: 211
  },
  deeppink: {
    r: 255,
    g: 20,
    b: 147
  },
  deepskyblue: {
    r: 0,
    g: 191,
    b: 255
  },
  dimgray: {
    r: 105,
    g: 105,
    b: 105
  },
  dimgrey: {
    r: 105,
    g: 105,
    b: 105
  },
  dodgerblue: {
    r: 30,
    g: 144,
    b: 255
  },
  firebrick: {
    r: 178,
    g: 34,
    b: 34
  },
  floralwhite: {
    r: 255,
    g: 250,
    b: 240
  },
  forestgreen: {
    r: 34,
    g: 139,
    b: 34
  },
  fuchsia: {
    r: 255,
    g: 0,
    b: 255
  },
  gainsboro: {
    r: 220,
    g: 220,
    b: 220
  },
  ghostwhite: {
    r: 248,
    g: 248,
    b: 255
  },
  gold: {
    r: 255,
    g: 215,
    b: 0
  },
  goldenrod: {
    r: 218,
    g: 165,
    b: 32
  },
  gray: {
    r: 128,
    g: 128,
    b: 128
  },
  green: {
    r: 0,
    g: 128,
    b: 0
  },
  greenyellow: {
    r: 173,
    g: 255,
    b: 47
  },
  grey: {
    r: 128,
    g: 128,
    b: 128
  },
  honeydew: {
    r: 240,
    g: 255,
    b: 240
  },
  hotpink: {
    r: 255,
    g: 105,
    b: 180
  },
  indianred: {
    r: 205,
    g: 92,
    b: 92
  },
  indigo: {
    r: 75,
    g: 0,
    b: 130
  },
  ivory: {
    r: 255,
    g: 255,
    b: 240
  },
  khaki: {
    r: 240,
    g: 230,
    b: 140
  },
  lavender: {
    r: 230,
    g: 230,
    b: 250
  },
  lavenderblush: {
    r: 255,
    g: 240,
    b: 245
  },
  lawngreen: {
    r: 124,
    g: 252,
    b: 0
  },
  lemonchiffon: {
    r: 255,
    g: 250,
    b: 205
  },
  lightblue: {
    r: 173,
    g: 216,
    b: 230
  },
  lightcoral: {
    r: 240,
    g: 128,
    b: 128
  },
  lightcyan: {
    r: 224,
    g: 255,
    b: 255
  },
  lightgoldenrodyellow: {
    r: 250,
    g: 250,
    b: 210
  },
  lightgray: {
    r: 211,
    g: 211,
    b: 211
  },
  lightgreen: {
    r: 144,
    g: 238,
    b: 144
  },
  lightgrey: {
    r: 211,
    g: 211,
    b: 211
  },
  lightpink: {
    r: 255,
    g: 182,
    b: 193
  },
  lightsalmon: {
    r: 255,
    g: 160,
    b: 122
  },
  lightseagreen: {
    r: 32,
    g: 178,
    b: 170
  },
  lightskyblue: {
    r: 135,
    g: 206,
    b: 250
  },
  lightslategray: {
    r: 119,
    g: 136,
    b: 153
  },
  lightslategrey: {
    r: 119,
    g: 136,
    b: 153
  },
  lightsteelblue: {
    r: 176,
    g: 196,
    b: 222
  },
  lightyellow: {
    r: 255,
    g: 255,
    b: 224
  },
  lime: {
    r: 0,
    g: 255,
    b: 0
  },
  limegreen: {
    r: 50,
    g: 205,
    b: 50
  },
  linen: {
    r: 250,
    g: 240,
    b: 230
  },
  magenta: {
    r: 255,
    g: 0,
    b: 255
  },
  maroon: {
    r: 128,
    g: 0,
    b: 0
  },
  mediumaquamarine: {
    r: 102,
    g: 205,
    b: 170
  },
  mediumblue: {
    r: 0,
    g: 0,
    b: 205
  },
  mediumorchid: {
    r: 186,
    g: 85,
    b: 211
  },
  mediumpurple: {
    r: 147,
    g: 112,
    b: 219
  },
  mediumseagreen: {
    r: 60,
    g: 179,
    b: 113
  },
  mediumslateblue: {
    r: 123,
    g: 104,
    b: 238
  },
  mediumspringgreen: {
    r: 0,
    g: 250,
    b: 154
  },
  mediumturquoise: {
    r: 72,
    g: 209,
    b: 204
  },
  mediumvioletred: {
    r: 199,
    g: 21,
    b: 133
  },
  midnightblue: {
    r: 25,
    g: 25,
    b: 112
  },
  mintcream: {
    r: 245,
    g: 255,
    b: 250
  },
  mistyrose: {
    r: 255,
    g: 228,
    b: 225
  },
  moccasin: {
    r: 255,
    g: 228,
    b: 181
  },
  navajowhite: {
    r: 255,
    g: 222,
    b: 173
  },
  navy: {
    r: 0,
    g: 0,
    b: 128
  },
  oldlace: {
    r: 253,
    g: 245,
    b: 230
  },
  olive: {
    r: 128,
    g: 128,
    b: 0
  },
  olivedrab: {
    r: 107,
    g: 142,
    b: 35
  },
  orange: {
    r: 255,
    g: 165,
    b: 0
  },
  orangered: {
    r: 255,
    g: 69,
    b: 0
  },
  orchid: {
    r: 218,
    g: 112,
    b: 214
  },
  palegoldenrod: {
    r: 238,
    g: 232,
    b: 170
  },
  palegreen: {
    r: 152,
    g: 251,
    b: 152
  },
  paleturquoise: {
    r: 175,
    g: 238,
    b: 238
  },
  palevioletred: {
    r: 219,
    g: 112,
    b: 147
  },
  papayawhip: {
    r: 255,
    g: 239,
    b: 213
  },
  peachpuff: {
    r: 255,
    g: 218,
    b: 185
  },
  peru: {
    r: 205,
    g: 133,
    b: 63
  },
  pink: {
    r: 255,
    g: 192,
    b: 203
  },
  plum: {
    r: 221,
    g: 160,
    b: 221
  },
  powderblue: {
    r: 176,
    g: 224,
    b: 230
  },
  purple: {
    r: 128,
    g: 0,
    b: 128
  },
  rebeccapurple: {
    r: 102,
    g: 51,
    b: 153
  },
  red: {
    r: 255,
    g: 0,
    b: 0
  },
  rosybrown: {
    r: 188,
    g: 143,
    b: 143
  },
  royalblue: {
    r: 65,
    g: 105,
    b: 225
  },
  saddlebrown: {
    r: 139,
    g: 69,
    b: 19
  },
  salmon: {
    r: 250,
    g: 128,
    b: 114
  },
  sandybrown: {
    r: 244,
    g: 164,
    b: 96
  },
  seagreen: {
    r: 46,
    g: 139,
    b: 87
  },
  seashell: {
    r: 255,
    g: 245,
    b: 238
  },
  sienna: {
    r: 160,
    g: 82,
    b: 45
  },
  silver: {
    r: 192,
    g: 192,
    b: 192
  },
  skyblue: {
    r: 135,
    g: 206,
    b: 235
  },
  slateblue: {
    r: 106,
    g: 90,
    b: 205
  },
  slategray: {
    r: 112,
    g: 128,
    b: 144
  },
  slategrey: {
    r: 112,
    g: 128,
    b: 144
  },
  snow: {
    r: 255,
    g: 250,
    b: 250
  },
  springgreen: {
    r: 0,
    g: 255,
    b: 127
  },
  steelblue: {
    r: 70,
    g: 130,
    b: 180
  },
  tan: {
    r: 210,
    g: 180,
    b: 140
  },
  teal: {
    r: 0,
    g: 128,
    b: 128
  },
  thistle: {
    r: 216,
    g: 191,
    b: 216
  },
  tomato: {
    r: 255,
    g: 99,
    b: 71
  },
  turquoise: {
    r: 64,
    g: 224,
    b: 208
  },
  violet: {
    r: 238,
    g: 130,
    b: 238
  },
  wheat: {
    r: 245,
    g: 222,
    b: 179
  },
  white: {
    r: 255,
    g: 255,
    b: 255
  },
  whitesmoke: {
    r: 245,
    g: 245,
    b: 245
  },
  yellow: {
    r: 255,
    g: 255,
    b: 0
  },
  yellowgreen: {
    r: 154,
    g: 205,
    b: 50
  }
};

/**
 *
 * Converts RGB color to HEX
 *
 * @param   {number || string}    r   Accepts RGB as string || Accepts R as string or number
 * @param   {number || string}    g   Accepts G as string or number
 * @param   {number || string}    b   Accepts B as string or number
 *
 * @return  {string} Returns HEX color
 */
function RgbToHex(r, g, b) {
  if (typeof r === "string" && !g && !b) {
    const color = r.replace(/rgb[(]|[)]/gm, "");
    [r, g, b] = color.split(",");
  }
  // eslint-disable-next-line no-bitwise
  return "#" + ((1 << 24) + (Number(r) << 16) + (Number(g) << 8) + Number(b)).toString(16).slice(1);
}
/**
 *
 * Converts HEX or HEX Alpha to RGB
 *
 * @param   {string}    hex   Accepts HEX color
 *
 * @return  {object} Returns RGB color; {r,g,b}
 */
function hexToRgb(hex) {
  hex = hex.substring(1);
  hex = hex.length === 3 || hex.length === 4 ? [...hex].map(x => x + x).join("") : hex;
  return rgbaToRgb({
    r: parseInt("0x" + hex[0] + hex[1], 16),
    g: parseInt("0x" + hex[2] + hex[3], 16),
    b: parseInt("0x" + hex[4] + hex[5], 16),
    a: parseInt("0x" + hex[6] + hex[7], 16) / 255 || 1
  });
}
/**
 *
 * Converts any color format to RGB string
 *
 * @param   {string}    anyColor   Accepts any color format
 *
 * @return  {string} Returns RGB color; `r,g,b`
 */
function anyColorToRgbString(anyColor) {
  const {
    r,
    g,
    b
  } = checkColor(anyColor);
  return [r, g, b].join(",");
}
/**
 *
 * Converts HSL to RGB color
 *
 * @param   {string}    hsl   Accepts HSL color
 *
 * @return  {object} Returns RGB color; {r,g,b}
 */
function hslToRgb(hsl) {
  const hslArray = hsl.replace(/hsla?[(]|[%]|[)]/gm, "").split(",").map(x => x.trim());
  let h = hslArray[0];
  const s = Number(hslArray[1]) / 100;
  const l = Number(hslArray[2]) / 100;
  const a = 1;
  // Strip label and convert to degrees (if necessary)
  // eslint-disable-next-line no-bitwise
  if (~h.indexOf("deg")) {
    h = h.substr(0, h.length - 3);
    // eslint-disable-next-line no-bitwise
  } else if (~h.indexOf("rad")) {
    h = Math.round(Number(h.substr(0, h.length - 3)) * (180 / Math.PI));
    // eslint-disable-next-line no-bitwise
  } else if (~h.indexOf("turn")) {
    h = Math.round(Number(h.substr(0, h.length - 4)) * 360);
  }
  h = Number(h);
  if (h >= 360) {
    h %= 360;
  } // Keep hue fraction of 360 if h is higher than 360
  let r = 255;
  let g = 255;
  let b = 255;
  const c = (1 - Math.abs(2 * l - 1)) * s; // chroma -> color intensity
  const x = c * (1 - Math.abs(h / 60 % 2 - 1)); // Second largest component (first being chroma)
  const m = l - c / 2; // Amount to add to each channel to match lightness
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  return rgbaToRgb({
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a
  });
}
/**
 *
 * Convert RGB string with HEX or Word inside to RGB object
 *
 * @param   {string}    rgb   Accepts RGB color as string
 *
 * @return  {object} Returns RGB color; {r,g,b}
 */
function rgbStringToRgb(rgb) {
  const color = rgb.replace(/rgb[(]|[)]/gm, "");
  // if RGB has hex color definition
  // eslint-disable-next-line no-bitwise
  if (~rgb.indexOf("#")) {
    return hexToRgb(color);
  }
  // if RGB has word color definition
  else if (!/\d/.test(rgb)) {
    return colors[color.toLowerCase()];
  }
  // if RGB has RGB color definition
  else {
    const [r, g, b] = color.split(",");
    [r, g, b].forEach(x => x.trim());
    return {
      r: Number(r),
      g: Number(g),
      b: Number(b)
    };
  }
}
/**
 *
 * Converts RGB Alpha to RGB object
 *
 * @param   {string}    rgba   Accepts RGB Alpha color
 *
 * @return  {object} Returns RGB color; {r,g,b}
 */
function rgbaToRgb(rgba) {
  let newAlpha = 1;
  let RGB = typeof rgba === "object" ? rgba : {
    r: 255,
    g: 255,
    b: 255
  };
  const calc = val => Math.round(newAlpha * (val / 255) * 255); // Calc best color contrast values
  // const calc = val => Math.round((RGB.a * (val / 255) + (RGB.a * ( 0 / 255))) * 255); // Calc best color contrast values
  if (typeof rgba === "string") {
    const val = rgba.replace(/rgba[(]|[)]/gm, "");
    const color = val.slice(0, val.lastIndexOf(",")).trim();
    const alpha = Number(val.slice(val.lastIndexOf(",") + 1).trim());
    // if RGBA has HEX color definition
    if (color[0] === "#") {
      RGB = hexToRgb(color);
    }
    // if RGBA has word color definition
    else if (!/\d/.test(color)) {
      RGB = colors[color.toLowerCase()];
    }
    // if RGBA has RGB color definition
    else {
      const [r, g, b] = color.split(",");
      [r, g, b].forEach(x => Number(x.trim()));
      RGB = {
        r: Number(r),
        g: Number(g),
        b: Number(b)
      };
    }
    // RGB.a = alpha;
    newAlpha = alpha === 1 ? 1 : Number((1 - alpha).toPrecision(2));
  }
  return {
    r: calc(RGB.r),
    g: calc(RGB.g),
    b: calc(RGB.b)
  };
}
/**
 *
 * Check what color format is being used.
 *
 * @param   {string}    color   Accepts any color format
 *
 * @return  {object} Returns RGB color; {r,g,b}
 */
function checkColor(color) {
  if (color in colors) {
    return colors[color.toLowerCase()];
  } else if (color[0] === "#") {
    return hexToRgb(color);
    // eslint-disable-next-line no-bitwise
  } else if (~color.indexOf("hsl")) {
    return hslToRgb(color);
    // eslint-disable-next-line no-bitwise
  } else if (~color.indexOf("rgba")) {
    return rgbaToRgb(color);
    // eslint-disable-next-line no-bitwise
  } else if (~color.indexOf("rgb")) {
    return rgbStringToRgb(color);
  }
  return {
    r: 255,
    g: 255,
    b: 255
  };
}
/**
 *
 * Expects a color and a contrast value between 0 and 1.'
 * It will look at the supplied color's brightness and will start the contrast scale either from #000 (black) or #FFF (white).
 * This function will work best when you supply a very dark or very bright color.
 * It will return a gray color with the desired contrast which is based on the specified color.
 *
 * @param   {string}    color   Accepts any color format
 * @param   {number}    contrast   Accepts a value between 0 and 1
 *
 * @return  {string} Returns HEX color
 */
function setContrastScale(contrast, color) {
  if (contrast > 1) {
    contrast = 1;
  }
  if (contrast < 0) {
    contrast = 0;
  }
  const max = 256;
  const c = checkColor(color);
  const {
    r,
    g,
    b
  } = typeof c === "object" ? c : {
    r: 255,
    g: 255,
    b: 255
  };
  // https://www.w3.org/TR/AERT/#color-contrast
  const brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000);
  const value = Math.round(brightness > max / 2 ? max - max * contrast : max * contrast);
  return RgbToHex(value, value, value);
}

/*

==> You can find a copy of the core variables below. (From styles/native/core/variables.js)
==> You can freely change any value in this file.
==> DO NOT change the core variable file (or any other file in core), as that makes updating Atlas a lot harder in the future.

*/
// == Global variables
// ## Variables to be used during styling
// -------------------------------------------------------------------------------------------------------------------//
// Brand Styles
const brand = {
  primary: "#264AE5",
  success: "#3CB33D",
  warning: "#ECA51C",
  danger: "#E33F4E",
  info: "#0086D9",
  primaryLight: "#F3F5FF",
  successLight: "#F1FCF1",
  warningLight: "#FFF9E6",
  dangerLight: "#FFEEF0",
  infoLight: "#ECF9FF"
};
//
// Dark Mode - Inherits OS theme if possible
const darkMode = Appearance.getColorScheme() === "dark";
//
// Background Colors
const backgroundDefaults = {
  primaryLight: "#FFF",
  primaryDark: "#0A1325",
  secondaryLight: "#F8F8F8",
  secondaryDark: "#161F30"
};
const background = {
  primary: darkMode ? backgroundDefaults.primaryDark : backgroundDefaults.primaryLight,
  secondary: darkMode ? backgroundDefaults.secondaryDark : backgroundDefaults.secondaryLight,
  brandPrimary: brand.primary,
  brandSuccess: brand.success,
  brandWarning: brand.warning,
  brandDanger: brand.danger,
  brandInfo: brand.info
};
//
// Contrast (Gray) colors based on background.primary
const contrast = {
  highest: setContrastScale(0.95, background.primary),
  higher: setContrastScale(0.8, background.primary),
  high: setContrastScale(0.65, background.primary),
  regular: setContrastScale(0.5, background.primary),
  low: setContrastScale(0.35, background.primary),
  lower: setContrastScale(0.2, background.primary),
  lowest: setContrastScale(0.05, background.primary)
};
//
// Border Style
const border = {
  color: darkMode ? "#3B4251" : "#CED0D3",
  width: 1,
  radiusSmall: 4,
  radiusLarge: 8,
  radiusLargest: 9999
};
//
// Font Styles
const fontDefaults = {
  colorTitleDark: "#0A1326",
  colorTitleLight: "#FDFDFD",
  colorParagraphDark: "#6C717E",
  colorParagraphLight: "#E7E7E9",
  colorDisabledDark: "#9DA1A8",
  colorDisabledLight: "#9DA1A8"
};
const font = {
  size: adjustFont(14),
  sizeSmallest: adjustFont(10),
  sizeSmall: adjustFont(12),
  sizeLarge: adjustFont(16),
  sizeLargest: adjustFont(18),
  sizeH1: adjustFont(40),
  sizeH2: adjustFont(34),
  sizeH3: adjustFont(28),
  sizeH4: adjustFont(24),
  sizeH5: adjustFont(20),
  sizeH6: adjustFont(16),
  lineHeight: adjustFont(14) * 1.5,
  lineHeightSmallest: adjustFont(10) * 1.5,
  lineHeightSmall: adjustFont(12) * 1.5,
  lineHeightLarge: adjustFont(16) * 1.5,
  lineHeightLargest: adjustFont(18) * 1.5,
  lineHeightH1: adjustFont(40) * 1.5,
  lineHeightH2: adjustFont(34) * 1.5,
  lineHeightH3: adjustFont(28) * 1.5,
  lineHeightH4: adjustFont(24) * 1.5,
  lineHeightH5: adjustFont(20) * 1.5,
  lineHeightH6: adjustFont(16) * 1.5,
  colorTitle: darkMode ? fontDefaults.colorTitleLight : fontDefaults.colorTitleDark,
  colorParagraph: darkMode ? fontDefaults.colorParagraphLight : fontDefaults.colorParagraphDark,
  colorDisabled: darkMode ? fontDefaults.colorDisabledLight : fontDefaults.colorDisabledDark,
  weightLight: "100",
  weightNormal: "normal",
  weightSemiBold: "600",
  weightBold: "bold",
  family: Platform.select({
    ios: "System",
    android: "normal"
  })
};
//
// Spacing
const spacing = {
  smallest: 2,
  smaller: 4,
  small: 8,
  regular: 16,
  large: 24,
  larger: 32,
  largest: 40
};
//
// Button Styles
const button = {
  // Start default styles
  container: {
    rippleColor: contrast.lowest,
    borderRadius: border.radiusLarge,
    minWidth: 48,
    minHeight: 48,
    paddingVertical: spacing.small,
    paddingHorizontal: spacing.small
  },
  containerDisabled: {
    borderColor: border.color,
    backgroundColor: border.color
  },
  icon: {
    size: font.sizeSmall
  },
  iconDisabled: {
    color: font.colorDisabled
  },
  caption: {
    fontSize: font.sizeSmall,
    fontWeight: font.weightBold
  },
  captionDisabled: {
    color: font.colorDisabled
  },
  // End default styles
  header: {
    color: contrast.highest,
    borderColor: "transparent",
    backgroundColor: "transparent",
    fontSize: font.sizeSmall,
    fontSizeIcon: font.sizeSmall,
    paddingLeft: 0,
    paddingRight: 10
  },
  primary: {
    color: "#FFF",
    borderColor: brand.primary,
    backgroundColor: brand.primary
  },
  secondary: {
    color: brand.primary,
    borderColor: brand.primary,
    backgroundColor: "transparent",
    inversedColor: "#FFF"
  },
  success: {
    color: "#FFF",
    borderColor: brand.success,
    backgroundColor: brand.success
  },
  warning: {
    color: "#FFF",
    borderColor: brand.warning,
    backgroundColor: brand.warning
  },
  danger: {
    color: "#FFF",
    borderColor: brand.danger,
    backgroundColor: brand.danger
  }
};
//
// Input Styles
const input = {
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
};
const image = {
  image: {
    small: 24,
    medium: 40,
    large: 56,
    larger: 72
  },
  imageDisabled: {
    opacity: 0.6
  },
  icon: 16
};
//
// Navigation Styles
const navigation = {
  statusBar: {
    backgroundColor: background.primary,
    barStyle: darkMode ? "light-content" : "dark-content"
  },
  topBar: {
    backgroundColor: brand.primary,
    backButtonColor: "#FFF",
    titleColor: "#FFF",
    titleFontSize: font.sizeH6
  },
  bottomBar: {
    color: contrast.high,
    selectedTextColor: brand.primary,
    selectedIconColor: brand.primary,
    backgroundColor: background.primary,
    fontSize: font.sizeSmall,
    iconSize: font.sizeSmall
  },
  progressOverlay: {
    color: font.colorTitle,
    activityIndicatorColor: font.colorTitle,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    containerBackgroundColor: background.secondary,
    fontSize: font.size,
    borderRadius: border.radiusSmall,
    elevation: 1.5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10 // Only for iOS
  }
};
//
// Checkbox styles
const checkbox = {
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
};
//
// Container Styles
const container = {
  containerDisabled: {
    opacity: 0.6
  }
};
//
// Accordion Styles
const accordion = {
  container: {
    backgroundColor: background.primary,
    borderColor: border.color
  },
  groupHeader: {
    container: {
      paddingVertical: spacing.regular,
      paddingHorizontal: spacing.regular
    },
    heading: {
      color: font.colorTitle
    },
    icon: {
      size: font.sizeLarge,
      color: font.colorTitle
    }
  },
  groupContent: {
    paddingTop: spacing.small,
    paddingBottom: spacing.large,
    paddingHorizontal: spacing.regular
  }
};
//
// Badge Styles
const badge = {
  fontWeight: font.weightNormal,
  borderRadius: border.radiusLarge,
  paddingVertical: spacing.smaller,
  paddingHorizontal: spacing.small,
  default: {
    color: contrast.higher,
    backgroundColor: contrast.lowest
  },
  primary: {
    color: brand.primary,
    backgroundColor: brand.primaryLight
  },
  success: {
    color: brand.success,
    backgroundColor: brand.successLight
  },
  warning: {
    color: brand.warning,
    backgroundColor: brand.warningLight
  },
  danger: {
    color: brand.danger,
    backgroundColor: brand.dangerLight
  }
};
//
// Tabcontainer Styles
const tabContainer = {
  tabBar: {
    pressColor: contrast.lower,
    backgroundColor: brand.primary
  },
  tab: {
    paddingVertical: 12
  },
  indicator: {
    backgroundColor: fontDefaults.colorTitleLight,
    height: Platform.select({
      ios: 2,
      android: 2
    })
  },
  label: {
    color: fontDefaults.colorTitleLight,
    fontSize: font.size,
    fontWeight: font.weightSemiBold,
    textTransform: "capitalize"
  },
  activeLabel: {
    color: fontDefaults.colorTitleLight,
    fontSize: font.size,
    fontWeight: font.weightSemiBold,
    textTransform: "capitalize"
  },
  badgeContainer: {
    borderRadius: border.radiusLargest,
    backgroundColor: badge.default.backgroundColor,
    paddingVertical: spacing.smallest,
    paddingHorizontal: spacing.small,
    marginLeft: 8
  },
  badgeCaption: {
    fontSize: font.size,
    color: badge.default.color,
    fontWeight: badge.fontWeight
  }
};
//
// ListView Styles
const listView = {
  listItemDisabled: {
    opacity: 0.6
  },
  border: {
    color: border.color,
    width: border.width
  }
};
//
// Layoutgrid Styles
const layoutGrid = {
  gutterSize: 16
};
//
//
// Floating Action Button Styles
const floatingActionButton = {
  container: {
    margin: 30
  },
  button: {
    size: 50,
    rippleColor: contrast.lowest,
    borderColor: brand.primary,
    backgroundColor: brand.primary
  },
  buttonIcon: {
    size: font.sizeLarge,
    color: contrast.lowest
  },
  secondaryButton: {
    size: 30,
    backgroundColor: background.secondary
  },
  secondaryButtonIcon: {
    size: font.sizeSmall,
    color: contrast.high
  },
  secondaryButtonCaption: {
    color: contrast.high,
    fontSize: font.sizeSmall
  },
  secondaryButtonCaptionContainer: {
    backgroundColor: background.primary,
    borderColor: background.primary
  }
};
//
// Intro Screen Styles
const introScreen = {
  fullscreenContainer: {
    backgroundColor: background.primary
  },
  popupContainer: {
    paddingVertical: 150,
    paddingHorizontal: 50,
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  pagination: {
    text: {
      color: font.colorTitle,
      fontSize: font.size
    },
    dotStyle: {
      size: spacing.small,
      backgroundColor: contrast.lower
    },
    activeDotStyle: {
      size: spacing.small,
      backgroundColor: font.colorTitle
    }
  },
  button: {
    icon: {
      color: font.colorTitle,
      size: button.icon.size
    },
    caption: {
      color: font.colorTitle,
      fontSize: button.caption.fontSize,
      fontWeight: font.weightBold,
      textTransform: "uppercase",
      paddingHorizontal: spacing.smallest
    }
  },
  buttonPaginationAbove: {
    container: {
      paddingVertical: spacing.regular,
      backgroundColor: button.primary.backgroundColor
    }
  }
};
//
// List View Swipe Styles
const listViewSwipe = {
  leftAction: {
    panelSize: 160,
    panelSizeSmall: 80,
    panelSizeLarge: 240,
    backgroundColor: background.primary
  },
  rightAction: {
    panelSize: 160,
    panelSizeSmall: 80,
    panelSizeLarge: 240,
    backgroundColor: background.primary
  }
};
//
// Progress Bar Styles
const progressBar = {
  bar: {
    height: 8,
    heightSmall: 4,
    heightLarge: 12,
    backgroundColor: contrast.lowest
  },
  fill: {
    backgroundColor: brand.primary
  }
};
//
// Progress Circle Styles
const progressCircle = {
  circle: {
    size: 64
  },
  fill: {
    width: 4,
    lineCapRounded: true,
    backgroundColor: brand.primary
  },
  text: {
    color: contrast.regular,
    fontSize: font.size,
    fontWeight: font.weightSemiBold
  }
};
//
// Rating Styles
const rating = {
  containerDisabled: {
    opacity: 0.5
  },
  icon: {
    size: 24,
    color: contrast.lower,
    selectedColor: brand.warning
  }
};
//
// (Range)Slider styles
const slider = {
  track: {
    height: 4,
    backgroundColor: contrast.lowest
  },
  trackDisabled: {
    backgroundColor: contrast.lower,
    opacity: 0.4
  },
  highlight: {
    backgroundColor: brand.primary
  },
  highlightDisabled: {
    backgroundColor: brand.primary
  },
  marker: {
    size: 24,
    borderColor: contrast.lowest,
    backgroundColor: background.secondary
  },
  markerActive: {
    size: 32
  },
  markerDisabled: {
    size: 24,
    borderColor: contrast.lowest,
    backgroundColor: background.secondary
  }
};

//export default from "./custom-variables.js";
// entidad
// Radio buttons styles
const radioButtons = {
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
    justifyContent: 'center'
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
const checkboxControl = {
  ...checkbox,
  ...{
    caption: {
      numberOfLines: 1,
      color: font.colorTitle,
      fontSize: font.sizeSmall,
      lineHeight: font.lineHeightSmall,
      marginBottom: spacing.small,
      marginLeft: spacing.small,
      marginTop: spacing.smaller
    }
  }
};
const jsonformsControlsContainer = StyleSheet.create({
  //export const jsonformsControlsContainer={
  viewControl: {
    marginLeft: 0,
    marginTop: 0,
    marginBottom: 0,
    marginRight: 0,
    flexDirection: 'column'
  }
  //};
});
const jsonformsControlContainer = {
  marginBottom: 0,
  marginTop: 0,
  paddingBottom: 0,
  paddingTop: 0,
  borderColor: "#000000",
  borderTopWidth: 0,
  borderTopHeight: 0
};
const readOnlyControl = {
  label: {
    fontSize: font.sizeSmall,
    fontWeight: font.weightBold,
    color: font.colorTitle
  },
  value: {
    fontSize: font.sizeSmall,
    fontWeight: font.weightNormal,
    color: font.colorTitle
  },
  container: {
    marginBottom: spacing.small
  }
};
const dateTimePicker = {
  buttonContainer: {
    flexDirection: "row"
  },
  button: button,
  buttonCancel: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  buttonConfirm: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  }
};

var customVariables = /*#__PURE__*/Object.freeze({
    __proto__: null,
    radioButtons: radioButtons,
    checkboxControl: checkboxControl,
    jsonformsControlsContainer: jsonformsControlsContainer,
    jsonformsControlContainer: jsonformsControlContainer,
    readOnlyControl: readOnlyControl,
    dateTimePicker: dateTimePicker,
    brand: brand,
    darkMode: darkMode,
    backgroundDefaults: backgroundDefaults,
    background: background,
    contrast: contrast,
    border: border,
    fontDefaults: fontDefaults,
    font: font,
    spacing: spacing,
    button: button,
    input: input,
    image: image,
    navigation: navigation,
    checkbox: checkbox,
    container: container,
    accordion: accordion,
    badge: badge,
    tabContainer: tabContainer,
    listView: listView,
    layoutGrid: layoutGrid,
    floatingActionButton: floatingActionButton,
    introScreen: introScreen,
    listViewSwipe: listViewSwipe,
    progressBar: progressBar,
    progressCircle: progressCircle,
    rating: rating,
    slider: slider
});

/* https://stackoverflow.com/questions/27936772/how-to-deep-merge-instead-of-shallow-merge */
/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, {
          [key]: {}
        });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, {
          [key]: source[key]
        });
      }
    }
  }
  return mergeDeep(target, ...sources);
}

function TextControl(props) {
    var _a;
    const state = useObject();
    let attr = props.props;
    let styles = {};
    mergeDeep(styles, customVariables === null || customVariables === void 0 ? void 0 : input, ((_a = attr === null || attr === void 0 ? void 0 : attr.style) === null || _a === void 0 ? void 0 : _a.input) || {});
    const [error, setError] = useState(attr.error);
    const _onChange = (text) => {
        state.formData[attr.propertyName] = text;
        state.setFormData(state.formData);
        attr.onChange(state.formData);
        attr.error = isEmpty(text);
        setError(attr.error);
        //return text;
        return text || attr.placeholder || attr.data || attr.value;
    };
    return (createElement(View, { style: /*styles?.itemContainer||{}*/ {} },
        createElement(Text, { style: styles === null || styles === void 0 ? void 0 : styles.label }, attr.label || "No label included"),
        createElement(TextInput, { style: (state.showError && error) ? (styles === null || styles === void 0 ? void 0 : styles.inputError) || {} : (styles === null || styles === void 0 ? void 0 : styles.input) || {}, inputMode: attr.inputMode, maxLength: attr.maxLength, placeholder: attr.placeholder, placeholderTextColor: "lightgray", defaultValue: attr.data || attr.value, editable: !attr.readonly, onChangeText: (text) => _onChange(text) }),
        (state.showError && error)
            ? createElement(Text, { style: (styles === null || styles === void 0 ? void 0 : styles.inputError) || {} }, attr.errorMessage)
            : ""));
}

function TextAreaControl(props) {
    var _a;
    const state = useObject();
    let attr = props.props;
    let styles = {};
    mergeDeep(styles, customVariables === null || customVariables === void 0 ? void 0 : input, ((_a = attr === null || attr === void 0 ? void 0 : attr.style) === null || _a === void 0 ? void 0 : _a.input) || {});
    let maxCharLimit = attr.maxLength || 200;
    const [charCount, setCharCount] = useState(0);
    const _onChange = (text) => {
        setCharCount(text.length);
        state.formData[attr.propertyName] = text;
        state.setFormData(state.formData);
        attr.onChange(state.formData);
        return text || attr.placeholder || attr.data || attr.value;
    };
    return (createElement(View, { style: {
            marginBottom: 10
        } },
        createElement(Text, { style: styles.label }, attr.label || 'No label included'),
        createElement(TextInput, { style: styles.input, keyboardType: "default", multiline: true, maxLength: maxCharLimit, numberOfLines: 7, defaultValue: attr.data || attr.value, placeholder: attr.placeholder, placeholderTextColor: 'lightgray', underlineColorAndroid: "transparent", textAlignVertical: "top", editable: !attr.readonly, onChangeText: (text) => _onChange(text) }),
        createElement(Text, { style: styles.labelDisabled }, `${charCount}/${maxCharLimit}`)));
}

const styles$1 = StyleSheet.create({
    inputControl: {
        height: 40,
        marginLeft: 12,
        borderColor: '#000000',
        borderWidth: 1,
        marginBottom: 12
    },
    inputLabel: {
        marginLeft: 12
    }
});
function PasswordControl(props) {
    const state = useObject();
    const _onChange = (text) => {
        state.setFormData(state.formData);
        return text || attr.placeholder || attr.value;
    };
    let attr = props.props;
    return (createElement(View, null,
        createElement(Text, { style: styles$1.inputLabel }, attr.label || 'No label included'),
        createElement(TextInput, { style: styles$1.inputControl, keyboardType: "default", maxLength: attr.maxLength, onChangeText: (text) => _onChange(text) })));
}

function IntegerControl(props) {
    var _a;
    const state = useObject();
    let attr = props.props;
    let styles = {};
    mergeDeep(styles, input, ((_a = attr === null || attr === void 0 ? void 0 : attr.style) === null || _a === void 0 ? void 0 : _a.input) || {});
    const [error, setError] = useState(attr.error);
    const _onChange = (text) => {
        state.formData[attr.propertyName] = text;
        state.setFormData(state.formData);
        attr.onChange(state.formData);
        attr.error = isEmpty(text);
        setError(attr.error);
        return text || attr.placeholder || attr.value;
    };
    return (createElement(View, { style: {} },
        createElement(Text, { style: styles.label }, attr.label || 'No label included'),
        createElement(TextInput, { style: (state.showError && error) ? styles.inputError : styles.input, keyboardType: "numeric", placeholder: attr.placeholder, placeholderTextColor: 'lightgray', defaultValue: attr.data || attr.value, editable: !attr.readonly, onChangeText: (text) => _onChange(text) })));
}

function NumberControl(props) {
    var _a;
    const state = useObject();
    let attr = props.props;
    let styles = {};
    mergeDeep(styles, customVariables === null || customVariables === void 0 ? void 0 : input, ((_a = attr === null || attr === void 0 ? void 0 : attr.style) === null || _a === void 0 ? void 0 : _a.input) || {});
    const [error, setError] = useState(attr.error);
    const _onChange = (text) => {
        state.formData[attr.propertyName] = text;
        state.setFormData(state.formData);
        attr.onChange(state.formData);
        attr.error = isEmpty(text);
        setError(attr.error);
        return text || attr.placeholder || attr.value;
    };
    return (createElement(View, { style: {} },
        createElement(Text, { style: styles.label }, attr.label || 'No label included'),
        createElement(TextInput, { style: (state.showError && error) ? styles.inputError : styles.input, keyboardType: "decimal-pad", placeholder: attr.placeholder, placeholderTextColor: 'lightgray', defaultValue: attr.data || attr.value, editable: !attr.readonly, onChangeText: (text) => _onChange(text) })));
}

function CheckBoxControl(props) {
    var _a, _b;
    const state = useObject();
    let attr = props.props;
    let styles = {};
    mergeDeep(styles, customVariables === null || customVariables === void 0 ? void 0 : checkboxControl, ((_a = attr === null || attr === void 0 ? void 0 : attr.style) === null || _a === void 0 ? void 0 : _a.checkboxControl) || {});
    let stylesInput = {};
    mergeDeep(stylesInput, customVariables === null || customVariables === void 0 ? void 0 : input, ((_b = attr === null || attr === void 0 ? void 0 : attr.style) === null || _b === void 0 ? void 0 : _b.input) || {});
    const [checked, setChecked] = useState(getDataFromBoolean$1(attr.data));
    const [error, setError] = useState(attr.error);
    const _onPress = () => {
        setChecked(!checked);
        state.formData[attr.propertyName] = !checked;
        state.setFormData(state.formData);
        attr.onChange(state.formData);
        attr.error = checked;
        setError(attr.error);
    };
    const renderCheckBox = () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        if (checked) {
            return (createElement(View, { style: (styles === null || styles === void 0 ? void 0 : styles.checkboxInput) || {
                    width: ((_a = styles === null || styles === void 0 ? void 0 : styles.checkboxInput) === null || _a === void 0 ? void 0 : _a.width) || 40,
                    height: ((_b = styles === null || styles === void 0 ? void 0 : styles.checkboxInput) === null || _b === void 0 ? void 0 : _b.height) || 40
                } },
                createElement(Svg, { width: ((_c = styles === null || styles === void 0 ? void 0 : styles.checkboxInput) === null || _c === void 0 ? void 0 : _c.width) || 40, height: ((_d = styles === null || styles === void 0 ? void 0 : styles.checkboxInput) === null || _d === void 0 ? void 0 : _d.height) || 40, viewBox: "0 0 24 24" },
                    createElement(Path, { fill: ((_e = styles === null || styles === void 0 ? void 0 : styles.checkboxInput) === null || _e === void 0 ? void 0 : _e.color) || "#1A6251", d: "m 5.2350576,12.635087 4.8984404,4.898442 0.179711,-0.179706 2.222656,-2.222655 6.229167,-6.2291688 -2.435439,-2.4354389 -6.229167,6.2291677 -2.4630024,-2.463002 z" }))));
        }
        else {
            return (createElement(View, { style: (styles === null || styles === void 0 ? void 0 : styles.checkboxInput) || {
                    width: ((_f = styles === null || styles === void 0 ? void 0 : styles.checkboxInput) === null || _f === void 0 ? void 0 : _f.width) || 40,
                    height: ((_g = styles === null || styles === void 0 ? void 0 : styles.checkboxInput) === null || _g === void 0 ? void 0 : _g.height) || 40
                } },
                createElement(Svg, { width: ((_h = styles === null || styles === void 0 ? void 0 : styles.checkboxInput) === null || _h === void 0 ? void 0 : _h.width) || 40, height: ((_j = styles === null || styles === void 0 ? void 0 : styles.checkboxInput) === null || _j === void 0 ? void 0 : _j.height) || 40, viewBox: "0 0 24 24" })));
        }
    };
    const renderText = (text) => {
        var _a, _b, _c;
        return (createElement(View, { style: (styles === null || styles === void 0 ? void 0 : styles.labelContainer) || {
                flex: ((_a = styles === null || styles === void 0 ? void 0 : styles.labelContainer) === null || _a === void 0 ? void 0 : _a.flex) || 1,
                marginTop: ((_b = styles === null || styles === void 0 ? void 0 : styles.labelContainer) === null || _b === void 0 ? void 0 : _b.marginTop) || 4,
                marginLeft: ((_c = styles === null || styles === void 0 ? void 0 : styles.labelContainer) === null || _c === void 0 ? void 0 : _c.marginLeft) || 8
            } },
            createElement(Text, { style: [(styles === null || styles === void 0 ? void 0 : styles.caption) || {}] }, text)));
    };
    return (createElement(View, { style: {} },
        createElement(Text, { style: (stylesInput === null || stylesInput === void 0 ? void 0 : stylesInput.label) || {} }, attr.description || (attr.label || "No label included")),
        createElement(TouchableHighlight, { onPress: () => _onPress(), underlayColor: "transparent" },
            createElement(View, { style: {
                    flexDirection: "row",
                    alignItems: "center"
                } },
                renderCheckBox(),
                renderText(attr.label))),
        (state.showError && error)
            ? createElement(Text, { style: (stylesInput === null || stylesInput === void 0 ? void 0 : stylesInput.inputError) || {} }, attr.errorMessage)
            : ""));
}
function getDataFromBoolean$1(val) {
    if (typeof val === "boolean") {
        return val;
    }
    return false;
}

function CheckGroupControl(props) {
    var _a, _b;
    const state = useObject();
    let attr = props.props;
    let styles = {};
    mergeDeep(styles, customVariables === null || customVariables === void 0 ? void 0 : checkboxControl, ((_a = attr === null || attr === void 0 ? void 0 : attr.style) === null || _a === void 0 ? void 0 : _a.checkboxControl) || {});
    let stylesInput = {};
    mergeDeep(stylesInput, customVariables === null || customVariables === void 0 ? void 0 : input, ((_b = attr === null || attr === void 0 ? void 0 : attr.style) === null || _b === void 0 ? void 0 : _b.input) || {});
    let opts = attr.enum || [];
    const [error, setError] = useState(attr.error);
    let tmp = [];
    const [checked, setChecked] = useState(attr.data || tmp);
    let translations = attr.enumLabels || {}; //ockert
    const _onPress = (label) => {
        tmp = [...checked];
        let exist = tmp.filter(item => item === label);
        let arr;
        if (exist.length == 0) {
            arr = [...tmp, label];
        }
        else {
            arr = tmp.filter(item => item !== label);
        }
        setChecked(arr);
        attr.error = isEmptyArray(arr);
        setError(attr.error);
    };
    const renderCheckBox = (label) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        tmp = [...checked];
        state.formData[attr.propertyName] = tmp;
        state.setFormData(state.formData);
        attr.onChange(state.formData);
        let exist = tmp.filter(item => item === label);
        if (exist.length === 0) {
            return (createElement(View, { style: (styles === null || styles === void 0 ? void 0 : styles.checkboxInput) || {
                    width: ((_a = styles === null || styles === void 0 ? void 0 : styles.checkBoxInput) === null || _a === void 0 ? void 0 : _a.width) || 40,
                    height: ((_b = styles === null || styles === void 0 ? void 0 : styles.checkBoxInput) === null || _b === void 0 ? void 0 : _b.height) || 40
                } },
                createElement(Svg, { width: ((_c = styles === null || styles === void 0 ? void 0 : styles.checkBoxInput) === null || _c === void 0 ? void 0 : _c.width) || 40, height: ((_d = styles === null || styles === void 0 ? void 0 : styles.checkBoxInput) === null || _d === void 0 ? void 0 : _d.height) || 40, viewBox: "0 0 24 24" })));
        }
        else {
            return (createElement(View, { style: (styles === null || styles === void 0 ? void 0 : styles.checkboxInput) || {
                    width: ((_e = styles === null || styles === void 0 ? void 0 : styles.checkBoxInput) === null || _e === void 0 ? void 0 : _e.width) || 40,
                    height: ((_f = styles === null || styles === void 0 ? void 0 : styles.checkBoxInput) === null || _f === void 0 ? void 0 : _f.height) || 40
                } },
                createElement(Svg, { width: ((_g = styles === null || styles === void 0 ? void 0 : styles.checkBoxInput) === null || _g === void 0 ? void 0 : _g.width) || 40, height: ((_h = styles === null || styles === void 0 ? void 0 : styles.checkBoxInput) === null || _h === void 0 ? void 0 : _h.height) || 40, viewBox: "0 0 24 24" },
                    createElement(Path, { fill: ((_j = styles === null || styles === void 0 ? void 0 : styles.checkboxInput) === null || _j === void 0 ? void 0 : _j.color) || "#1A6251", d: "m 5.2350576,12.635087 4.8984404,4.898442 0.179711,-0.179706 2.222656,-2.222655 6.229167,-6.2291688 -2.435439,-2.4354389 -6.229167,6.2291677 -2.4630024,-2.463002 z" }))));
        }
    };
    const renderText = (text) => {
        var _a, _b, _c;
        return (createElement(View, { style: (styles === null || styles === void 0 ? void 0 : styles.labelContainer) || {
                flex: ((_a = styles === null || styles === void 0 ? void 0 : styles.labelContainer) === null || _a === void 0 ? void 0 : _a.flex) || 1,
                marginTop: ((_b = styles === null || styles === void 0 ? void 0 : styles.labelContainer) === null || _b === void 0 ? void 0 : _b.marginTop) || 4,
                marginLeft: ((_c = styles === null || styles === void 0 ? void 0 : styles.labelContainer) === null || _c === void 0 ? void 0 : _c.marginLeft) || 8
            } },
            createElement(Text, { style: [(styles === null || styles === void 0 ? void 0 : styles.caption) || {}] }, text)));
    };
    const renderControl = (label, translation, index) => {
        var _a, _b, _c, _d;
        let stylesContainer = (styles === null || styles === void 0 ? void 0 : styles.container) || {
            flexDirection: ((_a = styles === null || styles === void 0 ? void 0 : styles.container) === null || _a === void 0 ? void 0 : _a.flexDirection) || "row",
            alignItems: ((_b = styles === null || styles === void 0 ? void 0 : styles.container) === null || _b === void 0 ? void 0 : _b.alignItems) || "center",
            height: ((_c = styles === null || styles === void 0 ? void 0 : styles.container) === null || _c === void 0 ? void 0 : _c.height) || 35,
            marginTop: ((_d = styles === null || styles === void 0 ? void 0 : styles.container) === null || _d === void 0 ? void 0 : _d.marginTop) || 20
        };
        if (index == 0)
            stylesContainer.marginTop = 0;
        return (createElement(TouchableHighlight, { onPress: () => _onPress(label), underlayColor: "transparent" },
            createElement(View, { style: stylesContainer },
                renderCheckBox(label),
                renderText(translation))));
    };
    return (createElement(View, { style: {} },
        createElement(Text, { style: (stylesInput === null || stylesInput === void 0 ? void 0 : stylesInput.label) || {} }, attr.description || (attr.label || "No label included")),
        opts.map((optionValue, index) => (renderControl(optionValue, (() => {
            let translation = translations[optionValue] ? translations[optionValue] : optionValue; //ockert
            return translation;
        })(), index))),
        (state.showError && error)
            ? createElement(Text, { style: (stylesInput === null || stylesInput === void 0 ? void 0 : stylesInput.inputError) || {} }, attr.errorMessage)
            : ""));
}

function RadioControl(props) {
    var _a, _b;
    const state = useObject();
    let attr = props.props;
    let styles = {};
    mergeDeep(styles, customVariables === null || customVariables === void 0 ? void 0 : radioButtons, ((_a = attr === null || attr === void 0 ? void 0 : attr.style) === null || _a === void 0 ? void 0 : _a.radioButtons) || {});
    let stylesInput = {};
    mergeDeep(stylesInput, customVariables === null || customVariables === void 0 ? void 0 : input, ((_b = attr === null || attr === void 0 ? void 0 : attr.style) === null || _b === void 0 ? void 0 : _b.input) || {});
    const [error, setError] = useState(attr.error);
    let opts = attr.enum || [];
    let translations = attr.enumLabels || {};
    let data = getDataFromBoolean(attr.data);
    if (opts.length == 0) {
        opts.push("Yes");
        opts.push("No");
    }
    const [value, setValue] = useState(data);
    const _onPress = (label) => {
        setValue(label);
        state.formData[attr.propertyName] = label;
        state.setFormData(state.formData);
        attr.onChange(state.formData);
        attr.error = isEmptyBoolean(label);
        setError(attr.error);
    };
    const renderRadioControl = (label, translation, index) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        //flexDirection:"row",
        //marginTop:5
        let radioButtonItemContainerStyle = (styles === null || styles === void 0 ? void 0 : styles.radioButtonItemContainerStyle) || {
            marginBottom: ((_a = styles === null || styles === void 0 ? void 0 : styles.radioButtonItemContainerStyle) === null || _a === void 0 ? void 0 : _a.marginBottom) || 5,
            marginTop: ((_b = styles === null || styles === void 0 ? void 0 : styles.radioButtonItemContainerStyle) === null || _b === void 0 ? void 0 : _b.marginTop) || 5,
        };
        if (index == 0)
            radioButtonItemContainerStyle.marginTop = 0;
        return (createElement(View, { style: {
                flexDirection: "row"
            } },
            createElement(View, { style: radioButtonItemContainerStyle },
                createElement(TouchableOpacity, { onPress: () => { _onPress(label); } },
                    createElement(View, { style: (styles === null || styles === void 0 ? void 0 : styles.outerCircle) || {
                            height: ((_c = styles === null || styles === void 0 ? void 0 : styles.outerCircle) === null || _c === void 0 ? void 0 : _c.height) || 24,
                            width: ((_d = styles === null || styles === void 0 ? void 0 : styles.outerCircle) === null || _d === void 0 ? void 0 : _d.width) || 24,
                            borderRadius: ((_e = styles === null || styles === void 0 ? void 0 : styles.outerCircle) === null || _e === void 0 ? void 0 : _e.borderRadius) || 12,
                            borderWidth: ((_f = styles === null || styles === void 0 ? void 0 : styles.outerCircle) === null || _f === void 0 ? void 0 : _f.borderWidth) || 12,
                            borderColor: ((_g = styles === null || styles === void 0 ? void 0 : styles.outerCircle) === null || _g === void 0 ? void 0 : _g.borderColor) || "#000",
                            alignItems: ((_h = styles === null || styles === void 0 ? void 0 : styles.outerCircle) === null || _h === void 0 ? void 0 : _h.alignItems) || "center",
                            justifyContent: ((_j = styles === null || styles === void 0 ? void 0 : styles.outerCircle) === null || _j === void 0 ? void 0 : _j.justifyContent) || "center"
                        } }, value === label ?
                        createElement(View, { style: (styles === null || styles === void 0 ? void 0 : styles.innerCircle) || {
                                height: ((_k = styles === null || styles === void 0 ? void 0 : styles.innerCircle) === null || _k === void 0 ? void 0 : _k.height) || 12,
                                width: ((_l = styles === null || styles === void 0 ? void 0 : styles.innerCircle) === null || _l === void 0 ? void 0 : _l.width) || 12,
                                borderRadius: ((_m = styles === null || styles === void 0 ? void 0 : styles.innerCircle) === null || _m === void 0 ? void 0 : _m.borderRadius) || 6,
                                backgroundColor: ((_o = styles === null || styles === void 0 ? void 0 : styles.innerCircle) === null || _o === void 0 ? void 0 : _o.backgroundColor) || "#000"
                            } })
                        : null))),
            createElement(View, { style: { /*todo*/} },
                createElement(TouchableWithoutFeedback, { onPress: () => { _onPress(label); } },
                    createElement(View, { style: { flex: 1 } },
                        createElement(Text, { style: (styles === null || styles === void 0 ? void 0 : styles.caption) || {
                                numberOfLines: ((_p = styles === null || styles === void 0 ? void 0 : styles.label) === null || _p === void 0 ? void 0 : _p.numberOfLines) || 1,
                                color: ((_q = styles === null || styles === void 0 ? void 0 : styles.label) === null || _q === void 0 ? void 0 : _q.color) || "#000000",
                                fontSize: ((_r = styles === null || styles === void 0 ? void 0 : styles.label) === null || _r === void 0 ? void 0 : _r.fontSize) || 16,
                                textAlign: ((_s = styles === null || styles === void 0 ? void 0 : styles.label) === null || _s === void 0 ? void 0 : _s.textAlign) || "left",
                                marginLeft: ((_t = styles === null || styles === void 0 ? void 0 : styles.label) === null || _t === void 0 ? void 0 : _t.marginLeft) || 0,
                                marginTop: ((_u = styles === null || styles === void 0 ? void 0 : styles.label) === null || _u === void 0 ? void 0 : _u.marginTop) || 0
                            } }, translation))))));
    };
    return (createElement(View, { style: {
            marginBottom: 10
        } },
        createElement(Text, { style: (stylesInput === null || stylesInput === void 0 ? void 0 : stylesInput.label) || {} }, attr.description || (attr.label || "No label included")),
        opts != undefined && opts.map((optionValue, index) => (renderRadioControl(optionValue, (() => {
            let translation = translations[optionValue] ? translations[optionValue] : optionValue;
            return translation;
        })(), index))),
        (state.showError && error)
            ? createElement(Text, { style: (stylesInput === null || stylesInput === void 0 ? void 0 : stylesInput.inputError) || {} }, attr.errorMessage)
            : ""));
}
function getDataFromBoolean(val) {
    if (typeof val === "boolean") {
        if (val) {
            return "Yes";
        }
        return "No";
    }
    return val;
}

const styles = StyleSheet.create({
    Unknown: {
        color: '#f44336',
        marginLeft: 12,
        paddingTop: 10,
        paddingBottom: 10
    },
});
function UnknownControl(props) {
    var _a;
    const state = useObject();
    let label = "No applicable control found for " + ((_a = props.label) !== null && _a !== void 0 ? _a : 'undefined');
    console.log("No Control Found:" + state);
    return (createElement(View, null,
        createElement(Text, { style: styles.Unknown }, label)));
}

function ReadOnlyControl(props) {
    var _a;
    let attr = props.props;
    let styles = {};
    mergeDeep(styles, customVariables === null || customVariables === void 0 ? void 0 : readOnlyControl, ((_a = attr === null || attr === void 0 ? void 0 : attr.style) === null || _a === void 0 ? void 0 : _a.readOnlyControl) || {});
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
    return (createElement(View, { style: (styles === null || styles === void 0 ? void 0 : styles.container) || {} },
        createElement(Text, { style: (styles === null || styles === void 0 ? void 0 : styles.label) || {} }, attr.label),
        createElement(Text, { style: (styles === null || styles === void 0 ? void 0 : styles.value) || {} }, attr.data)));
}

const Form = ({ schema, uischema, i18nData, language, formData, onChange, readOnly, style, debugon }) => {
    const [data, setData] = useState(formData);
    const [show, setShow] = useState(false);
    let stylesJsonFormsControlContainer = {};
    mergeDeep(stylesJsonFormsControlContainer, jsonformsControlContainer || {});
    mergeDeep(stylesJsonFormsControlContainer, (style === null || style === void 0 ? void 0 : style.jsonFormsControlContainer) || {});
    let stylesJsonFormsControlsContainer = {};
    mergeDeep(stylesJsonFormsControlsContainer, jsonformsControlsContainer || {});
    mergeDeep(stylesJsonFormsControlsContainer, (style === null || style === void 0 ? void 0 : style.jsonFormsControlsContainer) || {});
    /*
    if(false){
        if(validation.errors.length!=0){
            return(
                <View>
                    <ErrorList errors={validation.errors}/>
                </View>
            );
        }else{
            return(
                <View>
                    <ErrorItem message={"The form data is empty"}/>
                </View>
            );
        }
    }
    */
    const START_STATE = {
        schema: schema,
        uischema: uischema,
        i18nData: i18nData,
        language: language,
        formData: data,
        setFormData: setData,
        showError: show,
        setShowError: setShow,
        debugon: debugon
    };
    let elements = elementList(schema, uischema, i18nData, language, onChange, readOnly, style, formData, debugon);
    return (createElement(ObjectProvider, { objectState: START_STATE },
        createElement(View, { style: stylesJsonFormsControlsContainer.viewControl },
            createElement(ScrollView, null, elements.map((element) => (createElement(View, { style: stylesJsonFormsControlContainer }, element)))))));
};
const elementList = (schema, uischema, i18nData, language, onChange, readOnly, style, formData, debugon) => {
    var _a;
    let properties = (_a = schema.properties) !== null && _a !== void 0 ? _a : undefined;
    let elements = [];
    if (properties) {
        for (let property in properties) {
            let allProps = properties[property];
            let control = getControlType(allProps, uischema, property);
            let props = getControlProps(schema, uischema, property);
            props.data = formData[property];
            props.propertyName = property;
            props.onChange = onChange;
            props.style = style;
            props.debugon = debugon; //ockert
            props.enumLabels = {}; //ockert
            let translate = getObjectTranslate(i18nData, language, property);
            if (translate) {
                props.label = translate.label;
                //Ockert - Mon Jan 20 08:10:07 SAST 2025 - beg
                if (control == ControlType.RadioControl ||
                    control == ControlType.CheckGroupControl) {
                    if (props.enum)
                        props.enum.forEach((v, i) => {
                            if (props.enum &&
                                props.enum[i] &&
                                translate[props.enum[i]] &&
                                props.enumLabels) {
                                props.enumLabels[props.enum[i]] = translate[props.enum[i]];
                                //props.enum[i]=translate[props.enum[i]];
                            }
                        });
                }
                //Ockert - Mon Jan 20 08:10:07 SAST 2025 - end
                props.description = translate.description;
            }
            if (readOnly) {
                props.label = (props.label || "No label").toString();
                let defaultValue = props.data || "---";
                if (defaultValue !== undefined) {
                    if (control == ControlType.CheckGroupControl) {
                        let tmp = [...defaultValue];
                        defaultValue = tmp.toString();
                    }
                    if (control == ControlType.CheckBoxControl) {
                        defaultValue = props.data ? "Yes" : "No";
                    }
                    else {
                        defaultValue = defaultValue.toString();
                    }
                }
                else {
                    defaultValue = "---";
                }
                props.data = defaultValue;
                elements.push(createElement(ReadOnlyControl, { props: props }));
            }
            else {
                switch (control) {
                    case ControlType.TextControl:
                        elements.push(createElement(TextControl, { props: props }));
                        break;
                    case ControlType.TextAreaControl:
                        elements.push(createElement(TextAreaControl, { props: props }));
                        break;
                    case ControlType.NumberControl:
                        elements.push(createElement(NumberControl, { props: props }));
                        break;
                    case ControlType.IntegerControl:
                        elements.push(createElement(IntegerControl, { props: props }));
                        break;
                    case ControlType.CheckBoxControl:
                        elements.push(createElement(CheckBoxControl, { props: props }));
                        break;
                    case ControlType.CheckGroupControl:
                        elements.push(createElement(CheckGroupControl, { props: props }));
                        break;
                    case ControlType.RadioControl:
                        elements.push(createElement(RadioControl, { props: props }));
                        break;
                    case ControlType.PasswordControl:
                        elements.push(createElement(PasswordControl, { props: props }));
                        break;
                    default:
                        let aux = property + ",Type:" + allProps.type + ", Ctrl:" + ControlType[control];
                        elements.push(createElement(UnknownControl, { label: aux }));
                        break;
                }
            }
        }
    }
    else {
        elements.push(createElement(View, null,
            createElement(ErrorItem, { message: "No properties" })));
    }
    return (elements);
};
function getObjectTranslate(i18nData, language, propertyName) {
    if (language !== "") {
        let arr = i18nData[language];
        return (arr[propertyName]);
    }
    return (undefined);
}

class JsonForms extends Component {
    constructor(props) {
        super(props);
        this.lognode = "JsonForms.tsx";
        this.log("constructor:beg");
        this.shouldUpdate = true;
        this.data = {};
        this.onChange = this.onChange.bind(this);
        this.state = {
            schema: "{}",
            uischema: "{}",
            //initData:"{}",
            i18nData: "{}",
            styleData: "{}",
            language: "",
            formData: "{}",
            readOnly: false,
            errorSchema: undefined,
            errorUiSchema: undefined,
            //errorInitData:undefined,
            errorI18nData: undefined,
            errorStyleData: undefined
        };
        this.log("constructor:end");
    }
    render() {
        var _a;
        this.log("render:beg");
        let ret;
        if (this.state.errorSchema ||
            this.state.errorUiSchema ||
            //this.state.errorInitData||
            this.state.errorI18nData ||
            this.state.errorStyleData) {
            try {
                ret = (createElement(View, null,
                    (this.state.errorSchema)
                        ? createElement(ErrorItem, { message: "Error in Schema:" + this.state.errorSchema })
                        : "",
                    (this.state.errorUiSchema)
                        ? createElement(ErrorItem, { message: "Error in UISchema:" + this.state.errorUiSchema })
                        : "",
                    (this.state.errorI18nData)
                        ? createElement(ErrorItem, { message: "Error in I18n Data:" + this.state.errorI18nData })
                        : "",
                    (this.state.errorStyleData)
                        ? createElement(ErrorItem, { message: "Error in Style Data:" + this.state.errorStyleData })
                        : ""));
            }
            catch (e) {
                console.error(e.toString());
            }
        }
        else {
            ret = (createElement(View, null,
                createElement(Form, { schema: JSON.parse(this.state.schema), uischema: JSON.parse(this.state.uischema), i18nData: JSON.parse(this.state.i18nData), formData: JSON.parse(this.state.formData), style: (() => {
                        try {
                            return (this.props.mxStyleData.value ? JSON.parse(this.props.mxStyleData.value) : {});
                        }
                        catch (e) {
                            console.error(e.toString());
                            return ({});
                        }
                    })(), language: this.state.language, readOnly: this.state.readOnly, onChange: this.onChange, debugon: (_a = this.props.debugon) !== null && _a !== void 0 ? _a : false })));
        }
        this.log("render:end");
        return (ret);
    }
    componentDidMount() {
        var _a;
        this.log("componentDidMount:beg");
        const { mxSchema, mxUiSchema, /*mxInitData,*/ mxI18nData, mxStyleData, mxFormData, mxLanguage, mxReadOnly } = this.props;
        let inputSchema = mxSchema.value ? mxSchema.value.toString() : "{}";
        let inputUISchema = mxUiSchema.value ? mxUiSchema.value.toString() : "{}";
        let inputI18nData = mxI18nData.value ? mxI18nData.value.toString() : "{}";
        let inputStyleData = mxStyleData.value ? mxStyleData.value.toString() : "{}";
        inputStyleData = inputStyleData.length == 0 ? "{}" : inputStyleData;
        let inputFormData = mxFormData.value ? mxFormData.value.toString() : "{}"; //ockert
        let inputLanguage = mxLanguage.value ? mxLanguage.value.toString() : "";
        let inputReadOnly = (_a = mxReadOnly.value) !== null && _a !== void 0 ? _a : false;
        let eSchema = isValidJSON(inputSchema);
        let eUiSchema = isValidJSON(inputUISchema);
        let eI18nData = isValidJSON(inputI18nData);
        let eStyleData = isValidJSON(inputStyleData);
        let eFormData = isValidJSON(inputFormData);
        if (eSchema) {
            console.debug(eSchema);
            inputSchema = "{}";
        }
        if (eUiSchema) {
            console.debug(eUiSchema);
            inputUISchema = "{}";
        }
        /*
        if(eInitData){
            console.debug(eInitData);
            inputUISchema="{}";
        }
        */
        if (eI18nData) {
            console.debug(eI18nData);
            inputI18nData = "{}";
        }
        if (eStyleData) {
            console.debug(eStyleData);
            inputStyleData = "{}";
        }
        if (eFormData) {
            console.debug(eFormData);
            inputFormData = "{}";
        }
        this.setState({
            schema: inputSchema,
            uischema: inputUISchema,
            //initData:inputInitData,
            i18nData: inputI18nData,
            styleData: inputStyleData,
            formData: inputFormData,
            language: inputLanguage,
            readOnly: inputReadOnly,
            errorSchema: eSchema,
            errorUiSchema: eUiSchema,
            //errorInitData:eInitData,
            errorI18nData: eI18nData,
            errorStyleData: eStyleData
        });
        this.log("componentDidMount:end");
    }
    componentDidUpdate(prevProps) {
        var _a, _b, _c, _d, _e, _f;
        this.log("componentDidUpdate:beg");
        const { mxSchema, mxUiSchema, /*mxInitData,*/ mxI18nData, mxStyleData, mxFormData, mxLanguage, mxReadOnly } = this.props;
        if (mxSchema.value !== prevProps.mxSchema.value ||
            mxUiSchema.value !== prevProps.mxUiSchema.value ||
            mxI18nData.value !== prevProps.mxI18nData.value ||
            mxStyleData.value !== prevProps.mxStyleData.value ||
            mxFormData.value !== prevProps.mxFormData.value ||
            mxLanguage.value !== prevProps.mxLanguage.value ||
            mxReadOnly.value !== prevProps.mxReadOnly.value) {
            let inputSchema = ((_a = mxSchema.value) === null || _a === void 0 ? void 0 : _a.toString()) || "{}";
            let inputUISchema = ((_b = mxUiSchema.value) === null || _b === void 0 ? void 0 : _b.toString()) || "{}";
            let inputI18nData = ((_c = mxI18nData.value) === null || _c === void 0 ? void 0 : _c.toString()) || "{}";
            let inputStyleData = ((_d = mxStyleData.value) === null || _d === void 0 ? void 0 : _d.toString()) || "{}";
            let inputFormData = ((_e = mxFormData.value) === null || _e === void 0 ? void 0 : _e.toString()) || "{}";
            let inputLanguage = ((_f = mxLanguage.value) === null || _f === void 0 ? void 0 : _f.toString()) || "";
            let inputReadOnly = mxReadOnly.value || false;
            let eSchema = isValidJSON(inputSchema);
            let eUiSchema = isValidJSON(inputUISchema);
            let eI18nData = isValidJSON(inputI18nData);
            let eStyleData = isValidJSON(inputStyleData);
            let eFormData = isValidJSON(inputFormData);
            if (eSchema) {
                console.debug(eSchema);
                inputSchema = "{}";
            }
            if (eUiSchema) {
                console.debug(eUiSchema);
                inputUISchema = "{}";
            }
            if (eI18nData) {
                console.debug(eI18nData);
                inputI18nData = "{}";
            }
            if (eStyleData) {
                console.debug(eStyleData);
                inputStyleData = "{}";
            }
            if (eFormData) {
                console.debug(eFormData);
                inputFormData = "{}";
            }
            this.setState({
                schema: inputSchema,
                uischema: inputUISchema,
                i18nData: inputI18nData,
                styleData: inputStyleData,
                formData: inputFormData,
                language: inputLanguage,
                readOnly: inputReadOnly,
                errorSchema: eSchema,
                errorUiSchema: eUiSchema,
                errorI18nData: eI18nData
            });
        }
        this.log("componentDidUpdate:end");
    }
    shouldComponentUpdate(_nextProps) {
        this.log("shouldComponentUpdate:beg");
        let ret = true;
        this.log("shouldComponentUpdate:end");
        return (ret);
    }
    onChange(data) {
        this.log("onChange:beg");
        let obj = JSON.parse(this.state.formData);
        Object.keys(data).forEach((k) => {
            //if(data[k]==null||data[k]=="")return;
            obj[k] = data[k];
        });
        let sobj = JSON.stringify(obj);
        if (sobj != this.props.mxFormData.value)
            this.props.mxFormData.setValue(sobj);
        this.log("onChange:end");
    }
    componentWillUnmount() {
        this.log("componentWillUnmount:beg");
        this.log("componentWillUnmount:end");
    }
    log(data) {
        var _a;
        if ((_a = this.props.debugon) !== null && _a !== void 0 ? _a : false)
            console.info(this.lognode + ":" + data);
    }
}
function isValidJSON(jsonString) {
    try {
        JSON.parse(jsonString);
        return undefined;
    }
    catch (e) {
        return e.message;
    }
}

export { JsonForms };
