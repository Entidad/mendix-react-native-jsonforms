import { createElement } from "react";
const React = { createElement };

import { StyleProperty } from "mendix/StyleProperty";

import { Placeholder } from "mendix/Placeholder";
import { ScrollContainer } from "mendix/ScrollContainer";
import { addEnumerations, asPluginWidgets, t } from "mendix/native";

import * as styles from "../styles.js";

const { $ScrollContainer, $Placeholder } = asPluginWidgets({ ScrollContainer, Placeholder });

export const mainContent = (placeholder$Main) => [
    <$ScrollContainer key="l0.Atlas_Core.NativePhone_Default.scrollContainer1"
        $widgetId="l0.Atlas_Core.NativePhone_Default.scrollContainer1"
        style={StyleProperty({
            "styles": [ styles.ScrollContainer ]
        })}
        content={[
            <$Placeholder key="l0.Atlas_Core.NativePhone_Default.Main"
                $widgetId="l0.Atlas_Core.NativePhone_Default.Main"
                content={placeholder$Main()} />
        ]}
        hideScrollbars={false} />
];

export const sidebar = () => null;

