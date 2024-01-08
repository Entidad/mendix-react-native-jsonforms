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
    
  type?: string;              // can be: string, boolean, integer, number, object, array, null  
  title?: string;             // Title or label
  label?: string;             // Title or label
  description?: string;       // Description
  format?: string;            // can be: date, time, datetime  
  default?: any;              // Default json for the object represented by this schema  
  required?: string[];        // Required fields
  enum?: any[];               // Enumerates the values that this schema can be {"type": "string", "enum": ["red", "green", "blue"]}
  readOnly?: boolean;
  properties?: { [property: string]: JsonSchema };

  // Number Validation
  maximum?: number;           // If true maximum must be > value, >= otherwise
  minimum?: number;           // If true minimum must be < value, <= otherwise
 
  // String Validation
  maxLength?: number;
  minLength?: number;  
  pattern?: string;           // This is a regex string that the value must conform to

  // Combining Schemas
  allOf?: JsonSchema[];
  anyOf?: JsonSchema[];
  oneOf?: JsonSchema[];
  
}

//Support for work with UI Schema from JsonForms
export interface JsonUISchema{
  type:string;                       // Type of UISchema
  elements: UISchemaElement[];       // Schema elements  
}

export interface UISchemaElement {
  type?: string;                      // The type of this UI schema element.
  label?: string;                     // Label for UI schema element.
  scope?: string;                     // The scope that determines to which part this element should be bound to.
  options?: { [key: string]: any };   // Any additional options.
}

export interface UISchemaElementOption{
  multi?: boolean;                      // For define a text area control
  slider: boolean;                      // For define a numeric slider control
  restrict: boolean;                    // For enable maxLenght in text control    
  toggle: boolean;                      // For enable toogle control
  format: string;                       // radio (used for radioBUtton), time, date

  //format:time
  timeFormat?:string;                 // The time format used for the text input, can be different from the save format: HH
  timeSaveFormat?:string;             // The format in which the time is saved in the data. Note that if you specify a format which is incompatible with JSON Schema's "time" format then you should use the UI Schema based invocation, otherwise the control will be marked with an error. HH:mm
  ampm?:boolean;	                    // If set to true, the time picker modal is presented in 12-hour format, otherwise the 24-hour format is used
  
  //format:date
  dateFormat?:string;                 // The date format used for the text input, can be different from the save format: 
  dateSaveFormat?:string;             // The format in which the date is saved in the data. Note that if you specify a format which is incompatible with JSON Schema's "date" format then you should use the UI Schema based invocation, otherwise the control will be marked with an error.    
  views?:string[];                    // Array defining which views are displayed. Options: year, month, date
}

//Support for work with UI Schema from RJSF: React JSON Schema Forms
export interface RJSF_UISchema{  
  [property: string]: RJSF_Property;  
}

export interface RJSF_Property {
  "ui:widget": string;
  "ui:title"?: string;
  "ui:description"?: string;
  "ui:readonly"?:boolean;
  "ui:disabled"?:boolean;
  "ui:help"?: string;
  "ui:emptyValue"?: string;
  "ui:placeholder"?: string;  
  "ui:options"?: { [property: string]: string }
}

export interface RJSF_Order{  
  "ui:order": string[];  
}

//Support for work with Data 
export interface JsonData {
  [property: string]: any;
}