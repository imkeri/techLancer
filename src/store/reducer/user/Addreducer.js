export const initialState = {
    data: {},
    loading: true,
  };
  
  //USER RAGISTRATION
  
  export function userRagistrationReducer(state = initialState, action) {
    switch (action.type) {
      case "USER_RAGISTRATION":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }

  //USER LOGIN

export function userLoginReducer(state = initialState, action) {
    switch (action.type) {
      case "USER_LOGIN":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }
  
  // ADD USER PROFILE 

export function addUserProfileReducer(state = initialState, action) {
    switch (action.type) {
      case "ADD_USERPROFILE":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }
  

  // ADD INTERNSHIP 

  export function applyInternshipReducer(state = initialState, action) {
    switch (action.type) {
      case "APPLY_INTERNSHIP":
        return { data: action.payload, loading: false };
      default:
        return state;
    }
  }
  
    // ADD JOB 

    export function applyJobReducer(state = initialState, action) {
      switch (action.type) {
        case "APPLY_JOB":
          return { data: action.payload, loading: false };
        default:
          return state;
      }
    }
    