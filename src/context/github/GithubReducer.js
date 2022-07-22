const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_FILTERED_USERS":
      return {
        ...state,
        filtered: action.payload,
        isLoading: false,
      };
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };
    case "GET_USER":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "GET_USER_REPOS":
      return {
        ...state,
        repos: action.payload,
        isLoading: false,
      };
    case "GET_USER_AND_REPOS":
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case "SET_ISLOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        filtered: [],
      };
    case "CLEAR_USER":
      return {
        ...state,
        user: {},
        repos: [],
      };

    default:
      return state;
  }
};

export default githubReducer;
