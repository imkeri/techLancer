import { Baseurl } from "../../../baseurl";
import axios from "axios"
import Cookies from "js-cookie";

const token = Cookies.get('token')

//USER RAGISTRATION

export function userRagistration(data) {
    console.log("data::", data)
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/user/registration`, data);
            console.log("response:::", response)

            var return_response = {
                type: "USER_RAGISTRATION",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {
            console.log("error:::", error)
            var return_response = {
                type: "USER_RAGISTRATION",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

//USER LOGIN

export function userLogin(data) {

    return async (dispatch) => {
        try {
            console.log("hello")
            const response = await axios.post(`${Baseurl}/user/login`, data);
            console.log("response:::", response)
            Cookies.set('token', response.data.token)
            Cookies.set('userId',response.data.user_id)

            var return_response = {
                type: "USER_LOGIN",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {
            console.log("error:::", error)
            var return_response = {
                type: "USER_LOGIN",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}


// ADD user PROFILE 

export function addUserProfile(data) {
    console.log("dat::::", data)
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/user/add-profile`, data, {
                headers: {
                    "Authorization": token
                }
            });
            console.log("response:::", response)

            var return_response = {
                type: "ADD_USERPROFILE",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {
            console.log("error:::", error)
            var return_response = {
                type: "ADD_USERPROFILE",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// ADD INTERNSHIP 

export function applyInternship(id) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/applies/apply-internship/${id}`, {}, {
                headers: {
                    "Authorization": token
                }
            });
            var return_response = {
                type: "APPLY_INTERNSHIP",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {
            console.log("error:::", error)
            var return_response = {
                type: "APPLY_INTERNSHIP",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

// ADD JOB 

export function applyJob(id) {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/applies/apply-job/${id}`, {}, {
                headers: {
                    "Authorization": token
                }
            });
            console.log("response:::", response)

            var return_response = {
                type: "APPLY_JOB",
                payload: response,
            };
            dispatch(return_response);
        } catch (error) {
            console.log("error:::", error)
            var return_response = {
                type: "APPLY_JOB",
                payload: error,
            };
            dispatch(return_response);
        }
    };
}

//ADD CAREER DETAILS 

export function addCareerDetails(data) {
    console.log("data:::",data)
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/career/insert-career`, data, {
                headers: {
                    Authorization: token
                }
            })
            console.log("responseeee", response)
            var return_response = {
                type: "ADD_CAREER",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error::", error);

            var return_response = {
                type: "ADD_CAREER",
                payload: error
            }
            dispatch(return_response)
        }
    }
}


//ADD ENROLL 

export function addEnroll(data) {
    console.log("data::",data)
    return async (dispatch) => {
        try {
            const response = await axios.post(`${Baseurl}/enrolled/insert`, data)
            console.log("addEnroll", response)
            var return_response = {
                type: "ADD_ENROLL",
                payload: response
            }
            dispatch(return_response)
        } catch (error) {
            console.log("error::", error);

            var return_response = {
                type: "ADD_ENROLL",
                payload: error
            }
            dispatch(return_response)
        }
    }
}


