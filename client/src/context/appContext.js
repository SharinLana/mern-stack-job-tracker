import React, { useContext, useEffect, useReducer } from "react";
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
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  EDIT_JOB_BEGIN,
  EDIT_JOB_SUCCESS,
  EDIT_JOB_ERROR,
  DELETE_JOB,
  CHANGE_PAGE,
  GET_STATS_BEGIN,
  GET_STATS_SUCCESS,
  CLEAR_SEARCHING_FILTERS,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
} from "./actions";

// const token = localStorage.getItem("token");
// const user = localStorage.getItem("user");
// const userLocation = localStorage.getItem("location");

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
  user: null,
  userLoading: true,
  // token: token,
  userLocation: "",
  // add a job
  editJobId: "",
  company: "",
  position: "",
  jobLocation: "",
  recruiter: "",
  recruiterEmail: "",
  salaryMin: 0,
  salaryMax: 0,
  interviewScheduledAt: "",
  jobType: "full-time",
  jobTypeOptions: ["full-time", "part-time", "remote", "hybrid"],
  statusOptions: ["pending", "interview", "declined"],
  jobStatus: "pending",
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
  visiblePages: [],
  // stats
  stats: {},
  monthlyApplications: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //! axios - global setup
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  //! axios - request (not required after token has been stored in cookies)
  // authFetch.interceptors.request.use(
  //   (config) => {
  //     config.headers["Authorization"] = `Bearer ${state.token}`;
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

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

  // const addUserToLocalStorage = ({ user, token, userLocation }) => {
  //   localStorage.setItem("user", JSON.stringify(user));
  //   localStorage.setItem("token", token);
  //   localStorage.setItem("location", userLocation);
  // };

  // const removeUserFromLocalStorage = () => {
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("location");
  // };

  //! USER

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });

    try {
      const response = await authFetch.post("/auth/register", currentUser);
      const { user, userLocation } = response.data;

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, userLocation },
      });

      // addUserToLocalStorage({ user, token, userLocation });
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
      const { user, userLocation } = response.data;

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, userLocation },
      });

      // addUserToLocalStorage({ user, token, userLocation });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { message: error.response.data.message },
      });
    }

    clearAlert();
  };

  const logoutUser = async () => {
    await authFetch("/auth/logout");
    dispatch({ type: LOGOUT_USER });
    // removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });

    try {
      const response = await authFetch.patch("/auth/updateUser", currentUser);
      const { user, userLocation } = response.data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, userLocation },
      });
      // addUserToLocalStorage({ user, token, userLocation });
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
        jobStatus,
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
        jobStatus,
      });

      dispatch({ type: ADD_JOB_SUCCESS });
    } catch (error) {
      console.log(error.response);
      if (error.response.status !== 401) {
        dispatch({
          type: ADD_JOB_ERROR,
          payload: { message: error.response.data.message },
        });
      }
    }
    clearAlert();
  };

  const getAllJobs = async () => {
    const { page, search, searchJobStatus, searchJobType, sort } = state;
    let url = `/jobs?page=${page}&jobType=${searchJobType}&jobStatus=${searchJobStatus}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }

    dispatch({ type: GET_JOBS_BEGIN });

    try {
      const response = await authFetch(url);
      const { jobs, totalJobs, numOfPages } = response.data;

      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: { jobs, totalJobs, numOfPages },
      });
    } catch (error) {
      // console.log(error.response.data);
      logoutUser();
    }
    clearAlert();
  };

  const setEditJob = (boolean, id) => {
    dispatch({ type: SET_EDIT_JOB, payload: { isEditing: boolean, id } });
  };

  const editJob = async () => {
    dispatch({ type: EDIT_JOB_BEGIN });

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
        jobStatus,
      } = state;

      await authFetch.patch(`/jobs/${state.editJobId}`, {
        company,
        position,
        jobLocation,
        recruiter,
        recruiterEmail,
        salaryMin,
        salaryMax,
        interviewScheduledAt,
        jobType,
        jobStatus,
      });

      dispatch({ type: EDIT_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: EDIT_JOB_ERROR,
          payload: { message: error.response.data.message },
        });
      }
    }

    clearAlert();
  };

  const deleteJob = async (id) => {
    dispatch({ type: DELETE_JOB });
    try {
      await authFetch.delete(`/jobs/${id}`);
      getAllJobs();
    } catch (error) {
      // console.log(error.response.data.message);
      logoutUser();
    }
  };

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  const getStats = async () => {
    dispatch({ type: GET_STATS_BEGIN });

    try {
      const response = await authFetch("/jobs/stats");

      dispatch({
        type: GET_STATS_SUCCESS,
        payload: {
          stats: response.data.defaultStats,
          monthlyApplications: response.data.monthlyApplications,
        },
      });
    } catch (error) {
      // console.log(error.response.data.message);
      logoutUser();
    }
    clearAlert();
  };

  const clearSearchingFilters = () => {
    dispatch({ type: CLEAR_SEARCHING_FILTERS });
  };

  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });

    try {
      const { data } = await authFetch("/auth/getCurrentUser");
      const { user, userLocation } = data;

      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: { user, userLocation },
      });
    } catch (error) {
      if (error.response.status === 401) return;
      logoutUser();
    }
  };

  useEffect(() => {
    getCurrentUser();
    // eslint-disable-next-line
  }, []);

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
        getAllJobs,
        editJob,
        deleteJob,
        changePage,
        getStats,
        clearSearchingFilters,
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
