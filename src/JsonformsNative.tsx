import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle, View } from "react-native";
import { Style } from "@mendix/pluggable-widgets-tools";
import { JsonformsNativeProps } from "../typings/JsonformsNativeProps";
import { Form } from "../src/renderer/Form";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

interface AppState {
    schema: string;
    uischema: string;
    initData: string;
    formData: string;
    showwarning: boolean;
}

export class JsonformsNative extends Component<JsonformsNativeProps<CustomStyle>, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            schema: "{}",
            uischema: "{}",
            initData: "{}",
            formData: "{}",
            showwarning: false
        };
    }

    render(): ReactNode {
        return (
                <View>
                    <Form
                        schema={JSON.parse(this.state.schema)}
                        uischema={JSON.parse(this.state.uischema)}
                        initData={JSON.parse(this.state.initData)}
                        formData={JSON.parse(this.state.formData)}
                        onSubmit={(data:any) => {
                            const jsonString: string = JSON.stringify(data); 
                            this.props.mxFormData.setValue(jsonString);
                            console.log(jsonString);
                        }}
                    />                 
                </View>
                );
    }

    componentDidMount(): void {
        const {  mxSchema, mxUiSchema, mxInitData } = this.props;

        let inputSchema = mxSchema.value ? mxSchema.value.toString() : '{"description": "JSON schema received was empty!","type": "object"}';
        if (!isValidJSON(inputSchema)) {
            console.debug("JSONFormsNative:CDM: Invalid JSON Schema");
            inputSchema = '{"description": "JSON schema received was invalid!","type": "object"}';
        }

        let inputUISchema = mxUiSchema.value ? mxUiSchema.value.toString() : "{}";
        if (!isValidJSON(inputUISchema)) {
            console.debug("JSONFormsNative:CDM: The given UI Schema JSON is incorrect. Empty object is passed to prevent failures.");
            inputUISchema = "{}";
        }

        let inputInitData = mxInitData.value ? mxInitData.value.toString() : "{}";
        if (!isValidJSON(inputInitData)) {
            console.debug("JSONFormsNative:CDM: The given placeholder data JSON is incorrect. Empty object is passed to prevent failures.");
            inputInitData = "{}";
        }
        this.setState({
            schema: inputSchema,
            uischema: inputUISchema,
            initData: inputInitData,
            showwarning: false
        });
    }

    componentDidUpdate(prevProps: Readonly<JsonformsNativeProps<CustomStyle>>): void {
        const { mxSchema, mxUiSchema, mxInitData } = this.props;
        if (
            mxSchema.value !== prevProps.mxSchema.value ||
            mxUiSchema.value !== prevProps.mxUiSchema.value ||
            mxInitData.value !== prevProps.mxInitData.value
        ) {
            let inputSchema =
            mxSchema.value?.toString() || '{"description": "JSON schema received was empty!","type": "object"}';
            let inputUISchema = mxUiSchema!.value?.toString() || "{}";
            let inputInitData = mxInitData!.value?.toString() || "{}";

            if (!isValidJSON(inputSchema)) {
                console.debug("JSONFormsNative:CDU: Invalid JSON Schema");
                inputSchema = '{"description": "JSON schema received was invalid!","type": "object"}';
            }
            // --------------------------------------------------------------------
            if (!isValidJSON(inputUISchema)) {
                console.debug("JSONFormsNative:CDU: The given UI Schema JSON is incorrect. Empty object is passed to prevent failures.");
                inputUISchema = "{}";
            }
            // --------------------------------------------------------------------
            if (!isValidJSON(inputInitData)) {
                console.debug("JSONFormsNative:CDU: The given placeholder data JSON is incorrect. Empty object is passed to prevent failures.");
                inputInitData = "{}";
            }
            this.setState({
                schema: inputSchema,
                uischema: inputUISchema,
                initData: inputInitData,
                showwarning: false
            });
        }
    }

}

function isValidJSON(jsonString: string): boolean {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (e) {
        return false;
    }
}