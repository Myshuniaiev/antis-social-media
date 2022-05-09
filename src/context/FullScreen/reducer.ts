import Actions, { ActionsTypes } from "./types";

export const initialState = {
  isFullScreen: false,
  enable: () => {},
  disable: () => {},
  toggle: () => {},
};

export default function fullScreenReducer(
  state = initialState,
  action: ActionsTypes
): typeof initialState {
  switch (action.type) {
    case Actions.ENABLE_FULL_SCREEN_STATE:
      return {
        ...state,
        isFullScreen: true,
      };
    case Actions.DISABLE_FULL_SCREEN_STATE:
      return {
        ...state,
        isFullScreen: false,
      };
    case Actions.TOGGLE_FULL_SCREEN_STATE:
      return {
        ...state,
        isFullScreen: !state.isFullScreen,
      };
    default:
      return state;
  }
}
