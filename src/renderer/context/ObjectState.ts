import { JsonSchema, JsonUISchema, JsonData } from '../schemas/JsonSchema'

export interface ObjectState {
    schema: JsonSchema;
    uischema:JsonUISchema;
    initData: JsonData;
    formData: any;
    setFormData:any;
    showError:boolean;
    setShowError:any;
}