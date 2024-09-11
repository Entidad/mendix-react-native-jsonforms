import { useContext } from 'react';
import { ObjectContext } from '../context/ObjectContext';

export const useObject = () => {
    const { objectState } = useContext( ObjectContext );    
    return objectState;
}