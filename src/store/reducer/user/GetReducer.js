export const initialState = {
  data: {},
  loading: true,
};


// FETCH COMPANY PROFILE VIEW

export function getUserProfileReducer(state = initialState, action) {
  switch (action.type) {
    case "USER_VIEW":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// VIEW ALL TEACHER

export function getAllTeacherReducer(state = initialState, action) {
  switch (action.type) {
    case "TEACHER_VIEW":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// GET ALL JOB

export function fetchApplyJobDataReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_APPLY_JOB":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}
// GET ALL INTERNSHIP

export function fetchApplyInternshipDataReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_APPLY_INTERNSHIP":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

// GET ALL QUESTION

export function fetchfaqReducer(state = initialState, action) {
  switch (action.type) {
    case "FAQ_DATA":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}


//GET ALL FULL TIME LECTURE LIST

export function fetchTimeLectureReducer(state = initialState, action) {
  switch (action.type) {
    case "TIME_LECTURE":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}

//VIEW CARRAR DETAIL BY ID 

export function fetchCareerDtailByIdReducer(state = initialState, action) {
  switch (action.type) {
    case "VIEW_CAREER_BY_ID":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
}