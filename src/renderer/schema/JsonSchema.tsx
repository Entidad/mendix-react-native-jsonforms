/*
  The MIT License

  Copyright (c) 2016 Richard Adams
  https://github.com/enriched

  Modifications by EclipseSource Munich 2018
  https://github.com/eclipsesource/jsonforms

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

export interface JsonSchema {
  
  $ref?: string;              // This is important because it tells refs where the root of the document is located
  $id?: string;
  $schema?: string;               
  title?: string;             // Title
  description?: string;       // Description
  default?: any;              // Default json for the object represented by this schema

  // Number Validation
  multipleOf?: number;        // The value must be a multiple of the number (e.g. 10 is a multiple of 5)
  maximum?: number;           // If true maximum must be > value, >= otherwise
  exclusiveMaximum?: number;
  minimum?: number;           // If true minimum must be < value, <= otherwise
  exclusiveMinimum?: number;

  // String Validation
  maxLength?: number;
  minLength?: number;  
  pattern?: string;           // This is a regex string that the value must conform to

  // Array Validation
  items?: JsonSchema | JsonSchema[];
  additionalItems?: boolean | JsonSchema;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;

  // Object Validation
  maxProperties?: number;
  minProperties?: number;
  required?: string[];
  additionalProperties?: boolean | JsonSchema;    // Holds simple JSON Schema definitions for referencing from elsewhere.
  definitions?: { [key: string]: JsonSchema };    // The keys that can exist on the object with the json schema that should validate their value
  properties?: { [property: string]: JsonSchema };
  patternProperties?: { [pattern: string]: JsonSchema };   // The key of this object is a regex for which properties the schema applies to
  dependencies?: { [key: string]: JsonSchema | string[] };

  // Combining Schemas
  allOf?: JsonSchema[];
  anyOf?: JsonSchema[];
  oneOf?: JsonSchema[];

  // Common
  enum?: any[];               // Enumerates the values that this schema can be {"type": "string", "enum": ["red", "green", "blue"]}
  type?: string;              // can be: string, boolean, integer, number, object, array, null
  format?: string;            // can be: date, time, datetime
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: any[];
  contains?: JsonSchema;
  propertyNames?: JsonSchema;
  const?: any;
  if?: JsonSchema;
  then?: JsonSchema;
  else?: JsonSchema;
  errorMessage?: any;
}
