import { globalReducers } from "./globalReducers";
import { initialState } from "./initialState";

interface Reducers {
  [key: string]: (state: any, action: any) => any;
}

const combineReducers = (reducers: Reducers) => {
  return (state: any, action: any) => {
    return Object.keys(reducers).reduce((acc, prop) => {
      return {
        ...acc,
        [prop]: reducers[prop](acc[prop], action),
      };
    }, state);
  };
};

const AppReducers = combineReducers({
  globalReducer: globalReducers,
});

export { AppReducers, initialState,globalReducers };
