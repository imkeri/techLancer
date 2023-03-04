import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import ProfileSide from '../Profile/Index'
import { fetchInternshipApplyList } from '../../../../store/action/compuny/GetData'
import {internviewLinkInternshipGenrate} from "../../../../store/action/compuny/AddData"
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InternshipApply = ({ dispatch, res ,link}) => {

    const [applydata, setApplydata] = useState([]);
    const [value, setValue] = useState(false)
    const [meetLink, setLink] = useState("")

    useEffect(() => {
        const id = localStorage.getItem('InernshipId')
        dispatch(fetchInternshipApplyList(id))
    }, [])

    useEffect(() => {
        const data = res.data && res.data.data && res.data.data.data
        console
        if (data) {
            setApplydata(data)
        }
    }, [res])

    console.log("applydata",applydata)

    const genrateLinkForInterview = (id) => {
        dispatch(internviewLinkInternshipGenrate(id, { "link": meetLink }))
    }

    useEffect(() => {
        const data = link.data && link.data.data
        console.log("res", data)
        if (data && data.code == 200) {
            if (data.code == 200) {
                toast.success(data.message, {
                    position: toast.POSITION.TOP_CENTER,

                });
               
            }
          
        }
    }, [link])
    return (
        <>
            <div className='max-w-8xl  justify-between items-center sm:px-12 sm:py-4   lg:justify-start lg:space-x-10 '>
                <ToastContainer/>
                <div className='row flex gap-4'>
                    <ProfileSide value="dashboard"/>
                    <div className='w-[100%]'>
                    <div className='h-[30vh] bg-gray-50 relative py-40 '>
                            <h1 className=' text-center text-[30px] font-bold capitalize'>Appled User</h1>
                        </div>
                        <div className='grid lg:grid-cols-2 gap-6'>
                        {
                            applydata.map((val) => {
                                return (
                                    <>
                                            <div className='flex  px-4 py-4 mt-6 w-[100%] my-3   border rounded shadow-lg'>
                                                <div className='w-[20%] flex justify-center self-center pr-2'>
                                                    <img src={val.profile} alt="" className='w-[100px] h-[90px]' />
                                                </div>
                                                <div className='w-[60%] border-l-2 px-5'>
                                                    <div className='capitalize  flex w-[100%]' >
                                                        <div className='font-semibold text-[20px] self-center '>{val.first_name}</div>
                                                        <div className='self-center mx-2 '>{val.types == 1 ? <p className='text-[red] capitalize bg-green-200'>Part Time</p> : <p className='text-[green] capitalize bg-green-200 py-1 px-2 rounded'>full Time</p>}
                                                        </div>
                                                    </div>
                                                    <h2 className='text-[18px] text-gray-900 mt-1'>{val.mobile}</h2>
                                                    <p className='text-[14px] mb-4 text-gray-700'>{val.email}</p>
                                                    {val.hired_status == 1 ? <Link href="https://meet.google.com" target="_blank" className='bg-green-800 text-[#fff] py-2 px-3 rounded' onClick={() => setValue(true)}>Genrate Meet Link</Link> : ""}
                                                    {
                                                        value ? <div>
                                                            <input type="text" name="link" placeholder='Enter Link' className='mt-4 ring-0 outline-0 border-0 border-b-2 border-slate-300 px-0 focus:ring-0 focus:border-slate-300' onChange={(e) => setLink(e.target.value)}></input>
                                                        </div> : ""
                                                    }
                                                </div>
                                                <div className='grid  justify-items-end self-start w-[20%]'>
                                                    {val.hired_status == 1 && <button disabled={meetLink == "" ? true : false} className='px-3 py-2 text-gray-600 bg-[#212A41] text-[#ffff] rounded  ml-10 disabled:opacity-80 '
                                                    onClick={() => genrateLinkForInterview(val.applied_id)}>Apply</button>}
                                                    {val.hired_status == 2 && <button disabled={meetLink == "" ? true : false} className='px-3 py-2 text-gray-600 bg-green-700 text-[#ffff] rounded  disabled:opacity-80 '
                                                    >process</button>}
                                                </div>

                                            </div>
                                        </>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    res: state.fetchInternshipApplyList,
    link:state.internviewLinkInternshipGenrate
})

export default connect(mapStateToProps)(InternshipApply)