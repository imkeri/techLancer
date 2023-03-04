import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { addEnroll } from "../../../../store/action/user/AddData"
import { fetchTimeLecture } from '../../../../store/action/user/GetData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";
import Router from 'next/router'

const EnrollNow = ({ dispatch, res, adderoll }) => {

    const [massage, setMassge] = useState([]);
    const [time, setTime] = useState([])



    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        data && setTime(data);

    }, [res])



    useEffect(() => {
        const course_id = localStorage.getItem("courseId")
        dispatch(fetchTimeLecture(course_id))
    }, []);

    const EnrollAdd = (e, id, code) => {
        e.preventDefault();
        const token = Cookies.get('token')
        if (!token) {
            Router.push('/student-login')
        }
        else {
            const userid = Cookies.get('userId')
            dispatch(addEnroll({ "course_id": id, "user_id": userid, "code": code }))
        }
    }

    useEffect(() => {

        const data = adderoll.data && adderoll.data.data
        data && setMassge(data)


    }, [adderoll])

    useEffect(() => {
           if(massage)
           {
            if (massage.code === 201) {
                toast.success(massage.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
            else if (massage.code === 406) {
                toast.warning(massage.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
            }
           }
    }, [massage])

    return (
        <div>
            <ToastContainer />
            <div className='max-w-7xl mx-auto justify-between items-center px-2 py-5 sm:px-6 sm:py-4 lg:px-6 lg:justify-start  mt-[20px]'>
                <h1 className='text-left text-[35px] font-semibold'>Enroll Now!</h1>
                <div className="schedual1">
                    <div className="">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                            <div className="sm:px-4 pt-4 flex-auto">
                                <div className="tab-content tab-space">
                                    <div id="link1">
                                        <div className='grid grid-cols-7  sm:place-content-center'>
                                            <div className='col-span-2 sm:place-self-center'>
                                                <p className='text-[18px] font-semibold'>DATES</p>
                                            </div>
                                            <div className='col-span-2 sm:place-self-center'>
                                                <p className='text-[18px] font-semibold'>HOURS</p>
                                            </div>
                                            <div className='col-span-2 sm:place-self-center'>
                                                <p className='text-[18px] font-semibold'>COURSE NAME</p>
                                            </div>
                                        </div>
                                        <hr className='m-0'></hr>
                                        {
                                            time.map((val, key) => {
                                                return (
                                                    <>
                                                        <div className='grid grid-cols-7  py-2 sm:place-content-center gap-2'>
                                                            <div className='col-span-2 sm:place-self-center '>
                                                                <div className='flex flex-col'>
                                                                    <p className='md:text-[18px] font-semibold text-[15px] mb-2' >{val.start_date} to {val.end_date}</p>
                                                                    <p className='md:text-[15px] text-[12px] mb-0'><span className='font-bold capitalize'>{val.day[0]}</span> to <span className='font-bold capitalize'>{val.day[1]}</span></p>
                                                                </div>
                                                            </div>
                                                            <div className='col-span-2 sm:place-self-center'>
                                                                <div className='flex flex-col'>
                                                                    <p className='md:text-[18px] font-semibold text-[15px] mb-2'>{val.start_time}PM to {val.end_time}PM</p>
                                                                    <p className='md:text-[15px] text-[12px] mb-0 capitalize'>{val.timezone}</p>
                                                                </div>
                                                            </div>
                                                            <div className='col-span-2'>
                                                                <div className='text-center py-3'>
                                                                    <p className='md:text-[15px] font-semibold text-[12px] mb-0 capitalize'>{val.course_name}</p>
                                                                </div>
                                                            </div>
                                                            <div className='col-span-1'>
                                                                <div className='mt-3'>
                                                                    {
                                                                        val.slot <= 0 ? <button className='float-start bg-[#3DC0DF] text-[#fff] text-[15px] px-2 py-1 rounded text-center hover:bg-[#fff] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF]' onClick={(e) => EnrollAdd(e, val.course_id)}>SOLD OUT</button> : <button className='float-start bg-[#3DC0DF] text-[#fff] text-[15px] md:px-3 md:py-2 rounded text-center hover:bg-[#fff] hover:text-[#3DC0DF] hover:border hover:border-[#3DC0DF] capitalize' onClick={(e) => EnrollAdd(e, val.course_id, val.code)}>Enroll now</button>
                                                                    }
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <hr></hr>
                                                    </>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapStateToProps = (state) => ({
    res: state.fetchTimeLecture,
    adderoll: state.addEnroll
})

export default connect(mapStateToProps)(EnrollNow)