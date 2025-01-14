import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { StyleProperty } from "mendix/StyleProperty";

import { Button } from "mendix/Button";
import { addEnumerations, asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/Ockert/src/entidad/mendix-react-native-jsonforms/tests/testProject/deployment/native/layouts/Atlas_Core.NativePhone_Default.js";

import * as styles from "../styles.js";

const { $Button } = asPluginWidgets({ Button });

const placeholder$Main = () => [
    <$Button key="p0.MyFirstModule.Home_Native.actionButton1"
        $widgetId="p0.MyFirstModule.Home_Native.actionButton1"
        style={StyleProperty({
            "styles": [ styles.ActionButton ]
        })}
        caption={t([
            ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Survey" }, "args": {} }
            })
        ])}
        icon={undefined}
        onClick={ActionProperty({
            "action": { "type": "openPage", "argMap": {}, "config": { "name": "MyFirstModule.Survey", "location": "content" }, "disabledDuringExecution": true }
        })}
        accessible={false} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Home Native"
]);

export const $$style = [ styles.Layout, styles.Page ];

export const $$parameters = [];
export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

