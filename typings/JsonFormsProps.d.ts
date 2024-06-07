/**
 * This file was generated from JsonForms.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { EditableValue } from "mendix";

export interface JsonFormsProps<Style> {
    name: string;
    style: Style[];
    mxSchema: EditableValue<string>;
    mxUiSchema: EditableValue<string>;
    mxInitData: EditableValue<string>;
    mxFormData: EditableValue<string>;
    mxI18nData: EditableValue<string>;
    mxLanguage: EditableValue<string>;
    mxReadOnly: EditableValue<boolean>;
}

export interface JsonFormsPreviewProps {
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
    mxI18nData: string;
    mxLanguage: string;
    mxReadOnly: string;
    onChangeAction: {} | null;
}
