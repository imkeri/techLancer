import React, { useEffect, useState } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ProfileSide from '../Profile/Index';
import { fetchApplyCount } from "../../../../store/action/compuny/GetData"
import { connect } from 'react-redux';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const MainCompDashBoard = ({ dispatch, res }) => {

    const [count, setCount] = useState("")

    useEffect(() => {
        dispatch(fetchApplyCount())
    }, [])


    useEffect(() => {

        const data = res.data && res.data.data;
        data && setCount(data)

    }, [res]);



    return (
        <>
            <div className='max-w-8xl mx-auto justify-between items-center px-20 sm:px-6 sm:py-4  lg:justify-start lg:space-x-10 '>
                <div className='row flex gap-8'>
                    <ProfileSide />
                    <div className='w-[100%] mt-8'>
                        <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 '>
                            <div className="w-[95%] m-auto  flex justify-between px-4 box-border  py-6 border-t-[6px] border-[#212A41] ease-in duration-500 hover:scale-105 rounded-lg shadow-lg items-center">
                                <div className="inner">
                                    <h3 className='font-bold text-[#212A41] text-[26px]'>{count.jod_data}</h3>
                                    <p className='text-[#212A41] uppercase'>Applied For Job</p>
                                </div>
                                <div className="icon">
                                    <WorkOutlineIcon className='bg-[#3DC0DF] text-[#fff] text-[48px] p-1 rounded ' />
                                </div>
                            </div>
                            <div className="w-[95%] m-auto  flex justify-between px-4 box-border  py-6 border-t-[6px] border-[#212A41] ease-in duration-500 hover:scale-105 rounded-lg shadow-lg items-center">
                                <div className="inner">
                                    <h3 className='font-bold text-[#212A41] text-[26px]'>{count.internship_data}</h3>
                                    <p className='text-[#212A41] uppercase'>Applied For Intern</p>
                                </div>
                                <div className="icon">
                                    <GroupOutlinedIcon className='bg-[#3DC0DF] text-[#fff] text-[48px] p-1 rounded ' />
                                </div>
                            </div>
                            <div className="w-[95%] m-auto flex justify-between box-border px-4 py-6 border-t-[6px] border-[#212A41]  ease-in duration-500 hover:scale-105 rounded-lg shadow-lg items-center">
                                <div className="inner">
                                    <h3 className='font-bold text-[#212A41] text-[26px]'>{count.internship_data}</h3>
                                    <p className='text-[#212A41]'>Total Product</p>
                                </div>
                                <div className="icon">
                                    <WhatsAppIcon className='bg-[#3DC0DF] text-[#fff] text-[48px] p-1 rounded ' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => ({
    res: state.fetchApplyCount
})

export default connect(mapStateToProps)(MainCompDashBoard)
