enum Type {
  ENABLE_FULL_SCREEN_STATE = "ENABLE_FULL_SCREEN_STATE",
  DISABLE_FULL_SCREEN_STATE = "DISABLE_FULL_SCREEN_STATE",
  TOGGLE_FULL_SCREEN_STATE = "TOGGLE_FULL_SCREEN_STATE",
}

type EnableFullScreenStateActionType = {
  type: typeof Type.ENABLE_FULL_SCREEN_STATE;
};
type DisableFullScreenStateActionType = {
  type: typeof Type.DISABLE_FULL_SCREEN_STATE;
};
type ToggleFullScreenStateActionType = {
  type: typeof Type.TOGGLE_FULL_SCREEN_STATE;
};

export type ActionsTypes =
  | EnableFullScreenStateActionType
  | DisableFullScreenStateActionType
  | ToggleFullScreenStateActionType;
export default Type;
