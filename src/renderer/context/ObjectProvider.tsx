//React 19 removed the global JSX namespace; it is imported from react instead.
import type { JSX } from 'react';
import { ObjectContext } from './ObjectContext';
import { ObjectState } from './ObjectState';

interface ObjectProps {
    objectState:ObjectState,
    children: JSX.Element | JSX.Element[]
}

export const ObjectProvider = ( { objectState, children }: ObjectProps ) => {    
    return (
        <ObjectContext.Provider value={{objectState}}>
            { children }
        </ObjectContext.Provider>
    )
}