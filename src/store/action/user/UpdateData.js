import { Baseurl } from "../../../baseurl";
import axios from "axios"
import Cookies from "js-cookie";


const token = Cookies.get('token')


// CHANGE PASSWORD

export function userChangePassword(data) {
    console.log("data:::",data)
    return async (dispatch) => {
       try {
        const response = await axios.put(`${Baseurl}/user/change-password`, data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "CHANGE_USERPASSWORD",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "CHANGE_USERPASSWORD",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}

// COMPANY UPDATE PROFILE

export function userProfileUpadte(data) {
    console.log("data:::",data)
    return async (dispatch) => {
       try {
        const response = await axios.put(`${Baseurl}/user/update-profile`, data,{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "USER_PROFILEUPADTE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "USER_PROFILEUPADTE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}


// COMPANY PROFILE REMOVE

export function UserProfileRemove() {
    console.log("token",token)
    return async (dispatch) => {
       try {
        console.log("token========",token)
        const response = await axios.put(`${Baseurl}/user/remove-profile`,{},{
            headers:{
                "Authorization":token
            }
        });
        console.log("response:::",response)

        var return_response = {
            type: "USER_PROFILEREMOVE",
            payload: response,
        };
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "USER_PROFILEREMOVE",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}