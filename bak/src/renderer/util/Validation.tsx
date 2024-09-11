import Ajv from 'ajv';
import { JsonSchema } from '../schemas/JsonSchema'
import addFormats from 'ajv-formats';
import type { Options, ErrorObject} from 'ajv';

/**
 * Returns the validation status of the JSON Schema and initial data.
 * @param {JsonSchema} schema JSON Schema .
 * @param {JsonSchema} initData Initial data for JSON Schema. 
 * @returns {validationStatus} A object which include the validation result and the errors list if exists.
 */
export const validateSchema = (schema: JsonSchema, initData?: JsonSchema): validationStatus => {
    const { ...val }: validationStatus = getValidation();    
    const ajv=createAjv();
    if(initData){
        const valid=ajv.validate(schema, initData);
        if(valid){           
            val.validation=true;
            return val;
        }        
        const errors=ajv.errors;
        if(errors){
            val.errors=errors;
            return val;
        }
    }
    return val;
}


/**
 * Interface created for return 'status validation' on validateSchema
 */
export interface validationStatus {
    validation: boolean;
    errors: ErrorObject<string, Record<string, any>, unknown>[];
}

/**
 * Initial values of 'status validation'
 */
const getValidation = () => {
    const val: validationStatus = {
      validation: false,
      errors:[]
    };
    return val;
};

/**
 * Create the AJV object for schema validation process
 */
export const createAjv = (options?: Options) => {
    const ajv = new Ajv({
      allErrors: true,
      verbose: true,
      strict: false,
      addUsedSchema: false,
      ...options,
    });
    addFormats(ajv);
    return ajv;
};

  



