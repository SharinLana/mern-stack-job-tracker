import React, { useContext, useReducer } from "react";
import axios from "axios";
import reducer from "./reducers";

import {
  TOGGLE_SIDEBAR,
  PROFILE_EDITING,
  SAVE_PROFILE_CHANGES,
  SET_EDIT_JOB,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./actions";

const initialState = {
  showLargeSidebar: false,
  showSidebar: false,
  isProfileInputsActive: false,
  isEditing: false,
  isLoading: false,

  user: null,
  token: null,
  userLocation: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //! axios - global setup
  const authFetch = axios.create({
    baseURL: "http://localhost:5060/api/v1",
  });

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const showProfileEditingInputs = () => {
    dispatch({ type: PROFILE_EDITING });
  };

  const saveProfileChanges = () => {
    dispatch({ type: SAVE_PROFILE_CHANGES });
  };

  const setEditJob = (boolean) => {
    dispatch({ type: SET_EDIT_JOB, payload: { isEditing: boolean } });
  };

  // USER

  const registerUser = async (currentUser) => {
    console.log(currentUser);
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        showProfileEditingInputs,
        saveProfileChanges,
        setEditJob,
        registerUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
