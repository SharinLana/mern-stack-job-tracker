import React, { useContext, useReducer } from "react";
import axios from "axios";
import reducer from "./reducers";

import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
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
  GET_INPUT_VALUE,
  ADD_JOB_BEGIN,
  ADD_JOB_SUCCESS,
  ADD_JOB_ERROR,
  CLEAR_VALUES,
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
  // alerts
  showAlert: false,
  alertType: "",
  alertText: "",
  // user
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  // add a job
  company: "",
  position: "",
  jobLocation: "",
  recruiter: "",
  recruiterEmail: "",
  salaryMin: 0,
  salaryMax: 0,
  interviewScheduledAt: "",
  jobType: "full-time",
  jobTypeOptions: ["all", "full-time", "part-time", "remote", "hybrid"],
  statusOptions: ["all", "pending", "interview", "declined"],
  status: "pending",
  // searching jobs
  search: "",
  searchJobStatus: "all", 
  searchJobType: "all", 
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
  // all jobs
  jobs: [],
  totalJobs: 0,
  page: 1,
  numOfPages: 1,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //! axios - global setup
  const authFetch = axios.create({
    baseURL: "http://localhost:9000/api/v1",
  });

  //! axios - request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //! axios - response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // if the token expired
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

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

  //! USER

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

    clearAlert();
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

    clearAlert();
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
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { message: error.response.data.message },
        });
      }
    }
    clearAlert();
  };

  // ! JOBS

  const getInputValues = ({ name, value }) => {
    dispatch({ type: GET_INPUT_VALUE, payload: { name, value } });
  };

  const clearInputValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const addJob = async () => {
    dispatch({ type: ADD_JOB_BEGIN });

    try {
      const {
        company,
        position,
        jobLocation,
        recruiter,
        recruiterEmail,
        salaryMin,
        salaryMax,
        interviewScheduledAt,
        jobType,
        status,
      } = state;

      await authFetch.post("/jobs", {
        company,
        position,
        jobLocation,
        recruiter,
        recruiterEmail,
        salaryMin,
        salaryMax,
        interviewScheduledAt,
        jobType,
        status,
      });

      dispatch({ type: ADD_JOB_SUCCESS });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: ADD_JOB_ERROR,
          payload: { message: error.response.data.message },
        });
      }
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        toggleSidebar,
        showProfileEditingInputs,
        saveProfileChanges,
        setEditJob,
        registerUser,
        loginUser,
        logoutUser,
        updateUser,
        getInputValues,
        addJob,
        clearInputValues,
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
