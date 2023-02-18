import { combineReducers } from 'redux';


import {
    companyRagistrationReducer,
    companyLoginReducer,
    forgetPasswordReducer,
    addCompanyProfileReducer,
    jobPrefrenceAddReducer,
    internshipPostReducer
} from './reducer/company/AddReducer';

import {
    changePasswordReducer,
    resetPasswordReducer,
    CompanyProfileUpadteReducer,
    CompanyProfileRemoveReducer,
    jobPrefrenceUpdateReducer,
    CompanyIternshipPostUpdateReducer
} from "./reducer/company/UpdateReducer"

import { getCompanyProfileReducer,
    jobPrefrenceViewReducer,
    jobPrefrenceViewByIdReducer,
    jobPrefrenceViewByCompanyReducer,
    internshipViewByCompanyReducer,
    internshipViewByIdReducer,
    internshipAllViewCompanyReducer,
    internshipViewByLocationReducer,
    internshipViewByTechnologyReducer,
    jobViewByLocationReducer,
    jobViewByTechnologyReducer,
    jobViewBypositionReducer,
    fetchApplyCountReducer} from "./reducer/company/GetReducer"



// user---------------------------

import {
    userRagistrationReducer,
    userLoginReducer,
    addUserProfileReducer,
    applyInternshipReducer,
    applyJobReducer
} from './reducer/user/Addreducer'

import { getUserProfileReducer,
    getAllTeacherReducer ,
    fetchApplyJobDataReducer,
    fetchApplyInternshipDataReducer,
    fetchfaqReducer} from './reducer/user/GetReducer'

import {
    userProfileUpadteReducer,
    userChangePasswordReducer,
    userProfileRemoveReducer
} from './reducer/user/UpdateReducer'


import {fetchtermWiseViewReducer,fetchtCourseDetailReducer} from './reducer/Comman/getReducer'

const rootReducer = combineReducers({
    // add company---------------
    compunyRagistration: companyRagistrationReducer,
    compunyLogin: companyLoginReducer,
    forgetPassword: forgetPasswordReducer,
    addCompanyProfile: addCompanyProfileReducer,
    jobPrefrenceAdd:jobPrefrenceAddReducer,
    internshipPost:internshipPostReducer,

    // fetch company data---------
    fetchCompanyView: getCompanyProfileReducer,
    jobPrefrenceView:jobPrefrenceViewReducer,
    jobPrefrenceViewById:jobPrefrenceViewByIdReducer,
    jobPrefrenceViewByCompany:jobPrefrenceViewByCompanyReducer, 
    internshipViewByCompany:internshipViewByCompanyReducer,
    internshipViewById:internshipViewByIdReducer,
    internshipViewAll:internshipAllViewCompanyReducer,
    internshipViewByLocation:internshipViewByLocationReducer,
    internshipViewByTechnology:internshipViewByTechnologyReducer,
    jobViewByLocation:jobViewByLocationReducer,
    jobViewByTechnology:jobViewByTechnologyReducer,
    jobViewByposition:jobViewBypositionReducer,
    fetchApplyCount:fetchApplyCountReducer,

    // company update------------
    changePassword:changePasswordReducer,
    resetPassword:resetPasswordReducer,
    CompanyProfileUpadte:CompanyProfileUpadteReducer,
    CompanyProfileRemove:CompanyProfileRemoveReducer,
    CompanyJobPostUpdate:jobPrefrenceUpdateReducer,
    CompanyIternshipPostUpdate:CompanyIternshipPostUpdateReducer,

    // add user------------------
    userRagistration: userRagistrationReducer,
    userLogin: userLoginReducer,    
    addUserProfile:addUserProfileReducer,
    applyInternship:applyInternshipReducer,
    applyJob:applyJobReducer,


    // fetch user---------
    fetchUserView: getUserProfileReducer,
    fetchTainerData:getAllTeacherReducer,
    fetchApplyJobData:fetchApplyJobDataReducer,
    fetchfaq:fetchfaqReducer,
    fetchApplyInternshipData:fetchApplyInternshipDataReducer,

    // updare user-------
    userProfileUpadte: userProfileUpadteReducer,
    userChangePassword: userChangePasswordReducer,
    UserProfileRemove:userProfileRemoveReducer,


    // COMMAN 

    fetchtermWiseView:fetchtermWiseViewReducer,
    fetchtCourseDetail:fetchtCourseDetailReducer,




})


export default rootReducer;