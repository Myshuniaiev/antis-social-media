import React, { FC, createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import Type from "./types";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const FullScreenContext = createContext(initialState);

export const FullScreenProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const enable = () => dispatch({ type: Type.ENABLE_FULL_SCREEN_STATE });

  const disable = () => dispatch({ type: Type.DISABLE_FULL_SCREEN_STATE });

  const toggle = () => dispatch({ type: Type.TOGGLE_FULL_SCREEN_STATE });

  const { isFullScreen } = state;

  return (
    <FullScreenContext.Provider
      value={{
        isFullScreen,
        enable,
        disable,
        toggle,
      }}
    >
      {children}
    </FullScreenContext.Provider>
  );
};

export default FullScreenProvider;
