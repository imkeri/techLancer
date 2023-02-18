import { Baseurl } from "../../../baseurl";
import axios from "axios"
import Cookies from "js-cookie";


const token = Cookies.get('token')


// FETCH COMPANY PROFILE VIEW

export function fetchUserView() {
    return async (dispatch) => {
       try {
      
        const response = await axios.get(`${Baseurl}/user/view-profile`,{
            headers:{
                "Authorization":token
            }
        });

        var return_response = {
            type: "USER_VIEW",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "USER_VIEW",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}

// VIEW ALL TEACHER

export function fetchTainerData() {
    return async (dispatch) => {
       try {
      
        const response = await axios.get(`${Baseurl}/teacher/view-all`);
        var return_response = {
            type: "TEACHER_VIEW",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "TEACHER_VIEW",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}

// GET ALL JOB

export function fetchApplyJobData() {
    return async (dispatch) => {
       try {
      
        const response = await axios.get(`${Baseurl}/applies/get-job`,{
            headers:{
                "Authorization":token
            }
        });
        console.log("res:::::::",response)
        var return_response = {
            type: "FETCH_APPLY_JOB",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "FETCH_APPLY_JOB",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// GET ALL INTERNSHIP

export function fetchApplyInternshipData() {
    return async (dispatch) => {
       try {
      
        const response = await axios.get(`${Baseurl}/applies/get-internship  `,{
            headers:{
                "Authorization":token
            }
        });
        console.log("res:::::::",response)
        var return_response = {
            type: "FETCH_APPLY_INTERNSHIP",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "FETCH_APPLY_INTERNSHIP",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}
// GET ALL QUESTION

export function fetchfaq() {
    return async (dispatch) => {
       try {
        const response = await axios.get(`${Baseurl}/faq/view`,{
            headers:{
                "Authorization":token
            }
        });

        var return_response = {
            type: "FAQ_DATA",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "FAQ_DATA",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}