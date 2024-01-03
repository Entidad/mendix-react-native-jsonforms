import { JsonSchema } from '../schema/JsonSchema'

export interface ObjectState {
    _schema: JsonSchema;
    _uischema:JsonSchema;
    _initData: JsonSchema;
    _name?:string;
}