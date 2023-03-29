import moment from "moment";
import { initialState } from "./appContext";

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

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

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

  if (action.type === REGISTER_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      // token: action.payload.token,
      userLocation: action.payload.userLocation,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "You have been registered!",
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.message,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      // token: action.payload.token,
      userLocation: action.payload.userLocation,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "Success!",
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.message,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      // token: null,
      userLocation: "",
      userLoading: false,
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      // token: action.payload.token,
      userLocation: action.payload.userLocation,
      isLoading: false,
      isProfileInputsActive: false,
      showAlert: true,
      alertType: "success",
      alertText: "Updated successfully!",
    };
  }

  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.message,
    };
  }

  // ! JOBS
  if (action.type === GET_INPUT_VALUE) {
    return { ...state, [action.payload.name]: action.payload.value };
  }

  if (action.type === CLEAR_VALUES) {
    const initialValues = {
      company: "",
      position: "",
      jobLocation: "",
      recruiter: "",
      recruiterEmail: "",
      salaryMin: 0,
      salaryMax: 0,
      interviewScheduledAt: "",
      jobType: "full-time",
      status: "pending",
    };
    return { ...state, ...initialValues };
  }

  if (action.type === ADD_JOB_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === ADD_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "success",
      alertText: "New Job Created!",
    };
  }

  if (action.type === ADD_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.message,
    };
  }

  if (action.type === GET_JOBS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_JOBS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      jobs: action.payload.jobs,
      totalJobs: action.payload.totalJobs,
      numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === SET_EDIT_JOB) {
    const job = state.jobs.find((job) => job._id === action.payload.id);

    const {
      _id,
      company,
      interviewScheduledAt,
      jobLocation,
      jobStatus,
      jobType,
      position,
      recruiter,
      recruiterEmail,
      salaryMax,
      salaryMin,
    } = job;

    let toBeEdited = {
      _id,
      company,
      jobLocation,
      jobStatus,
      jobType,
      position,
      recruiter,
      recruiterEmail,
      salaryMax,
      salaryMin,
    };

    if (job.interviewScheduledAt === null) {
      return {
        ...state,
        isEditing: action.payload.isEditing,
        editJobId: _id,
        ...toBeEdited,
      };
    } else {
      const normalizedDate = moment(interviewScheduledAt).format(
        "yyyy-MM-DDThh:mm:ss.SSS"
      );

      return {
        ...state,
        isEditing: action.payload.isEditing,
        editJobId: _id,
        ...toBeEdited,
        interviewScheduledAt: normalizedDate,
      };
    }
  }

  if (action.type === EDIT_JOB_BEGIN) {
    return {
      ...state,
      isLoading: true,
      isEditing: true,
    };
  }

  if (action.type === EDIT_JOB_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isEditing: false,
      showAlert: true,
      alertType: "success",
      alertText: "Job successfully edited!",
    };
  }

  if (action.type === EDIT_JOB_ERROR) {
    return {
      ...state,
      isLoading: false,
      isEditing: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.message,
    };
  }

  if (action.type === DELETE_JOB) {
    return { ...state, isLoading: true };
  }

  if (action.type === CHANGE_PAGE) {
    let newVisiblePages = [];
    let showMax = 3;
    let endPage;
    let startPage;

    if (state.numOfPages <= showMax) {
      startPage = 1;
      endPage = state.numOfPages;
    } else {
      startPage = action.payload.page;

      if (
        startPage !== state.numOfPages &&
        startPage + 1 !== state.numOfPages
      ) {
        endPage = action.payload.page + showMax - 1;
      } else {
        endPage = state.numOfPages;
      }

      if (startPage === state.numOfPages - 1) {
        startPage = startPage - 1;
      }

      if (startPage === state.numOfPages) {
        startPage = startPage - 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      newVisiblePages.push(i);
    }

    return {
      ...state,
      page: action.payload.page,
      visiblePages: newVisiblePages,
    };
  }

  if (action.type === GET_STATS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }

  if (action.type === GET_STATS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      stats: action.payload.stats,
      monthlyApplications: action.payload.monthlyApplications,
    };
  }

  if (action.type === CLEAR_SEARCHING_FILTERS) {
    return {
      ...state,
      search: "",
      searchJobStatus: "all",
      searchJobType: "all",
      sort: "latest",
    };
  }

  if (action.type === GET_CURRENT_USER_BEGIN) {
    return { ...state, userLoading: true, showAlert: false };
  }

  if (action.type === GET_CURRENT_USER_SUCCESS) {
    return {
      ...state,
      userLoading: false,
      user: action.payload.user,
      userLocation: action.payload.userLocation,
    };
  }

  throw new Error(`No such action: ${action.type}`);
};

export default reducer;
