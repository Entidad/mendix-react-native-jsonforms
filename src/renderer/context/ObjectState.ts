import { JsonSchema, JsonUISchema, JsonData } from '../schemas/JsonSchema'

export interface ObjectState {
    schema: JsonSchema;
    uischema:JsonUISchema;
    //initData: JsonData;
    i18nData: JsonData;
    language: string;
    formData: any;
    setFormData:any;
    showError:boolean;
    setShowError:any;
    debugon:boolean;//ockert
}
