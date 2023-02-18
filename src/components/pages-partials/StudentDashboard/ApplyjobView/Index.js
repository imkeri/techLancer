import React, { useEffect, useState } from 'react'
import { fetchApplyJobData } from '../../../../store/action/user/GetData'
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../Profile/Index'

const StudDashboard = ({ dispatch, res }) => {
    const [data, setData] = useState("");


    useEffect(() => {
        dispatch(fetchApplyJobData())
    }, [])

    useEffect(() => {
        const data = res.data.data && res.data.data.data
        console.log("heloooooo;", data)
        data && setData(data)
    }, [res])
    console.log("darta:::::::::::::", data)


    return (
        <div>
            <ToastContainer />
            <div className='max-w-8xl  mx-auto justify-between items-center px-4 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-5'>
                    <Profile />
                    <div className='mt-10 sm:px-12 px-4 w-[100%]'>
                        <h1 className='text-[24px] text-center font-bold'> YOU APPLYED FOR THIS JOBS</h1>
                        <div className=' '>
                            {
                                data && data.map((val,key) => {
                                    return <>
                                        <div className='flex sm:px-10 px-4 py-4 mt-6 justify-between border-b-2 my-3  bg-gray-50 shadow-xl'>
                                            <div className=''>
                                                <h2 className='text-[24px] font-bold text-gray-900'>{val.company_name}</h2>
                                                <p className='text-[16px] mb-2 text-gray-700'>{val.company_city}</p>

                                                <p className='text-[18px] mb-2'>{val.position}</p>
                                            </div>
                                            <div className='self-center'>
                                                <button className='px-3 py-2 text-gray-600 bg-blue-600 text-[#ffff] rounded'>Status</button>
                                            </div>
                                        </div></>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    res: state.fetchApplyJobData,

})
export default connect(mapStateToProps)(StudDashboard)
