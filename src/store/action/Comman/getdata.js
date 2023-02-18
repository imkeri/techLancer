import { Baseurl } from "../../../baseurl";
import axios from "axios"


// FETCH TERMWISE DATA

export function fetchtermWiseView(data) {
    return async (dispatch) => {
       try {
        const response = await axios.post(`${Baseurl}/courses/view-by-term`,data);
        var return_response = {
            type: "TERMWISE_DATA",
            payload: response,
        };        
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "TERMWISE_DATA",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}
// FETCH COURSE-DETAIL BY ID


export function fetchtCourseDetail(id) {
    return async (dispatch) => {
       try {
        const response = await axios.get(`${Baseurl}/courses/view-by-id/${id}`);
        var return_response = {
            type: "COURSE_DETAIL",
            payload: response,
        };        
        console.log(response)
        dispatch(return_response);
       } catch (error) {
        console.log("error:::",error)
        var return_response = {
            type: "COURSE_DETAIL",
            payload: error,
        };
        dispatch(return_response);
       }
    };
}

