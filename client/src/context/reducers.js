import { initialState } from "./appContext";

import { TOGGLE_SIDEBAR } from "./actions";

const reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, showSidebar: !state.showSidebar };
  }

  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
