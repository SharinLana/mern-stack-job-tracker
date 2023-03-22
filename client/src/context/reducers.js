import { initialState } from "./appContext";

import {
  TOGGLE_SIDEBAR,
  PROFILE_EDITING,
  SAVE_PROFILE_CHANGES,
  SET_EDIT_JOB,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
      showLargeSidebar: !state.showLargeSidebar,
    };
  }

  if (action.type === PROFILE_EDITING) {
    return { ...state, isProfileInputsActive: true };
  }

  if (action.type === SAVE_PROFILE_CHANGES) {
    return { ...state, isProfileInputsActive: false };
  }

  if (action.type === SET_EDIT_JOB) {
    return { ...state, isEditing: action.payload.isEditing };
  }

  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
