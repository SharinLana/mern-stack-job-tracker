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
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
} from "./actions";

const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userLocation = localStorage.getItem("location");

const initialState = {
  showLargeSidebar: false,
  showSidebar: false,
  isProfileInputsActive: false,
  isEditing: false,
  isLoading: false,

  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //! axios - global setup
  const authFetch = axios.create({
    baseURL: "http://localhost:9000/api/v1",
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

  const addUserToLocalStorage = ({ user, token, userLocation }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", userLocation);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  // USER

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });

    try {
      const response = await authFetch.post("/auth/register", currentUser);
      const { user, token, userLocation } = response.data;

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, userLocation },
      });

      addUserToLocalStorage({ user, token, userLocation });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { message: error.response.data.message },
      });
    }
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });

    try {
      const response = await authFetch.post("/auth/login", currentUser);
      const { user, token, userLocation } = response.data;

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, userLocation },
      });

      addUserToLocalStorage({ user, token, userLocation });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { message: error.response.data.message },
      });
    }
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });

    try {
      const response = await authFetch.patch("/auth/updateUser", currentUser);
      const { user, token, userLocation } = response.data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token, userLocation },
      });
      addUserToLocalStorage({ user, token, userLocation });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: UPDATE_USER_ERROR,
        payload: { message: error.response.data.message },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        toggleSidebar,
        showProfileEditingInputs,
        saveProfileChanges,
        setEditJob,
        registerUser,
        loginUser,
        logoutUser,
        updateUser
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
