import { createContext } from "react";
import { ObjectState } from "./ObjectState";

export type ObjectContextProps = {
    objectState: ObjectState;
} 

export const ObjectContext = createContext<ObjectContextProps>({} as ObjectContextProps );