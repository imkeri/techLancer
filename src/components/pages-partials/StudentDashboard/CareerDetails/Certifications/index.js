import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { addCareerDetails } from '../../../../../store/action/user/AddData';
import { fetchCareerDtailById } from "../../../../../store/action/user/GetData"
import {careerDetailUpadte} from "../../../../../store/action/user/UpdateData"
import Profile from '../../Profile/Index'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainCertifications = ({ dispatch, res, careerdetail }) => {

    const [viewpart, setViewpart] = useState(true);
    const [viewData, setViewData] = useState([])
    const [data, setData] = useState(
        {
            company_name: "",
            company_bio: "",
            com_start_date: "",
            com_end_date: "",
            position: "",
            your_role: "",
            project_name: "",
            project_description: "",
            pro_start_date: "",
            pro_end_date: "",
            member: ""
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    const submitCareer = () => {
        const user_id = localStorage.getItem('userId');
        console.log("userid::", user_id)
        dispatch(careerDetailUpadte(data._id,{ "user_id": user_id, ...data }))
    }

    useEffect(() => {
        const dataa = res && res.data && res.data.data
        if (dataa && dataa.code == 201) {
            if (dataa.code == 201) {
                toast.success(dataa.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
        }
    }, [res])

    useEffect(() => {
        const id = localStorage.getItem("userId")
        dispatch(fetchCareerDtailById(id))
    }, [])


    useEffect(() => {
        const data = careerdetail.data && careerdetail.data.data && careerdetail.data.data.data
        data && setData(data[0])

    }, [careerdetail])



    return (
        <div>
            <div className='max-w-8xl  mx-auto justify-between items-center px-4 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-5'>
                    <Profile />
                    <div className='max-w-7xl  mx-auto md:w-[70%] w-[100%] items-center  sm:px-6 sm:py-14 lg:px-4 lg:justify-start lg:space-x-10 '>
                        <div className='border-2 px-10 rounded-2xl py-10 w-[100%]'>
                            <p className='text-[35px] font-semibold text-center'>Career Details</p>
                            <p className='uppercase text-[18px] font-semibold text-center tracking-tight'>CERTIFICATIONS</p>
                            <div className='flex justify-center gap-3'>
                                <div className=''>
                                    <button onClick={() => {setViewpart(!viewpart)}} className="bg-[#3DC0DF] text-[#fff] uppercase font-semibold px-2 py-1 rounded">Company</button>
                                </div>
                                <div className=''>
                                    <button onClick={() => {setViewpart(!viewpart)}} className="bg-[#3DC0DF] text-[#fff] uppercase font-semibold px-2 py-1 rounded">Projet</button>
                                </div>
                            </div>
                            {
                                viewpart?
                                    <>
                                        <div className='newac1 grid grid-cols-1 cols-span-2'>
                                            <div className='feild1 py-3'>
                                                <label className='mx-2 text-[18px] font-semibold ml-4'>Company name</label><br></br>
                                                <input type="text" placeholder='Please enter company name here' name='company_name' value={data.company_name} onChange={(e) => { handleChange(e) }} className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" />
                                            </div>
                                        </div>
                                        <div className='newac1 grid grid-cols-1 cols-span-2'>
                                            <div className='feild1 py-3'>
                                                <label className='mx-2 text-[18px] font-semibold ml-4'>Company Bio</label><br></br>
                                                <textarea rows="3" cols="50" name='company_bio' value={data.company_bio} onChange={(e) => { handleChange(e) }} className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB]  form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0"></textarea>
                                            </div>
                                        </div>
                                        <div className='newac1 grid grid-cols-2 gap-5'>
                                            <div className='feild1 py-3 flex flex-col'>
                                                <label className='mx-2 text-[18px] font-semibold ml-4 text-start'>Start Date</label>
                                                <input type="date" name="com_start_date" value={data.com_start_date} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={(e) => { handleChange(e) }} />
                                            </div>
                                            <div className='feild1 py-3 flex flex-col'>
                                                <label className='mx-2 text-[18px] font-semibold ml-4 text-start'>End Date</label>
                                                <input type="date" name='com_end_date' value={data.com_end_date} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={(e) => { handleChange(e) }} />
                                            </div>
                                        </div>
                                        <div className='newac1 grid grid-cols-1 cols-span-2'>
                                            <div className='feild1 py-3'>
                                                <label className='mx-2 text-[18px] font-semibold ml-4'>Position</label><br></br>
                                                <input type="text" placeholder='Please enter Your Position' value={data.position} name='position' className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" onChange={(e) => { handleChange(e) }} />
                                            </div>
                                        </div>
                                        <div className='newac1 grid grid-cols-1 cols-span-2'>
                                            <div className='feild1 py-3'>
                                                <label className='mx-2 text-[18px] font-semibold ml-4'>Role</label><br></br>
                                                <input type="text" placeholder='Please enter Your Role' name='your_role' value={data.your_role} className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" onChange={(e) => { handleChange(e) }} />
                                            </div>
                                        </div>
                                        <div className='text-center py-10 pb-5'>
                                <button className='bg-[#202040] text-[#fff] text-[18px] font-semibold rounded-3xl px-5 py-1 uppercase hover:bg-[#3DC0DF] hover:text-[#202040]' onClick={() => {setViewpart(!viewpart)}} >Next</button>
                            </div>
                                    </> : <>
                                        <div className='newac1 grid grid-cols-1 cols-span-2'>
                                            <div className='feild1 py-3'>
                                                <label className='mx-2 text-[18px] font-semibold ml-4'>Project name</label><br></br>
                                                <input type="text" placeholder='Please enter project name here' name='project_name' value={data.project_name} className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" onChange={(e) => { handleChange(e) }} />
                                            </div>
                                        </div>
                                        <div className='newac1 grid grid-cols-1 cols-span-2'>
                                            <div className='feild1 py-3'>
                                                <label className='mx-2 text-[18px] font-semibold ml-4'>Project description</label><br></br>
                                                <textarea cols="40" row="4" placeholder='please write project description in 150 words' name='project_description' value={data.project_description} className="w-[100%] h-[135px] mt-2  rounded-3xl bg-[#DBDBDB] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" onChange={(e) => { handleChange(e) }}></textarea>
                                            </div>
                                        </div>
                                        <div className='newac1 grid grid-cols-2 gap-5'>
                                            <div className='feild1 py-3 flex flex-col'>
                                                <label className='mx-2 text-[18px] font-semibold ml-4 text-start'>Start Date</label>
                                                <input type="date" name="pro_start_date" value={data.pro_start_date} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={(e) => { handleChange(e) }} />
                                            </div>
                                            <div className='feild1 py-3 flex flex-col'>
                                                <label className='mx-2 text-[18px] font-semibold ml-4 text-start'>End Date</label>
                                                <input type="date" name='pro_end_date' value={data.pro_end_date} className="rounded-3xl bg-[#DBDBDB] form-control w-[100%] h-[36px] border-t-0 border-l-0 border-r-0 border-b-0" onChange={(e) => { handleChange(e) }} />
                                            </div>
                                        </div>
                                        <div className='newac1 grid grid-cols-1 cols-span-2'>
                                            <div className='feild1 py-3'>
                                                <label className='mx-2 text-[18px] font-semibold ml-4'>Members</label><br></br>
                                                <input type="text" placeholder='Please enter project Memeber' name='member' value={data.member} className="w-[100%] mt-2  rounded-3xl bg-[#DBDBDB] h-[36px] form-control w-[100%] border-t-0 border-l-0 border-r-0 border-b-0" onChange={(e) => { handleChange(e) }} />
                                            </div>
                                        </div>
                                        <div className='text-center py-10 pb-5'>
                                <button className='bg-[#202040] text-[#fff] text-[18px] font-semibold rounded-3xl px-5 py-1 uppercase hover:bg-[#3DC0DF] hover:text-[#202040]' onClick={() => { submitCareer() }}>Save</button>
                            </div>
                                    </>
                            }
                           
                            <ToastContainer />
                        </div>
                        {/* <div className='grid grid-cols-1'>
                            <div>
                                <h1 className='font-bold text-[26px] flex justify-center'>Career Detail</h1>
                            </div>
                            <div>
                                <div className='m-auto py-10'>
                                    <form className='flex flex-col justify-center'>
                                        <input type="text" placeholder='company nu nae' className='py-2 mt-4 border-black border-0 border-b-[1px] w-[90%] focus:outline-none m-auto' value={viewData.company_name} onChange={(e) => handleChange(e) }></input>
                                        <input type="text" placeholder='company nu nae' className='py-2 mt-4 border-black border-0 border-b-[1px] w-[90%] m-auto focus:outline-none' value={viewData.company_bio} onChange={(e) => handleChange(e) }></input>
                                        <div className='flex  gap-4 w-[90%] m-auto'>
                                            <input type="text" placeholder='company nu nae' className='py-2 mt-4 border-black border-0 border-b-[1px] w-[80%] focus:outline-none' value={viewData.com_start_date} onChange={(e) => handleChange(e) }></input>
                                            <input type="text" placeholder='company nu nae' className='py-2 mt-4 border-black border-0 border-b-[1px] w-[80%] focus:outline-none focus:outline-white ' value={viewData.com_end_date} onChange={(e) => handleChange(e) }></input>
                                        </div>
                                        <input type="text" placeholder='company nu nae' className='py-2 mt-4 border-black border-0 border-b-[1px] w-[90%] m-auto focus:outline-none m-auto' value={viewData.position} onChange={(e) => handleChange(e) }></input>
                                        <input type="text" placeholder='company nu nae' className='py-2 mt-4 border-black border-0 border-b-[1px] w-[90%] m-auto focus:outline-none m-auto' value={viewData.project_name} onChange={(e) => handleChange(e) }></input>
                                        <input type="text" placeholder='company nu nae' className='py-2 mt-4 border-black border-0 border-b-[1px] w-[90%] m-auto focus:outline-none' value={viewData.project_description} onChange={(e) => handleChange(e) }></input>
                                        <div className='flex  gap-4 w-[90%] m-auto'>
                                            <input type="text" placeholder='company nu nae' className='py-2 mt-4 border-black border-0 border-b-[1px] w-[80%] m-auto focus:outline-none' value={viewData.pro_start_date} onChange={(e) => handleChange(e) }></input>
                                            <input type="text" placeholder='company nu nae' className='py-2 mt-4 border-black border-0 border-b-[1px] w-[80%] m-auto focus:outline-none focus:outline-white ' value={viewData.pro_end_date} onChange={(e) => handleChange(e) }></input>
                                        </div>
                                        <input type="text" placeholder='company nu nae' className='py-2 mt-4 border-black border-0 border-b-[1px] w-[90%] m-auto focus:outline-none' value={viewData.member} onChange={(e) => handleChange(e) }></input>
                                        <div className='text-center py-10 pb-5'>
                                            <button className='bg-[#202040] text-[#fff] text-[18px] font-semibold rounded-3xl px-5 py-1 uppercase hover:bg-[#3DC0DF] hover:text-[#202040]' >Upadte</button>
                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => ({
    res: state.addCareerDetails,
    careerdetail: state.fetchCareerDtailById,
    updateres:state.careerDetailUpadte
})
export default connect(mapStateToProps)(MainCertifications) 