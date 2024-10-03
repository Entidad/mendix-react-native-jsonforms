import { addEnumerations, t } from "mendix/native";

export const DS_Survey_Create = {
  "name": "MyFirstModule.DS_Survey_Create",
  "instructions": [
    {
      "type": "setVariable",
      "label": "0b56c6c5-26a2-41db-b918-b474e14a500c",
      "value": {
        "type": "literal",
        "value": "{\n\t\"title\": \"\",\n\t\"description\": \"\",\n\t\"type\": \"object\",\n\t\"properties\": {\n\t\t\"qstText_b0eba288-53d4-4182-a64b-76ffae6ff70d\": {\n\t\t\t\"title\": \"What is your favorite food?\",\n\t\t\t\"type\": \"string\"\n\t\t},\n\t\t\"qstText Number_ec8bdc72-bdac-465b-ae0c-64a5c7298c2d\": {\n\t\t\t\"title\": \"How much taller is the Eiffel Tower during the summer?\",\n\t\t\t\"type\": \"number\"\n\t\t},\n\t\t\"qstRadio Button_d743bb35-ed9d-437b-a42a-a54cc8c8393a\": {\n\t\t\t\"title\": \"What is the only planet that spins clockwise?\",\n\t\t\t\"type\": \"string\",\n\t\t\t\"enum\": [\n\t\t\t\t\"Venus\",\n\t\t\t\t\"Pluto\",\n\t\t\t\t\"Earth\"\n\t\t\t]\n\t\t},\n\t\t\"qstText_14f41b5c-4d56-4818-931b-b7a421fe37df\": {\n\t\t\t\"title\": \"What is a solar equinox?\",\n\t\t\t\"type\": \"string\"\n\t\t},\n\t\t\"qstRange_57499324-d855-47c8-9f71-faaa7501a8f8\": {\n\t\t\t\"title\": \"What is the range of your car?\",\n\t\t\t\"type\": \"integer\"\n\t\t},\n\t\t\"qstDate_871b8385-60bc-469c-a17b-87bd2686b846\": {\n\t\t\t\"title\": \"Beste date?\",\n\t\t\t\"type\": \"string\"\n\t\t},\n\t\t\"qstEmail_9e6aea88-b85c-441c-b2b9-e408c7d81d13\": {\n\t\t\t\"title\": \"Email\",\n\t\t\t\"type\": \"string\"\n\t\t},\n\t\t\"qstURI_c9d216c7-0653-40b7-834e-232fa6a14a6f\": {\n\t\t\t\"title\": \"Homepage?\",\n\t\t\t\"type\": \"string\"\n\t\t},\n\t\t\"qstRadio Button_ff041e28-37e3-46bb-addc-b69a31813c79\": {\n\t\t\t\"title\": \"Yes or No\",\n\t\t\t\"type\": \"string\",\n\t\t\t\"enum\": [\n\t\t\t\t\"Yes\",\n\t\t\t\t\"No\"\n\t\t\t]\n\t\t},\n\t\t\"qstSingle Select_526eaf65-1b38-45e6-9510-d955e90e4531\": {\n\t\t\t\"title\": \"Single select\",\n\t\t\t\"type\": \"string\",\n\t\t\t\"enum\": [\n\t\t\t\t\"Pick me\",\n\t\t\t\t\"No pick me\",\n\t\t\t\t\"Both\"\n\t\t\t]\n\t\t},\n\t\t\"qstMulti Select_7e096ff3-f9b6-4b26-a7c6-91121f36a2a2\": {\n\t\t\t\"title\": \"Multi-select\",\n\t\t\t\"type\": \"array\",\n\t\t\t\"uniqueItems\": true,\n\t\t\t\"items\": {\n\t\t\t\t\"type\": \"string\",\n\t\t\t\t\"enum\": [\n\t\t\t\t\t\"Option1\",\n\t\t\t\t\t\"Option2\",\n\t\t\t\t\t\"Option3\"\n\t\t\t\t]\n\t\t\t}\n\t\t}\n\t}\n}"
      },
      "outputVar": "schema",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "87ade843-09d2-4d08-b941-968b5873d21e",
      "value": {
        "type": "literal",
        "value": "{\n\t\"type\": \"VerticalLayout\",\n\t\"elements\": [\n\t\t{\n\t\t\t\"type\": \"Control\",\n\t\t\t\"scope\": \"#/properties/qstText_b0eba288-53d4-4182-a64b-76ffae6ff70d\"\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Control\",\n\t\t\t\"scope\": \"#/properties/qstText Number_ec8bdc72-bdac-465b-ae0c-64a5c7298c2d\"\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Control\",\n\t\t\t\"scope\": \"#/properties/qstRadio Button_d743bb35-ed9d-437b-a42a-a54cc8c8393a\",\n\t\t\t\"options\": {\n\t\t\t\t\"format\": \"radio\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Control\",\n\t\t\t\"scope\": \"#/properties/qstText_14f41b5c-4d56-4818-931b-b7a421fe37df\"\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Control\",\n\t\t\t\"scope\": \"#/properties/qstRange_57499324-d855-47c8-9f71-faaa7501a8f8\"\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Control\",\n\t\t\t\"scope\": \"#/properties/qstDate_871b8385-60bc-469c-a17b-87bd2686b846\"\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Control\",\n\t\t\t\"scope\": \"#/properties/qstEmail_9e6aea88-b85c-441c-b2b9-e408c7d81d13\"\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Control\",\n\t\t\t\"scope\": \"#/properties/qstURI_c9d216c7-0653-40b7-834e-232fa6a14a6f\"\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Control\",\n\t\t\t\"scope\": \"#/properties/qstRadio Button_ff041e28-37e3-46bb-addc-b69a31813c79\",\n\t\t\t\"options\": {\n\t\t\t\t\"format\": \"radio\"\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Control\",\n\t\t\t\"scope\": \"#/properties/qstSingle Select_526eaf65-1b38-45e6-9510-d955e90e4531\"\n\t\t},\n\t\t{\n\t\t\t\"type\": \"Control\",\n\t\t\t\"scope\": \"#/properties/qstMulti Select_7e096ff3-f9b6-4b26-a7c6-91121f36a2a2\"\n\t\t}\n\t]\n}"
      },
      "outputVar": "ui",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "de8ed0ae-5520-4e82-9e90-881731b1e24f",
      "value": {
        "type": "literal",
        "value": "{\n\t\"English\": {\n\t\t\"title\": \"Life, the universe and everything\",\n\t\t\"description\": \"null\",\n\t\t\"qstText_b0eba288-53d4-4182-a64b-76ffae6ff70d\": {\n\t\t\t\"label\": \"What is your favorite food?\"\n\t\t},\n\t\t\"qstText Number_ec8bdc72-bdac-465b-ae0c-64a5c7298c2d\": {\n\t\t\t\"label\": \"How much taller is the Eiffel Tower during the summer?\"\n\t\t},\n\t\t\"qstRadio Button_d743bb35-ed9d-437b-a42a-a54cc8c8393a\": {\n\t\t\t\"label\": \"What is the only planet that spins clockwise?\"\n\t\t},\n\t\t\"qstText_14f41b5c-4d56-4818-931b-b7a421fe37df\": {\n\t\t\t\"label\": \"What is a solar equinox?\"\n\t\t},\n\t\t\"qstRange_57499324-d855-47c8-9f71-faaa7501a8f8\": {\n\t\t\t\"label\": \"What is the range of your car?\"\n\t\t},\n\t\t\"qstDate_871b8385-60bc-469c-a17b-87bd2686b846\": {\n\t\t\t\"label\": \"Beste date?\"\n\t\t},\n\t\t\"qstEmail_9e6aea88-b85c-441c-b2b9-e408c7d81d13\": {\n\t\t\t\"label\": \"Email\"\n\t\t},\n\t\t\"qstURI_c9d216c7-0653-40b7-834e-232fa6a14a6f\": {\n\t\t\t\"label\": \"Homepage?\"\n\t\t},\n\t\t\"qstRadio Button_ff041e28-37e3-46bb-addc-b69a31813c79\": {\n\t\t\t\"label\": \"Yes or No\"\n\t\t},\n\t\t\"qstSingle Select_526eaf65-1b38-45e6-9510-d955e90e4531\": {\n\t\t\t\"label\": \"Single select\"\n\t\t},\n\t\t\"qstMulti Select_7e096ff3-f9b6-4b26-a7c6-91121f36a2a2\": {\n\t\t\t\"label\": \"Multi-select\"\n\t\t}\n\t},\n\t\"Spanish\": {\n\t\t\"title\": \"La vida, el universo y todo\",\n\t\t\"description\": \"null\",\n\t\t\"qstText_b0eba288-53d4-4182-a64b-76ffae6ff70d\": {\n\t\t\t\"label\": \"¿Cuál es tu comida favorita?\"\n\t\t},\n\t\t\"qstText Number_ec8bdc72-bdac-465b-ae0c-64a5c7298c2d\": {\n\t\t\t\"label\": \"¿Cuánto más alta es la Torre Eiffel durante el verano?\"\n\t\t},\n\t\t\"qstRadio Button_d743bb35-ed9d-437b-a42a-a54cc8c8393a\": {\n\t\t\t\"label\": \"¿Cuál es el único planeta que gira en el sentido de las agujas del reloj?\",\n\t\t\t\"Venus\": \"Venus\",\n\t\t\t\"Pluto\": \"Pluton\",\n\t\t\t\"Earth\": \"Tierra\"\n\t\t},\n\t\t\"qstText_14f41b5c-4d56-4818-931b-b7a421fe37df\": {\n\t\t\t\"label\": \"¿Qué es un equinoccio solar?\"\n\t\t},\n\t\t\"qstRange_57499324-d855-47c8-9f71-faaa7501a8f8\": {\n\t\t\t\"label\": \"¿Cuál es la autonomía de tu coche?\"\n\t\t},\n\t\t\"qstDate_871b8385-60bc-469c-a17b-87bd2686b846\": {\n\t\t\t\"label\": \"Cita perfecta?\"\n\t\t},\n\t\t\"qstEmail_9e6aea88-b85c-441c-b2b9-e408c7d81d13\": {\n\t\t\t\"label\": \"Email\"\n\t\t},\n\t\t\"qstURI_c9d216c7-0653-40b7-834e-232fa6a14a6f\": {\n\t\t\t\"label\": \"¿Página principal?\"\n\t\t},\n\t\t\"qstRadio Button_ff041e28-37e3-46bb-addc-b69a31813c79\": {\n\t\t\t\"label\": \"¿Sí o no?\",\n\t\t\t\"Yes\": \"Sí\",\n\t\t\t\"No\": \"No\"\n\t\t},\n\t\t\"qstSingle Select_526eaf65-1b38-45e6-9510-d955e90e4531\": {\n\t\t\t\"label\": \"Selección única\"\n\t\t},\n\t\t\"qstMulti Select_7e096ff3-f9b6-4b26-a7c6-91121f36a2a2\": {\n\t\t\t\"label\": \"Multi-select\"\n\t\t}\n\t}\n}"
      },
      "outputVar": "i18n",
      "outputKind": "primitive"
    },
    {
      "type": "createObject",
      "label": "2b7d2fb1-831e-41fc-a70f-d9ddde4d9f09",
      "operationId": "fPSlDtN3ZEqAnKj/T5Hiig",
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
