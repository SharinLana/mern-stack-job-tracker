import { initialState } from "./appContext";

import { TOGGLE_SIDEBAR, PROFILE_EDITING, SAVE_PROFILE_CHANGES } from "./actions";

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }

  if (action.type === PROFILE_EDITING) {
    return { ...state, isProfileInputsActive: true };
  }

  if (action.type === SAVE_PROFILE_CHANGES) {
    return { ...state, isProfileInputsActive: false };
  }

  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
