import {
  POST_FETCHING,
  POST_FETCH_SUCCESS,
  POST_FETCH_ERROR,
  POST_FILTER,
  POST_STUDENT_FETCH,
} from "../actions/actionTypes";

let initialState = {
  loading: false,
  data: [],
  filteredData: [],
  error: null,
  studentInfo: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_FETCHING:
      return { ...state, loading: true };
    case POST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        filteredData: action.payload,
        error: null,
      };
    case POST_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        data: [],
        filteredData: [],
        error: action.payload,
      };
    case POST_FILTER:
      return {
        ...state,
        loading: false,
        filteredData: action.payload,
        error: null,
      };
    case POST_STUDENT_FETCH:
      return {
        ...state,
        loading: false,
        studentInfo: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default postReducer;
