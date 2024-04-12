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
    formData: string;
    errorSchema:any;
    errorUiSchema:any;
    errorInitData:any;
}

export class JsonformsNative extends Component<JsonformsNativeProps<CustomStyle>, AppState> {
    constructor(props: any) {
        super(props);
        this.state = {
            schema: "{}",
            uischema: "{}",
            initData: "{}",
            formData: "{}",
            errorSchema:undefined,
            errorUiSchema:undefined,
            errorInitData:undefined
        };
    }

    render(): ReactNode {
        if(this.state.errorSchema || this.state.errorUiSchema || this.state.errorInitData){
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
                </View>
            )
        }else{
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
                            }}
                        />                 
                    </View>
                    );
        }
    }

    componentDidMount(): void {
        const {  mxSchema, mxUiSchema, mxInitData } = this.props;

        let inputSchema = mxSchema.value ? mxSchema.value.toString() : '{}';
        let inputUISchema = mxUiSchema.value ? mxUiSchema.value.toString() : "{}";
        let inputInitData = mxInitData.value ? mxInitData.value.toString() : "{}";

        let eSchema=isValidJSON(inputSchema);
        let eUiSchema=isValidJSON(inputUISchema);
        let eInitData=isValidJSON(inputInitData);

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
        this.setState({
            schema: inputSchema,
            uischema: inputUISchema,
            initData: inputInitData,
            errorSchema:eSchema,
            errorUiSchema:eUiSchema,
            errorInitData:eInitData
        });
    }

    componentDidUpdate(prevProps: Readonly<JsonformsNativeProps<CustomStyle>>): void {
        const { mxSchema, mxUiSchema, mxInitData } = this.props;
        if (
            mxSchema.value !== prevProps.mxSchema.value ||
            mxUiSchema.value !== prevProps.mxUiSchema.value ||
            mxInitData.value !== prevProps.mxInitData.value
        ) {
            let inputSchema = mxSchema.value?.toString() || '{}';
            let inputUISchema = mxUiSchema!.value?.toString() || "{}";
            let inputInitData = mxInitData!.value?.toString() || "{}";

            let eSchema=isValidJSON(inputSchema);
            let eUiSchema=isValidJSON(inputUISchema);
            let eInitData=isValidJSON(inputInitData);

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
            this.setState({
                schema: inputSchema,
                uischema: inputUISchema,
                initData: inputInitData,
                errorSchema:eSchema,
                errorUiSchema:eUiSchema,
                errorInitData:eInitData
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