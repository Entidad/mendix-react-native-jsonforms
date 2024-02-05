/**
 * This file was generated from JsonformsNative.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface JsonformsNativeProps<Style> {
    name: string;
    style: Style[];
    mxSchema: EditableValue<string>;
    mxUiSchema: EditableValue<string>;
    mxInitData: EditableValue<string>;
    mxFormData: EditableValue<string>;
}

export interface JsonformsNativePreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    mxSchema: string;
    mxUiSchema: string;
    mxInitData: string;
    mxFormData: string;
    onChangeAction: {} | null;
}
