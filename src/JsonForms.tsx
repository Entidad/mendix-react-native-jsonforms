import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle, View } from "react-native";
import { Style } from "@mendix/pluggable-widgets-tools";
import { JsonformsNativeProps } from "../typings/JsonformsNativeProps";
import { Form } from "../src/renderer/Form";
import { ErrorItem } from "./renderer/util/Error";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

interface AppState {
    schema: string;
    uischema: string;
    initData: string;    
    i18nData: string;
    language: string;
    formData: string;
    readOnly:boolean;
    errorSchema:any;
    errorUiSchema:any;
    errorInitData:any;
    errorI18nData:any;
}

export class JsonformsNative extends Component<JsonformsNativeProps<CustomStyle>, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            schema: "{}",
            uischema: "{}",
            initData: "{}",
            i18nData: "{}",                        
            language: "",
            formData: "{}",
            readOnly:false,
            errorSchema:undefined,
            errorUiSchema:undefined,
            errorInitData:undefined,
            errorI18nData:undefined
        };
    }

    render(): ReactNode {
        if(this.state.errorSchema || this.state.errorUiSchema || this.state.errorInitData || this.state.errorI18nData){
            return (
                <View>
                    {(this.state.errorSchema)
                        ? <ErrorItem  message={"Error in Schema:"+this.state.errorSchema}/>
                        : ""
                    }
                    {(this.state.errorUiSchema)
                        ? <ErrorItem  message={"Error in UISchema:"+this.state.errorUiSchema}/>
                        : ""
                    }
                    {(this.state.errorInitData)
                        ? <ErrorItem  message={"Error in Init Data:"+this.state.errorInitData}/>
                        : ""
                    }
                    {(this.state.errorI18nData)
                        ? <ErrorItem  message={"Error in I18n Data:"+this.state.errorI18nData}/>
                        : ""
                    }
                </View>
            )
        }else{
            return (
                    <View>
                        <Form
                            schema={JSON.parse(this.state.schema)}
                            uischema={JSON.parse(this.state.uischema)}
                            initData={JSON.parse(this.state.initData)}
                            i18nData={JSON.parse(this.state.i18nData)}
                            language={this.state.language}
                            formData={JSON.parse(this.state.formData)}
                            readOnly={this.state.readOnly}
                            onChange={(data:any) => {
                                console.debug("Open");
                                console.debug(data);
                                const jsonString: string = JSON.stringify(data); 
                                console.debug(jsonString);
                                console.debug("Close");
                                this.props.mxFormData.setValue(jsonString);
                            }}
                        />                 
                    </View>
                    );
        }
    }

    componentDidMount(): void {
        const {  mxSchema, mxUiSchema, mxInitData, mxI18nData, mxLanguage, mxReadOnly } = this.props;

        let inputSchema = mxSchema.value ? mxSchema.value.toString() : '{}';
        let inputUISchema = mxUiSchema.value ? mxUiSchema.value.toString() : "{}";
        let inputInitData = mxInitData.value ? mxInitData.value.toString() : "{}";
        let inputI18nData = mxI18nData.value ? mxI18nData.value.toString() : "{}";
        let inputLanguage = mxLanguage.value ? mxLanguage.value.toString() : "";
        let inputReadOnly = mxReadOnly.value ?? false;

        let eSchema=isValidJSON(inputSchema);
        let eUiSchema=isValidJSON(inputUISchema);
        let eInitData=isValidJSON(inputInitData);
        let eI18nData=isValidJSON(inputI18nData);

        if (eSchema) {
            console.debug(eSchema);
            inputSchema = '{}';
        }        
        if (eUiSchema) {
            console.debug(eUiSchema);
            inputUISchema = "{}";
        }
        if (eInitData) {
            console.debug(eInitData);
            inputUISchema = "{}";
        }
        if (eI18nData) {
            console.debug(eI18nData);
            inputI18nData = "{}";
        }
        this.setState({
            schema: inputSchema,
            uischema: inputUISchema,
            initData: inputInitData,
            i18nData: inputI18nData,
            language: inputLanguage,
            readOnly: inputReadOnly,
            errorSchema:eSchema,
            errorUiSchema:eUiSchema,
            errorInitData:eInitData,
            errorI18nData:eI18nData
        });
    }

    componentDidUpdate(prevProps: Readonly<JsonformsNativeProps<CustomStyle>>): void {
        const { mxSchema, mxUiSchema, mxInitData, mxI18nData, mxLanguage, mxReadOnly } = this.props;
        if (
            mxSchema.value !== prevProps.mxSchema.value ||
            mxUiSchema.value !== prevProps.mxUiSchema.value ||
            mxInitData.value !== prevProps.mxInitData.value || 
            mxI18nData.value !== prevProps.mxI18nData.value ||
            mxLanguage.value !== prevProps.mxLanguage.value ||
            mxReadOnly.value !== prevProps.mxReadOnly.value
        ) {
            let inputSchema = mxSchema.value?.toString() || '{}';
            let inputUISchema = mxUiSchema!.value?.toString() || "{}";
            let inputInitData = mxInitData!.value?.toString() || "{}";
            let inputI18nData = mxI18nData!.value?.toString() || "{}";
            let inputLanguage = mxLanguage!.value?.toString() || "";
            let inputReadOnly = mxReadOnly!.value || false;

            let eSchema=isValidJSON(inputSchema);
            let eUiSchema=isValidJSON(inputUISchema);
            let eInitData=isValidJSON(inputInitData);
            let eI18nData=isValidJSON(inputI18nData);

            if(eSchema){
                console.debug(eSchema);
                inputSchema = '{}';
            }
            if(eUiSchema){
                console.debug(eUiSchema);
                inputUISchema = '{}';
            }
            if(eInitData){
                console.debug(eInitData);
                inputInitData = '{}';
            }
            if(eI18nData){
                console.debug(eI18nData);
                inputI18nData = '{}';
            }
            this.setState({
                schema: inputSchema,
                uischema: inputUISchema,
                initData: inputInitData,
                i18nData: inputI18nData,
                language: inputLanguage,
                readOnly: inputReadOnly,
                errorSchema:eSchema,
                errorUiSchema:eUiSchema,
                errorInitData:eInitData,
                errorI18nData:eI18nData
            });
        }
    }

}

function isValidJSON(jsonString: string) {
    try {
        JSON.parse(jsonString);
        return undefined;
    } catch (e) {
        return e.message;
    }
}