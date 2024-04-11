import {
  ReactNode,
  Reducer,
  createContext,
  useContext,
  useReducer,
} from "react";
import { AppReducers, initialState, globalReducers } from "./reducers";

type Action = {
  type: string;
  payload: object;
};

type State = {
  [key: string]: any;
};

type Dispatch = (action: Action) => void;

type AppStateContextValue = [State, Dispatch];

type AppStateProviderProps = {
  reducer: Reducer<State, Action>;
  initialState: State;
  children: ReactNode;
};

const Context = createContext<AppStateContextValue | any>(null);

function AppStateProvider({
  reducer,
  initialState,
  children,
}: AppStateProviderProps) {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

function useAppState(): AppStateContextValue {
  const contextValue = useContext(Context);
  if (!contextValue) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return contextValue;
}

export {
  AppStateProvider,
  initialState,
  useAppState,
  globalReducers,
};
