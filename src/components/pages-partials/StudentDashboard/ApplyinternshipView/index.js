import React, { useEffect, useState } from 'react'
import { fetchApplyInternshipData } from '../../../../store/action/user/GetData'
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../Profile/Index'

const StudDashboard = ({ dispatch, res }) => {
    const [data, setData] = useState("");


    useEffect(() => {
        dispatch(fetchApplyInternshipData())
    }, [])

    useEffect(() => {
        const data = res.data.data && res.data.data.data
        console.log("heloooooo;", data)
        data && setData(data)
    }, [res])
   


    return (
        <div>
            <ToastContainer />
            <div className='max-w-8xl  mx-auto justify-between items-center px-4 sm:px-6 sm:py-4 lg:px-4 lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-5'>
                    <Profile />
                    <div className='mt-10 sm:px-12 px-4 w-[100%]'>
                        <h1 className='text-[24px] text-center font-bold'> YOU APPLYED FOR THIS INTERNSHIP</h1>
                        <div className='grid grid-cols-2 gap-6 '>
                            {
                                data ?  data.map((val,key) => {
                                    return <>
                                        <div className='flex sm:px-10 px-4 py-4 mt-6 justify-between border-b-2 my-3  bg-gray-50 shadow-xl border'>
                                            <div className=''>
                                                <h2 className='text-[24px] font-bold text-gray-900'>{val.company_name}</h2>
                                                <p className='text-[16px] mb-2 text-gray-700'>{val.user_email}</p>
                                                <p className='text-[16px] mb-2 text-gray-700'>{val.company_city}</p>

                                                <p className='text-[18px] mb-2'>{val.position}</p>
                                            </div>
                                            <div className='self-center'>
                                            {
                                                    val.status == 1 && <button className='px-3 py-2 text-gray-600 bg-slate-600 text-[#ffff] rounded'>Apply</button>
                                                }
                                                {
                                                    val.status == 2 && <button className='px-3 py-2 text-gray-600 bg-blue-600 text-[#ffff] rounded'>process</button>
                                                }
                                                {
                                                    val.status == 3 && <button className='px-3 py-2 text-gray-600 bg-green-600 text-[#ffff] rounded'>success</button>
                                                }
                                                 {
                                                    val.status == 4 && <button className='px-3 py-2 text-gray-600 bg-red-600 text-[#ffff] rounded'>success</button>
                                                }
                                            </div>
                                        </div></>
                                }) : <h1 className='capitalize text-center text-[20px]'>You are not applyed in any job</h1>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    res: state.fetchApplyInternshipData,

})
export default connect(mapStateToProps)(StudDashboard)
