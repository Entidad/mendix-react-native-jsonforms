import { JsonSchema, JsonUISchema, JsonData } from '../schemas/JsonSchema'

export interface ObjectState {
    _schema: JsonSchema;
    _uischema:JsonUISchema;
    _initData: JsonData;
    _formData:JsonData;
}