import { Baseurl } from "../../../baseurl";
import axios from "axios"
import Cookies from "js-cookie";


const token = Cookies.get('token')


// CHANGE PASSWORD

export function changePassword(data) {
    console.log("data:::",data)
    return async (dispatch) => {
       try {
        const response = await axios.put(`${Baseurl}/company/change-password`, data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "CHANGE_PASSWORD",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "CHANGE_PASSWORD",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}

// RESET PASSWORD

export function resetPassword(data,query) {
    console.log("data:::",query)
    return async (dispatch) => {
       try {
        const response = await axios.put(`${Baseurl}/common/reset-password/${query.token}/${query.index}`, data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "RESET_PASSWORD",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "RESET_PASSWORD",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// COMPANY UPDATE PROFILE

export function CompanyProfileUpadte(data) {
    console.log("data:::",data)
    return async (dispatch) => {
       try {
        const response = await axios.put(`${Baseurl}/company/update-profile`, data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "COMPANY_PROFILEUPADTE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "COMPANY_PROFILEUPADTE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// COMPANY PROFILE REMOVE

export function CompanyProfileRemove() {
    console.log("token",token)
    return async (dispatch) => {
       try {
        console.log("token========",token)
        const response = await axios.put(`${Baseurl}/company/remove-image`,{},{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "COMPANY_PROFILEREMOVE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "COMPANY_PROFILEREMOVE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// JOB PREFRENCE UPDATE

export function CompanyJobPostUpdate(data,id) {
    console.log("token",id)
    return async (dispatch) => {
       try {
        console.log("token========",token)
        const response = await axios.put(`${Baseurl}/jobs/update/${id}`,data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "JOB_PREFRENCE_UPDATE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "JOB_PREFRENCE_UPDATE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}

// INTRNSHIP UPDATE

export function CompanyIternshipPostUpdate(data,id) {
    return async (dispatch) => {
       try {
        const response = await axios.put(`${Baseurl}/internship/update/${id}`,data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "INTERNSHIP_UPDATE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "INTERNSHIP_UPDATE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}