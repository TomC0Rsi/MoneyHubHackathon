import React, { useReducer } from 'react';
import { ACTIONS } from '../constants/actions';
import { MoneyhubContext } from './context';

const MoneyHubReducer = (state, action) => {
    const { type, payload } = action;

    switch(type) {
        case ACTIONS.ADD_PENSION:
            return {
                ...state,
                pension: payload
            }
        default:
            return state;
    }
};

export const MoneyHubProvider = ({ userConfig, children }) => {
    // TODO: include the Moneyhub object in the state.
    const [state, dispatch] = useReducer(MoneyHubReducer, {});
    return (
        <MoneyhubContext.Provider
          value={{
            state,
            dispatch
          }}
        >
          {children}
        </MoneyhubContext.Provider>
      );
};