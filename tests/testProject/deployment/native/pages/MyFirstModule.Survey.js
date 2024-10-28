import { createElement } from "react";
const React = { createElement };

import { AttributeProperty } from "mendix/AttributeProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { NanoflowObjectProperty } from "mendix/NanoflowObjectProperty";
import { StyleProperty } from "mendix/StyleProperty";

import { DataView } from "mendix/DataView";
import { io_entidad_widget_native_jsonforms_JsonForms } from "externalWidgets";
import { addEnumerations, asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/ockert/src/entidad/mendix-react-native-jsonforms/tests/testProject/deployment/native/layouts/Atlas_Core.NativePhone_Default.js";

import * as styles from "../styles.js";

const { $DataView, $io_entidad_widget_native_jsonforms_JsonForms } = asPluginWidgets({ DataView, io_entidad_widget_native_jsonforms_JsonForms });

const placeholder$Main = () => [
    <$DataView key="p0.MyFirstModule.Survey.dataView1"
        $widgetId="p0.MyFirstModule.Survey.dataView1"
        style={StyleProperty({
            "styles": [ styles.DataView ]
        })}
        object={NanoflowObjectProperty({
            "dataSourceId": "p0.2",
            "editable": true,
            "source": { "nanoflow": () => require("C:/Users/ockert/src/entidad/mendix-react-native-jsonforms/tests/testProject/deployment/native/nanoflows/MyFirstModule.DS_Survey_Create").DS_Survey_Create },
            "argMap": {}
        })}
        content={[
            <$io_entidad_widget_native_jsonforms_JsonForms key="p0.MyFirstModule.Survey.jsonFormsNative1"
                $widgetId="p0.MyFirstModule.Survey.jsonFormsNative1"
                mxSchema={AttributeProperty({
                    "scope": "p0.MyFirstModule.Survey.dataView1",
                    "path": "",
                    "entity": "MyFirstModule.Survey",
                    "attribute": "survey_schema",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                })}
                mxUiSchema={AttributeProperty({
                    "scope": "p0.MyFirstModule.Survey.dataView1",
                    "path": "",
                    "entity": "MyFirstModule.Survey",
                    "attribute": "ui_schema",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                })}
                mxFormData={AttributeProperty({
                    "scope": "p0.MyFirstModule.Survey.dataView1",
                    "path": "",
                    "entity": "MyFirstModule.Survey",
                    "attribute": "init_data",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                })}
                mxI18nData={AttributeProperty({
                    "scope": "p0.MyFirstModule.Survey.dataView1",
                    "path": "",
                    "entity": "MyFirstModule.Survey",
                    "attribute": "i18n_data",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                })}
                mxLanguage={AttributeProperty({
                    "scope": "p0.MyFirstModule.Survey.dataView1",
                    "path": "",
                    "entity": "MyFirstModule.Survey",
                    "attribute": "language",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                })}
                mxReadOnly={AttributeProperty({
                    "scope": "p0.MyFirstModule.Survey.dataView1",
                    "path": "",
                    "entity": "MyFirstModule.Survey",
                    "attribute": "readonly",
                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                })}
                mxStyleData={ExpressionProperty({
                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "jsonStyle" }, "args": { "currentObject": "p0.MyFirstModule.Survey.dataView1" } }
                })}
                debugon={true}
                style={StyleProperty({
                    "styles": [ styles.io_entidad_widget_native_jsonforms_JsonForms ]
                })} />
        ]} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Home Native"
]);

export const $$style = [ styles.Layout, styles.Page ];

export const $$parameters = [];
export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

