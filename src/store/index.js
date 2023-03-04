import { combineReducers } from 'redux';


import {
    companyRagistrationReducer,
    companyLoginReducer,
    forgetPasswordReducer,
    addCompanyProfileReducer,
    jobPrefrenceAddReducer,
    internshipPostReducer,
    internviewLinkGenrateReducer,
    internviewLinkInternshipGenrateReducer,
} from './reducer/company/AddReducer';

import {
    changePasswordReducer,
    resetPasswordReducer,
    CompanyProfileUpadteReducer,
    CompanyProfileRemoveReducer,
    jobPrefrenceUpdateReducer,
    CompanyIternshipPostUpdateReducer
} from "./reducer/company/UpdateReducer"

import {
    getCompanyProfileReducer,
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
    fetchApplyCountReducer,
    fetchAlluserAppledListReducer,
    fetchInternshipApplyListReducer
} from "./reducer/company/GetReducer"



// user---------------------------

import {
    userRagistrationReducer,
    userLoginReducer,
    addUserProfileReducer,
    applyInternshipReducer,
    applyJobReducer,
    addCareerDetailsReducer,
    addEnrollReducer
} from './reducer/user/Addreducer'

import {
    getUserProfileReducer,
    getAllTeacherReducer,
    fetchApplyJobDataReducer,
    fetchApplyInternshipDataReducer,
    fetchfaqReducer,
    fetchTimeLectureReducer,
    fetchCareerDtailByIdReducer
} from './reducer/user/GetReducer'

import {
    userProfileUpadteReducer,
    userChangePasswordReducer,
    userProfileRemoveReducer,
    careerDetailUpadteReducer
} from './reducer/user/UpdateReducer'


import { fetchtermWiseViewReducer, fetchtCourseDetailReducer } from './reducer/Comman/getReducer'

const rootReducer = combineReducers({
    // add company---------------
    compunyRagistration: companyRagistrationReducer,
    compunyLogin: companyLoginReducer,
    forgetPassword: forgetPasswordReducer,
    addCompanyProfile: addCompanyProfileReducer,
    jobPrefrenceAdd: jobPrefrenceAddReducer,
    internshipPost: internshipPostReducer,
    internviewLinkGenrate:internviewLinkGenrateReducer,
    internviewLinkInternshipGenrate:internviewLinkInternshipGenrateReducer,

    // fetch company data---------
    fetchCompanyView: getCompanyProfileReducer,
    jobPrefrenceView: jobPrefrenceViewReducer,
    jobPrefrenceViewById: jobPrefrenceViewByIdReducer,
    jobPrefrenceViewByCompany: jobPrefrenceViewByCompanyReducer,
    internshipViewByCompany: internshipViewByCompanyReducer,
    internshipViewById: internshipViewByIdReducer,
    internshipViewAll: internshipAllViewCompanyReducer,
    internshipViewByLocation: internshipViewByLocationReducer,
    internshipViewByTechnology: internshipViewByTechnologyReducer,
    jobViewByLocation: jobViewByLocationReducer,
    jobViewByTechnology: jobViewByTechnologyReducer,
    jobViewByposition: jobViewBypositionReducer,
    fetchApplyCount: fetchApplyCountReducer,
    fetchAllapplyList: fetchAlluserAppledListReducer,
    fetchInternshipApplyList:fetchInternshipApplyListReducer,

    // company update------------
    changePassword: changePasswordReducer,
    resetPassword: resetPasswordReducer,
    CompanyProfileUpadte: CompanyProfileUpadteReducer,
    CompanyProfileRemove: CompanyProfileRemoveReducer,
    CompanyJobPostUpdate: jobPrefrenceUpdateReducer,
    CompanyIternshipPostUpdate: CompanyIternshipPostUpdateReducer,

    // add user------------------
    userRagistration: userRagistrationReducer,
    userLogin: userLoginReducer,
    addUserProfile: addUserProfileReducer,
    applyInternship: applyInternshipReducer,
    applyJob: applyJobReducer,
    addCareerDetails: addCareerDetailsReducer,
    addEnroll:addEnrollReducer,


    //lecture time list 

    fetchTimeLecture:fetchTimeLectureReducer,
  


    // fetch user---------
    fetchUserView: getUserProfileReducer,
    fetchTainerData: getAllTeacherReducer,
    fetchApplyJobData: fetchApplyJobDataReducer,
    fetchfaq: fetchfaqReducer,
    fetchApplyInternshipData: fetchApplyInternshipDataReducer,
    fetchCareerDtailById:fetchCareerDtailByIdReducer,

    // updare user-------
    userProfileUpadte: userProfileUpadteReducer,
    userChangePassword: userChangePasswordReducer,
    UserProfileRemove: userProfileRemoveReducer,
    careerDetailUpadte:careerDetailUpadteReducer,


    // COMMAN 

    fetchtermWiseView: fetchtermWiseViewReducer,
    fetchtCourseDetail: fetchtCourseDetailReducer,




})


export default rootReducer;