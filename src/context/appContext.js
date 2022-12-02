import React, { useReducer, useContext } from "react";
import reducer, { CHANGE_PAGE } from "./reducer";

const AppContext = React.createContext();

const initialState = {page: 0}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const changePage = (page) =>{
        console.log("WAT",page)
        dispatch({type: CHANGE_PAGE ,payload: {page}})
    }
    return (
        <AppContext.Provider
            value={{
                ...state,
                changePage,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };