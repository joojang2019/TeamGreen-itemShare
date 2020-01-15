import React, {createContext, useState} from 'react';

export const ModalContext = React.createContext();

export const ModalContextProvider = props => {
    const [currentModal, setCurrentModal] = useState(false);
    return (
        <ModalContext.Provider
            value = {{currentModal, setCurrentModal}}>
            {props.children}  
        </ModalContext.Provider>
    )
}

