import { ObjectContext } from './ObjectContext';
import { ObjectState } from './ObjectState';
import { createElement } from 'react'

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