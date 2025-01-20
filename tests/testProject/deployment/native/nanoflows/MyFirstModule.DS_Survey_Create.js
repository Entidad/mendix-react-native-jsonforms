import { addEnumerations, t } from "mendix/native";

export const DS_Survey_Create = {
  "name": "MyFirstModule.DS_Survey_Create",
  "instructions": [
    {
      "type": "setVariable",
      "label": "688741b0-222c-478f-b0f5-b602fe0261b4",
      "value": {
        "type": "literal",
        "value": "{}"
      },
      "outputVar": "style",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "0b56c6c5-26a2-41db-b918-b474e14a500c",
      "value": {
        "type": "literal",
        "value": "{            \"title\": \"Survey reporting 0116 3\",\n            \"description\": \"Survey reporting 0116 description - Copy - Copy\",\n            \"type\": \"object\",\n            \"properties\": {\n                \"qstTextNumber_d488567e-8475-41d4-abd1-611e1e3a2e7a\": {\n                    \"title\": \"Text Number 0113\",\n                    \"type\": \"number\"\n                },\n                \"qstTextArea_37dbed63-ee8d-4f7c-9533-7ff1cecde2da\": {\n                    \"title\": \"Text Area 0113\",\n                    \"type\": \"string\"\n                },\n                \"qstCheckbox_f9ea6b91-923d-4895-90dc-68ea6a4bbba7\": {\n                    \"title\": \"Checkbox 0115\",\n                    \"type\": \"array\",\n                    \"uniqueItems\": true,\n                    \"items\": {\n                        \"type\": \"string\",\n                        \"enum\": [\n                            \"Yes\"\n                        ]\n                    }\n                },\n                \"qstDate_220a7c00-98a4-4d5d-86cb-6a85c3f2b5bf\": {\n                    \"title\": \"Date 0113\",\n                    \"type\": \"string\"\n                },\n                \"qstMultiSelect_635a119d-d23b-4be1-ac66-86fb6993df97\": {\n                    \"title\": \"Multiselect 0116 3\",\n                    \"type\": \"array\",\n                    \"uniqueItems\": true,\n                    \"items\": {\n                        \"type\": \"string\",\n                        \"enum\": [\n                            \"Option 1\",\n                            \"Option 2\",\n                            \"Option 3\",\n                            \"Option 4\"\n                        ]\n                    }\n                },\n                \"qstRadiobutton_d7ccb93c-9480-4dce-91c3-ffbd95615cb2\": {\n                    \"title\": \"Radio button 0113\",\n                    \"type\": \"string\",\n                    \"enum\": [\n                        \"Option 1\",\n                        \"Option 2\",\n                        \"Option 3\"\n                    ]\n                },\n                \"qstRange_f331a5bb-1c14-4dbc-8bbd-dd1fc46e824d\": {\n                    \"title\": \"Range 0113\",\n                    \"type\": \"integer\"\n                },\n                \"qstText_d5efdb12-6e07-4ac3-a1f7-ee20705fd648\": {\n                    \"title\": \"Text 0113\",\n                    \"type\": \"string\"\n                }\n            }\n}"
      },
      "outputVar": "schema",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "87ade843-09d2-4d08-b941-968b5873d21e",
      "value": {
        "type": "literal",
        "value": "{            \"type\": \"VerticalLayout\",\n            \"elements\": [\n                {\n                    \"type\": \"Control\",\n                    \"scope\": \"#/properties/qstTextNumber_d488567e-8475-41d4-abd1-611e1e3a2e7a\"\n                },\n                {\n                    \"type\": \"Control\",\n                    \"scope\": \"#/properties/qstTextArea_37dbed63-ee8d-4f7c-9533-7ff1cecde2da\",\n                    \"options\": {\n                        \"showSortButtons\": false,\n                        \"readonly\": false,\n                        \"multi\": true\n                    }\n                },\n                {\n                    \"type\": \"Control\",\n                    \"scope\": \"#/properties/qstCheckbox_f9ea6b91-923d-4895-90dc-68ea6a4bbba7\"\n                },\n                {\n                    \"type\": \"Control\",\n                    \"scope\": \"#/properties/qstDate_220a7c00-98a4-4d5d-86cb-6a85c3f2b5bf\"\n                },\n                {\n                    \"type\": \"Control\",\n                    \"scope\": \"#/properties/qstMultiSelect_635a119d-d23b-4be1-ac66-86fb6993df97\"\n                },\n                {\n                    \"type\": \"Control\",\n                    \"scope\": \"#/properties/qstRadiobutton_d7ccb93c-9480-4dce-91c3-ffbd95615cb2\",\n                    \"options\": {\n                        \"showSortButtons\": false,\n                        \"format\": \"radio\",\n                        \"readonly\": false,\n                        \"multi\": false\n                    }\n                },\n                {\n                    \"type\": \"Control\",\n                    \"scope\": \"#/properties/qstRange_f331a5bb-1c14-4dbc-8bbd-dd1fc46e824d\"\n                },\n                {\n                    \"type\": \"Control\",\n                    \"scope\": \"#/properties/qstText_d5efdb12-6e07-4ac3-a1f7-ee20705fd648\"\n                }\n            ]\n}"
      },
      "outputVar": "ui",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "de8ed0ae-5520-4e82-9e90-881731b1e24f",
      "value": {
        "type": "literal",
        "value": "{            \"English\": {\n                \"title\": \"Survey reporting 0116 3\",\n                \"description\": \"Survey reporting 0116 description - Copy - Copy\",\n                \"qstTextNumber_d488567e-8475-41d4-abd1-611e1e3a2e7a\": {\n                    \"label\": \"Text Number 0113\"\n                },\n                \"qstTextArea_37dbed63-ee8d-4f7c-9533-7ff1cecde2da\": {\n                    \"label\": \"Text Area 0113\"\n                },\n                \"qstCheckbox_f9ea6b91-923d-4895-90dc-68ea6a4bbba7\": {\n                    \"label\": \"Checkbox 0115\"\n                },\n                \"qstDate_220a7c00-98a4-4d5d-86cb-6a85c3f2b5bf\": {\n                    \"label\": \"Date 0113\"\n                },\n                \"qstMultiSelect_635a119d-d23b-4be1-ac66-86fb6993df97\": {\n                    \"label\": \"Multiselect 0116 3\"\n                },\n                \"qstRadiobutton_d7ccb93c-9480-4dce-91c3-ffbd95615cb2\": {\n                    \"label\": \"Radio button 0113\"\n                },\n                \"qstRange_f331a5bb-1c14-4dbc-8bbd-dd1fc46e824d\": {\n                    \"label\": \"Range 0113\"\n                },\n                \"qstText_d5efdb12-6e07-4ac3-a1f7-ee20705fd648\": {\n                    \"label\": \"Text 0113\"\n                }\n            },\n            \"Spanish\": {\n                \"title\": \"Informe de encuesta 0116 3\",\n                \"description\": \"Descripción del informe de encuesta 0116\",\n                \"qstTextNumber_d488567e-8475-41d4-abd1-611e1e3a2e7a\": {\n                    \"label\": \"Texto número 0113\"\n                },\n                \"qstTextArea_37dbed63-ee8d-4f7c-9533-7ff1cecde2da\": {\n                    \"label\": \"Área de texto 0113\"\n                },\n                \"qstCheckbox_f9ea6b91-923d-4895-90dc-68ea6a4bbba7\": {\n                    \"label\": \"Casilla de verificación 0115\",\n                    \"Yes\": \"Sí\"\n                },\n                \"qstDate_220a7c00-98a4-4d5d-86cb-6a85c3f2b5bf\": {\n                    \"label\": \"Fecha 0113\"\n                },\n                \"qstMultiSelect_635a119d-d23b-4be1-ac66-86fb6993df97\": {\n                    \"label\": \"Selección múltiple 0116 3\",\n                    \"Option 1\": \"Opción 1\",\n                    \"Option 2\": \"Opción 2\",\n                    \"Option 3\": \"Opción 3\",\n                    \"Option 4\": \"Opción 4\"\n                },\n                \"qstRadiobutton_d7ccb93c-9480-4dce-91c3-ffbd95615cb2\": {\n                    \"label\": \"Botón de radio 0113\",\n                    \"Option 1\": \"Opción 1\",\n                    \"Option 2\": \"Opción 2\",\n                    \"Option 3\": \"Opción 3\"\n                },\n                \"qstRange_f331a5bb-1c14-4dbc-8bbd-dd1fc46e824d\": {\n                    \"label\": \"Rango 0113\"\n                },\n                \"qstText_d5efdb12-6e07-4ac3-a1f7-ee20705fd648\": {\n                    \"label\": \"Texto 0113\"\n                }\n            }}"
      },
      "outputVar": "i18n",
      "outputKind": "primitive"
    },
    {
      "type": "createObject",
      "label": "2b7d2fb1-831e-41fc-a70f-d9ddde4d9f09",
      "operationId": "pe8hboi4Q0yzytfLYvct3g",
      "objectType": "MyFirstModule.Survey",
      "outputVar": "NewSurvey"
    },
    {
      "type": "changeObject",
      "inputVar": "NewSurvey",
      "member": "id_",
      "value": {
        "type": "literal",
        "value": "3952f169-8ba0-4cb4-4ba9-87d74899369e"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewSurvey",
      "member": "readonly",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewSurvey",
      "member": "survey_schema",
      "value": {
        "type": "variable",
        "variable": "schema"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewSurvey",
      "member": "ui_schema",
      "value": {
        "type": "variable",
        "variable": "ui"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewSurvey",
      "member": "i18n_data",
      "value": {
        "type": "variable",
        "variable": "i18n"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewSurvey",
      "member": "jsonStyle",
      "value": {
        "type": "variable",
        "variable": "style"
      }
    },
    {
      "type": "changeObject",
      "inputVar": "NewSurvey",
      "member": "language",
      "value": {
        "type": "literal",
        "value": "Spanish"
      }
    },
    {
      "type": "return",
      "label": "4ceb6712-0068-4f8f-bc76-1c9908a7f357",
      "result": {
        "type": "variable",
        "variable": "NewSurvey"
      },
      "resultKind": "object"
    }
  ]
};
