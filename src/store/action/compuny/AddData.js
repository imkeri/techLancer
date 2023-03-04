import { Baseurl } from "../../../baseurl";
import axios from "axios"
import Cookies from "js-cookie";


const token = Cookies.get('token')

//COMPANY RAGISTRATION

export function compunyRagistration(data) {
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/company/registration`, data);
        console.log("response:::",response)
        
        var return_response = {
            type: "COMPANY_RAGISTRATION",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "COMPANY_RAGISTRATION",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


//COMPANY LOGIN

export function compunyLogin(data) {
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/company/login`, data);
        console.log("response:::",response)
        Cookies.set('token',response.data.token)

        var return_response = {
            type: "COMPANY_LOGIN",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "COMPANY_LOGIN",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// FORGET PASSWORD

export function forgetPassword(data) {
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/common/forget-password`, data);
        console.log("response:::",response)

        var return_response = {
            type: "FORGET_PASSWORD",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "FORGET_PASSWORD",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// ADD COMPANY PROFILE 

export function addCompanyProfile(data) {
    console.log("dat::::",data)
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/company/add-image`, data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "ADD_COMPANYPROFILE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "ADD_COMPANYPROFILE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// JOB PREFRENCE ADD

export function jobPrefrenceAdd(data) {
    console.log("dat::::",data)
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/jobs/post`, data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "JOB_PREFRENCE_ADD",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "JOB_PREFRENCE_ADD",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// INTERNSHIP POST

export function internshipPost(data){
    console.log("dat::::",data)
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/internship/post`, data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "JOB_INTERNSHIP_ADD",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "JOB_INTERNSHIP_ADD",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// INTERVIEW LINK JOB

export function internviewLinkGenrate(id,data){
   
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/applies/take-action-job/${id}`, data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "INTERVIEW_LINK",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "INTERVIEW_LINK",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}

// INTERVIEW LINK INTERNSHIP

export function internviewLinkInternshipGenrate(id,data){
   
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/applies/take-action-intern/${id}`, data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "INTERVIEW_LINK_INTRENSHIP",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "INTERVIEW_LINK_INTRENSHIP",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}
